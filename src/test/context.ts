// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import type {FunctionComponent, ReactNode} from 'react'

import type {
    BaseLoginData, BaseUserContext, ContextUserSession, SessionCallbacks
} from '../type'

import {createElement, StrictMode} from 'react'
import prepareTestEnvironment from 'react-generic-tools/testHelper'

import {
    afterEach, beforeEach, describe, expect, jest, test
} from '@jest/globals'

import sessionFactory from '../context'

import {settle, trigger} from './helper'
// endregion
describe('context session', () => {
    const {runHook} = prepareTestEnvironment(beforeEach, afterEach)

    type Session = ContextUserSession<BaseUserContext>

    const handler = {
        authenticate: jest.fn(
            (_session: Session): Promise<BaseUserContext> =>
                Promise.resolve({name: 'a', roles: ['a']})
        ),
        login: jest.fn(
            (_data: BaseLoginData): Promise<BaseUserContext> =>
                Promise.resolve({name: 'a', roles: ['a']})
        ),
        logout: jest.fn(
            (_session: Session): Promise<boolean> => Promise.resolve(true)
        )
    }
    const {UserProvider, useHasRole, useIsAdmin, useUser} = sessionFactory({
        authenticate: (session) => handler.authenticate(session),
        login: (data) => handler.login(data),
        logout: (session) => handler.logout(session)
    })

    let callbacks: SessionCallbacks<BaseUserContext>

    const render = async <Type>(hook: () => Type, strict = false) => {
        const {result} = runHook(hook, {wrapper: {component: (({
            children
        }: {children: ReactNode}) => {
            const provider =
                createElement(UserProvider, {children, options: callbacks})

            return strict ?
                createElement(StrictMode, null, provider) :
                provider
        }) as FunctionComponent}})

        await settle()

        return result
    }
    const useSession = () => ({
        ...useUser(),
        hasRole: useHasRole('a'),
        isAdmin: useIsAdmin()
    })
    /**
     * Creates a promise which can be resolved or rejected from outside.
     * @returns Promise and its handlers.
     */
    const createDeferred = <Type>() => {
        let resolve: (value: Type) => void = () => {
            // Will be replaced.
        }
        let reject: (reason: Error) => void = () => {
            // Will be replaced.
        }
        const promise = new Promise<Type>((givenResolve, givenReject) => {
            resolve = givenResolve
            reject = givenReject
        })

        return {promise, reject, resolve}
    }

    beforeEach(() => {
        callbacks = {onAuthenticate: jest.fn(), onDeauthenticate: jest.fn()}

        handler.authenticate.mockReset()
        handler.authenticate.mockImplementation(() =>
            Promise.resolve({name: 'a', roles: ['a']})
        )
        handler.login.mockReset()
        handler.login.mockImplementation(() =>
            Promise.resolve({name: 'a', roles: ['a']})
        )
        handler.logout.mockReset()
        handler.logout.mockImplementation(() => Promise.resolve(true))
    })

    test('needs a provider', () => {
        const error = jest.spyOn(console, 'error').mockImplementation(() => {
            // Suppress reacts error boundary logging.
        })

        expect(() => runHook(useUser, {})).toThrow('UserProvider')

        error.mockRestore()
    })
    test('starts unauthenticated', async () => {
        const result = await render(useSession)

        expect(result.value.session).toStrictEqual({
            authenticated: null, authenticating: null, deauthenticating: null
        })
        expect(result.value.hasRole).toStrictEqual(false)
        expect(result.value.isAdmin).toStrictEqual(false)
    })
    test('authenticates', async () => {
        const result = await render(useSession)

        await trigger(() => {
            result.value.authenticate()
        })

        expect(handler.authenticate).toHaveBeenCalledTimes(1)
        expect(result.value.session).toMatchObject({
            authenticated: true,
            authenticating: null,
            userContext: {name: 'a', roles: ['a']}
        })
        expect(result.value.hasRole).toStrictEqual(true)
        expect(result.value.isAdmin).toStrictEqual(false)
        expect(callbacks.onAuthenticate)
            .toHaveBeenCalledWith({name: 'a', roles: ['a']})
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
        expect(result.value.hasRole).toStrictEqual(false)
    })
    test('ignores authentications while authenticating', async () => {
        const deferred = createDeferred<BaseUserContext>()
        handler.authenticate.mockImplementation(() => deferred.promise)

        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })
        expect(result.value.session.authenticating).toBeInstanceOf(Promise)

        await trigger(() => {
            result.value.authenticate()
            result.value.login({login: 'a', password: 'b'})
        })

        await trigger(() => {
            deferred.resolve({name: 'a', roles: []})
        })

        expect(handler.authenticate).toHaveBeenCalledTimes(1)
        expect(handler.login).not.toHaveBeenCalled()
        expect(result.value.session.authenticated).toStrictEqual(true)
    })
    test('handles failing authentications', async () => {
        const deferred = createDeferred<BaseUserContext>()
        handler.authenticate.mockImplementation(() => deferred.promise)

        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })
        const authenticating =
            result.value.session.authenticating as Promise<BaseUserContext>

        const assertion = expect(authenticating).rejects.toThrow('failed')
        deferred.reject(new Error('failed'))
        await settle()
        await assertion

        expect(result.value.session).toMatchObject(
            {authenticated: null, authenticating: null}
        )
        expect(callbacks.onAuthenticate).not.toHaveBeenCalled()
    })
    test('logs in', async () => {
        const result = await render(useSession)

        await trigger(() => {
            result.value.login({login: 'a', password: 'b'})
        })

        expect(handler.login)
            .toHaveBeenCalledWith({login: 'a', password: 'b'})
        expect(result.value.session).toMatchObject({
            authenticated: true,
            authenticating: null,
            userContext: {name: 'a', roles: ['a']}
        })
        expect(callbacks.onAuthenticate).toHaveBeenCalledTimes(1)
    })
    test('handles failing logins', async () => {
        const deferred = createDeferred<BaseUserContext>()
        handler.login.mockImplementation(() => deferred.promise)

        const result = await render(useSession)
        await trigger(() => {
            result.value.login({login: 'a', password: 'b'})
        })
        const authenticating =
            result.value.session.authenticating as Promise<BaseUserContext>

        const assertion = expect(authenticating).rejects.toThrow('failed')
        deferred.reject(new Error('failed'))
        await settle()
        await assertion

        expect(result.value.session).toMatchObject(
            {authenticated: null, authenticating: null}
        )
    })
    test('logs out', async () => {
        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })

        await trigger(() => {
            result.value.logout()
        })

        expect(handler.logout).toHaveBeenCalledTimes(1)
        expect(result.value.session).toMatchObject({
            authenticated: false,
            deauthenticating: null,
            userContext: undefined
        })
        expect(callbacks.onDeauthenticate)
            .toHaveBeenCalledWith({name: 'a', roles: ['a']})
    })
    test('stays logged in on refused logouts', async () => {
        handler.logout.mockImplementation(() => Promise.resolve(false))

        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })
        await trigger(() => {
            result.value.logout()
        })

        expect(result.value.session).toMatchObject({
            authenticated: true,
            deauthenticating: null,
            userContext: {name: 'a', roles: ['a']}
        })
        expect(result.value.hasRole).toStrictEqual(true)
        expect(callbacks.onDeauthenticate).not.toHaveBeenCalled()
    })
    test('handles failing logouts', async () => {
        const deferred = createDeferred<boolean>()
        handler.logout.mockImplementation(() => deferred.promise)

        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })
        await trigger(() => {
            result.value.logout()
        })
        const deauthenticating =
            result.value.session.deauthenticating as Promise<boolean>

        await trigger(() => {
            result.value.logout()
        })
        expect(handler.logout).toHaveBeenCalledTimes(1)

        const assertion =
            expect(deauthenticating).rejects.toThrow('failed')
        deferred.reject(new Error('failed'))
        await settle()
        await assertion

        expect(result.value.session).toMatchObject(
            {authenticated: true, deauthenticating: null}
        )
    })
    test('logs out after running authentications', async () => {
        const deferred = createDeferred<BaseUserContext>()
        handler.authenticate.mockImplementation(() => deferred.promise)

        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })
        await trigger(() => {
            result.value.logout()
        })

        expect(handler.logout).not.toHaveBeenCalled()

        await trigger(() => {
            deferred.resolve({name: 'a', roles: []})
        })

        expect(handler.logout).toHaveBeenCalledTimes(1)
        expect(result.value.session.authenticated).toStrictEqual(false)
    })
    test('calls handlers once per request in strict mode', async () => {
        const result = await render(useSession, true)

        await trigger(() => {
            result.value.authenticate()
        })
        expect(handler.authenticate).toHaveBeenCalledTimes(1)
        expect(callbacks.onAuthenticate).toHaveBeenCalledTimes(1)

        await trigger(() => {
            result.value.logout()
        })
        expect(handler.logout).toHaveBeenCalledTimes(1)
        expect(callbacks.onDeauthenticate).toHaveBeenCalledTimes(1)

        await trigger(() => {
            result.value.login({login: 'a', password: 'b'})
        })
        expect(handler.login).toHaveBeenCalledTimes(1)
        expect(callbacks.onAuthenticate).toHaveBeenCalledTimes(2)
        expect(result.value.session.authenticated).toStrictEqual(true)
    })
    test('uses current callbacks', async () => {
        const {render: rerender, result} = runHook(
            useSession,
            {wrapper: {component: (({children}: {children: ReactNode}) =>
                createElement(UserProvider, {children, options: callbacks})
            ) as FunctionComponent}}
        )
        await settle()

        const initialOnAuthenticate = callbacks.onAuthenticate
        const onAuthenticate = jest.fn()
        callbacks = {...callbacks, onAuthenticate}
        await trigger(() => {
            rerender()
        })

        await trigger(() => {
            result.value.authenticate()
        })

        expect(initialOnAuthenticate).not.toHaveBeenCalled()
        expect(onAuthenticate).toHaveBeenCalledTimes(1)
    })
    test('authenticates after running logouts', async () => {
        const deferred = createDeferred<boolean>()
        handler.logout.mockImplementation(() => deferred.promise)

        const result = await render(useSession)
        await trigger(() => {
            result.value.authenticate()
        })
        await trigger(() => {
            result.value.logout()
        })
        await trigger(() => {
            result.value.authenticate()
        })

        expect(handler.authenticate).toHaveBeenCalledTimes(1)

        await trigger(() => {
            deferred.resolve(true)
        })

        expect(handler.authenticate).toHaveBeenCalledTimes(2)
        expect(result.value.session.authenticated).toStrictEqual(true)
    })
})
