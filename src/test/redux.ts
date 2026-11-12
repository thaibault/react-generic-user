// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/
// region imports
import type {FunctionComponent, ReactNode} from 'react'
import type {UnknownAction} from 'redux'

import type {BaseLoginData, BaseUserContext, Location} from '../type'

import {createElement} from 'react'
import prepareTestEnvironment from 'react-generic-tools/testHelper'
import {Provider} from 'react-redux'

import {configureStore} from '@reduxjs/toolkit'
import {
    afterEach, beforeEach, describe, expect, jest, test
} from '@jest/globals'

import sessionFactory from '../redux'
import {ACTION_NAME_PREFIX} from '../type'

import {trigger} from './helper'
// endregion
type LoginData = BaseLoginData & {tenant?: string}

const handler = {
    authenticate: jest.fn(
        (_data: Partial<LoginData>): Promise<BaseUserContext | null> =>
            Promise.resolve(null)
    ),
    login: jest.fn(
        (_data: Partial<LoginData>): Promise<BaseUserContext | null> =>
            Promise.resolve(null)
    ),
    logout: jest.fn(
        (_data: Partial<LoginData>): Promise<boolean> => Promise.resolve(true)
    )
}
let location: Location | null = {pathname: '/protected'}

const {
    authenticateThunk, loginThunk, logoutThunk, slice, useHasRole, useIsAdmin,
    useUser
} = sessionFactory<LoginData>(
    {
        authenticate: (data) => handler.authenticate(data),
        login: (data) => handler.login(data),
        logout: (data) => handler.logout(data)
    },
    {useLocation: () => location}
)

describe('slice', () => {
    const reduce = (
        type: string,
        payload?: unknown,
        state = slice.getInitialState()
    ) =>
        slice.reducer(
            state,
            {payload, type: `${ACTION_NAME_PREFIX}/${type}`} as UnknownAction
        )
    const authenticatedState = {
        ...slice.getInitialState(),
        authenticated: true,
        userContext: {name: 'a', roles: []}
    }

    test('provides its thunks action types', () => {
        expect(authenticateThunk.typePrefix)
            .toStrictEqual(`${ACTION_NAME_PREFIX}/authenticate`)
        expect(loginThunk.typePrefix)
            .toStrictEqual(`${ACTION_NAME_PREFIX}/login`)
        expect(logoutThunk.typePrefix)
            .toStrictEqual(`${ACTION_NAME_PREFIX}/logout`)
    })
    test('tracks authentication requests', () => {
        for (const name of ['authenticate', 'login']) {
            expect(reduce(`${name}/pending`).authenticating)
                .toStrictEqual(true)
            expect(reduce(
                `${name}/rejected`,
                undefined,
                {...slice.getInitialState(), authenticating: true}
            ).authenticating).toStrictEqual(false)
        }
    })
    test('records authentication results', () => {
        const userContext = {name: 'a', roles: ['b']}

        expect(reduce('authenticate/fulfilled', userContext)).toMatchObject(
            {authenticated: true, authenticating: false, userContext}
        )
        expect(reduce('login/fulfilled', true).authenticated)
            .toStrictEqual(true)
        expect(reduce('login/fulfilled', false).authenticated)
            .toStrictEqual(false)
        expect(reduce('login/fulfilled', null).authenticated)
            .toStrictEqual(false)
    })
    test('tracks logout requests', () => {
        expect(reduce('logout/pending').deauthenticating).toStrictEqual(true)
        expect(reduce('logout/fulfilled', true, authenticatedState))
            .toMatchObject({
                authenticated: false,
                deauthenticating: false,
                userContext: undefined
            })
        expect(reduce('logout/fulfilled', false, authenticatedState))
            .toMatchObject({authenticated: true, deauthenticating: false})
        expect(reduce(
            'logout/rejected',
            undefined,
            {...authenticatedState, deauthenticating: true}
        )).toMatchObject({authenticated: true, deauthenticating: false})
    })
    test('deauthenticate', () => {
        expect(slice.reducer(
            authenticatedState, slice.actions.deauthenticate(undefined)
        )).toMatchObject({authenticated: false, userContext: undefined})
    })
    test('setInitialRequestedLocation', () => {
        expect(slice.reducer(
            undefined, slice.actions.setInitialRequestedLocation(null)
        ).initialRequestedLocation).toBeNull()
    })
})
describe('hooks', () => {
    const {runHook} = prepareTestEnvironment(beforeEach, afterEach)

    let store = configureStore({reducer: {user: slice.reducer}})

    const render = async <Type>(hook: () => Type) => {
        const {result} = runHook(hook, {wrapper: {component: (({
            children
        }: {children: ReactNode}) =>
            createElement(Provider, {children, store})
        ) as FunctionComponent}})

        await trigger(() => undefined)

        return result
    }
    const useSession = () => ({
        ...useUser({tenant: 'tenant'}),
        hasRoles: useHasRole(['a', 'b']),
        isAdmin: useIsAdmin()
    })

    beforeEach(() => {
        store = configureStore({reducer: {user: slice.reducer}})
        location = {pathname: '/protected'}

        for (const mock of Object.values(handler))
            mock.mockClear()
    })

    test('authenticates', async () => {
        const userContext = {name: 'admin', roles: ['_admin', 'a', 'b']}
        handler.authenticate.mockImplementation(() =>
            Promise.resolve(userContext)
        )

        const result = await render(useSession)
        expect(result.value.session.authenticated).toBeNull()
        expect(result.value.isAdmin).toStrictEqual(false)

        await trigger(() => {
            result.value.authenticate()
        })

        expect(handler.authenticate).toHaveBeenCalledWith({tenant: 'tenant'})
        expect(result.value.session).toMatchObject({
            authenticated: true, authenticating: false, userContext
        })
        expect(result.value.hasRoles).toStrictEqual(true)
        expect(result.value.isAdmin).toStrictEqual(true)
    })
    test('checks all given roles', async () => {
        handler.authenticate.mockImplementation(() =>
            Promise.resolve({name: 'a', roles: ['a']})
        )

        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })

        expect(result.value.hasRoles).toStrictEqual(false)
    })
    test('handles user contexts without roles', async () => {
        handler.authenticate.mockImplementation(() =>
            Promise.resolve({name: 'a'})
        )

        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })

        expect(result.value.session.authenticated).toStrictEqual(true)
        expect(result.value.isAdmin).toStrictEqual(false)
    })
    test('logs in with given and configured data', async () => {
        handler.login.mockImplementation(() =>
            Promise.resolve({name: 'a', roles: []})
        )

        const result = await render(useSession)
        await trigger(() => {
            result.value.login({login: 'a', password: 'b'})
        })

        expect(handler.login).toHaveBeenCalledWith(
            {login: 'a', password: 'b', tenant: 'tenant'}
        )
        expect(result.value.session.authenticated).toStrictEqual(true)
    })
    test('handles failing logins', async () => {
        handler.login.mockImplementation(() =>
            Promise.reject(new Error('failed'))
        )

        const result = await render(useSession)
        await trigger(() => {
            result.value.login({login: 'a', password: 'b'})
        })

        expect(result.value.session).toMatchObject(
            {authenticated: null, authenticating: false}
        )
    })
    test('logs out', async () => {
        handler.login.mockImplementation(() =>
            Promise.resolve({name: 'a', roles: []})
        )

        const result = await render(useSession)
        await trigger(() => {
            result.value.login({login: 'a', password: 'b'})
        })
        await trigger(() => {
            result.value.logout()
        })

        expect(handler.logout).toHaveBeenCalledWith({tenant: 'tenant'})
        expect(result.value.session).toMatchObject({
            authenticated: false,
            deauthenticating: false,
            userContext: undefined
        })
    })
    describe('initially requested location', () => {
        test('remembers initially requested locations', async () => {
            await render(useUser)

            expect(store.getState().user.initialRequestedLocation)
                .toStrictEqual({pathname: '/protected'})
        })
        test('ignores login locations', async () => {
            location = {pathname: '/login'}

            await render(useUser)

            expect(store.getState().user.initialRequestedLocation)
                .toBeUndefined()
        })
        test('respects given login location indicator', async () => {
            await render(() =>
                useUser({}, ({pathname}) => pathname === '/protected')
            )

            expect(store.getState().user.initialRequestedLocation)
                .toBeUndefined()
        })
        test('forgets locations after authentication', async () => {
            handler.authenticate.mockImplementation(() =>
                Promise.resolve({name: 'a', roles: []})
            )

            const result = await render(useUser)
            await trigger(() => {
                result.value.authenticate()
            })

            expect(store.getState().user.initialRequestedLocation)
                .toBeNull()
        })
        test('does not track locations without location hook', async () => {
            const {slice, useUser} = sessionFactory<LoginData>(handler)
            store = configureStore({reducer: {user: slice.reducer}})

            await render(useUser)

            expect(store.getState().user.initialRequestedLocation)
                .toBeUndefined()
        })
    })
})
