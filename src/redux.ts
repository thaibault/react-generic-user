// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module redux */
'use strict'
/* !
    region header
    [Project page](https://tsickert.com/react-generic-user)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012
    endregion
*/
// region imports
import type {UnknownAction} from 'redux'

import type {Draft, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit'

import type {
    AsyncThunkConfig,
    BaseLoginData,
    BaseUserContext,
    BaseUserSession,
    Location,
    ReduxSessionHandler,
    ReduxSessionOptions,
    ReduxSessionService,
    ReduxUserSession,
    Selectors,
    User
} from './type'

import {isObject} from 'clientnode'
import {useEffect} from 'react'
import {useMemorizedValue} from 'react-generic-tools'
import {useDispatch, useSelector} from 'react-redux'

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


import {ACTION_NAME_PREFIX} from './type'
// endregion
const useNoLocation = (): null => null

/**
 * Creates a redux slice, thunks and hooks to manage a user session.
 * @param handler - Implements authentication, login and logout.
 * @param options - Additional options.
 * @param options.useLocation - Hook to determine current location. Needed to
 * remember initially requested locations.
 * @returns Session slice, thunks and hooks.
 */
export const sessionFactory = <
    LoginData extends BaseLoginData = BaseLoginData,
    UserContext extends BaseUserContext = BaseUserContext,
    SessionType extends BaseUserSession<UserContext> =
        BaseUserSession<UserContext>,
    AsyncThunkOptions extends AsyncThunkConfig = AsyncThunkConfig
>(
        handler: ReduxSessionHandler<
            LoginData, UserContext, AsyncThunkOptions
        >,
        {useLocation = useNoLocation}: ReduxSessionOptions = {}
    ): ReduxSessionService<
        LoginData, UserContext, SessionType, AsyncThunkOptions
    > => {
    /*
        NOTE: We wrap handler calls via "(...parameters) => handler..." to
        allow setting handler after this factory function has been called.
    */
    const authenticateThunk = createAsyncThunk<
        null | UserContext, Partial<LoginData>, AsyncThunkOptions
    >(
        `${ACTION_NAME_PREFIX}/authenticate`,
        (...parameters) => handler.authenticate(...parameters)
    )
    const loginThunk = createAsyncThunk<
        null | UserContext, LoginData, AsyncThunkOptions
    >(
        `${ACTION_NAME_PREFIX}/login`,
        (...parameters) => handler.login(...parameters)
    )
    const logoutThunk =
        createAsyncThunk<boolean, Partial<LoginData>, AsyncThunkOptions>(
            `${ACTION_NAME_PREFIX}/logout`, (...parameters) =>
                handler.logout(...parameters)
        )

    const useHasRole = (role: Array<string> | string): boolean => {
        const session: ReduxUserSession<UserContext> | undefined = useSelector(
            (state: {user: ReduxUserSession<UserContext> | undefined}): (
                ReduxUserSession<UserContext> | undefined
            ) => state.user
        )

        const userContext: null | UserContext | undefined = session?.userContext
        const roles: Array<string> | null | undefined = userContext?.roles

        return Boolean(
            roles &&
            ([] as Array<string>).concat(role).every((role: string): boolean =>
                roles.includes(role)
            )
        )
    }

    const slice = createSlice<
        ReduxUserSession<UserContext>,
        SliceCaseReducers<ReduxUserSession<UserContext>>,
        typeof ACTION_NAME_PREFIX,
        Selectors<UserContext>
    >({
        name: ACTION_NAME_PREFIX,
        initialState: {
            authenticated: null,
            authenticating: false,
            deauthenticating: false,

            initialRequestedLocation: undefined,

            userContext: undefined
        },
        selectors: {selectUser: (slice) => slice},
        reducers: {
            deauthenticate: (
                state: Draft<ReduxUserSession<UserContext>>
            ): Draft<ReduxUserSession<UserContext>> => ({
                ...state,
                authenticated: false,
                userContext: undefined
            }),
            setInitialRequestedLocation: (
                state: Draft<ReduxUserSession<UserContext>>,
                {payload}: {payload: null | Location}
            ): Draft<ReduxUserSession<UserContext>> => ({
                ...state,
                initialRequestedLocation: payload
            })
        },
        extraReducers: (builder) => {
            builder
                .addCase(
                    logoutThunk.fulfilled,
                    (
                        state: Draft<ReduxUserSession<UserContext>>,
                        action: PayloadAction<boolean>
                    ) => {
                        state.deauthenticating = false

                        if (action.payload) {
                            state.authenticated = false
                            state.userContext = undefined
                        }
                    }
                )
                .addCase(
                    logoutThunk.pending,
                    (state: Draft<ReduxUserSession<UserContext>>) => {
                        state.deauthenticating = true
                    }
                )
                .addCase(
                    logoutThunk.rejected,
                    (state: Draft<ReduxUserSession<UserContext>>) => {
                        state.deauthenticating = false
                    }
                )
                .addMatcher(
                    (action: PayloadAction<boolean | UserContext>): boolean =>
                        [
                            `${authenticateThunk.typePrefix}/fulfilled`,
                            `${loginThunk.typePrefix}/fulfilled`
                        ].includes(action.type),
                    (
                        state: Draft<ReduxUserSession<UserContext>>,
                        action: PayloadAction<boolean | UserContext>
                    ) => {
                        state.authenticating = false
                        if (typeof action.payload === 'boolean')
                            state.authenticated = action.payload
                        else if (isObject(action.payload)) {
                            state.authenticated = true
                            ;(state.userContext as UserContext) =
                                action.payload
                        } else
                            state.authenticated = false
                    }
                )
                .addMatcher(
                    (action: PayloadAction<boolean | UserContext>): boolean =>
                        [
                            `${authenticateThunk.typePrefix}/pending`,
                            `${loginThunk.typePrefix}/pending`
                        ].includes(action.type),
                    (state: Draft<ReduxUserSession<UserContext>>) => {
                        state.authenticating = true
                    }
                )
                .addMatcher(
                    (action: PayloadAction<boolean | UserContext>): boolean =>
                        [
                            `${authenticateThunk.typePrefix}/rejected`,
                            `${loginThunk.typePrefix}/rejected`
                        ].includes(action.type),
                    (state: Draft<ReduxUserSession<UserContext>>) => {
                        state.authenticating = false
                    }
                )
        }
    })

    return {
        authenticateThunk,
        loginThunk,
        logoutThunk,

        slice,

        useHasRole,
        useIsAdmin: (): boolean => useHasRole('_admin'),
        useUser: (
            data: Partial<LoginData> = {},
            isLoginLocation: (location: Location) => boolean = (location) =>
                location.pathname.endsWith('/login')
        ): User<LoginData, UserContext, SessionType> => {
            const dispatch = useDispatch()
            const location = useLocation()

            const session = useSelector(slice.selectors.selectUser) as
                SessionType | null

            useEffect(
                () => {
                    if (
                        location &&
                        !isLoginLocation(location) &&
                        (
                            !session ||
                            session.initialRequestedLocation === undefined ||
                            session.authenticated &&
                            session.initialRequestedLocation !== null
                        )
                    )
                        dispatch(slice.actions.setInitialRequestedLocation(
                            session?.authenticated ? null : location
                        ) as UnknownAction)
                },
                [
                    dispatch,
                    location,
                    session?.authenticated,
                    session?.initialRequestedLocation
                ]
            )

            if (session === null)
                throw new Error(
                    'No user redux state found. Did you register a ' +
                    'corresponding redux slice?'
                )

            const authenticate = useMemorizedValue(
                () => {
                    dispatch(
                        authenticateThunk(
                            data as never
                        ) as unknown as UnknownAction
                    )
                },
                dispatch
            )
            const login = useMemorizedValue(
                ({login, password}: LoginData): undefined => {
                    dispatch(loginThunk(
                        {...data, login, password} as LoginData & undefined
                    ) as unknown as UnknownAction)
                },
                dispatch
            )
            const logout = useMemorizedValue(
                () => {
                    dispatch(logoutThunk(
                        data as never) as unknown as UnknownAction
                    )
                },
                dispatch
            )

            return useMemorizedValue(
                {authenticate, login, logout, session},
                authenticateThunk,
                dispatch,
                session
            )
        }
    }
}

export default sessionFactory
