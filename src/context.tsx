// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module index */
'use strict'
/* !
    region header
    [Project page](https://tsickert.com/react-generic-user)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012
    endregion
*/
// region imports
import type {
    BaseUserContext,
    BaseLoginData,
    ContextSessionHandler,
    ContextUserSession,
    SessionCallbacks,
    SessionTools,
    User
} from './type'

import {
    createContext, useContext, useMemo, useRef, useState
} from 'react'
// endregion
export const sessionFactory = <
    LoginDataType extends BaseLoginData = BaseLoginData,
    UserContext extends BaseUserContext = BaseUserContext
>({authenticate, login, logout}: ContextSessionHandler<
    LoginDataType, UserContext
>): SessionTools<
    LoginDataType, UserContext, ContextUserSession<UserContext>
> => {
    type UserType =
        User<LoginDataType, UserContext, ContextUserSession<UserContext>>
    type MaybeUserType = UserType | undefined

    const userContext = createContext<MaybeUserType>(undefined)

    const useUser = (): UserType => {
        const user: MaybeUserType = useContext<MaybeUserType>(userContext)

        if (user === undefined)
            throw new Error(
                'No user context available. Did you wrap components using ' +
                'the user context into the "UserProvider" component?'
            )

        return user
    }

    const useHasRole = (role: Array<string> | string): boolean => {
        const user: UserType = useUser()

        const roles: Array<string> | undefined =
            user.session.userContext?.roles

        return Boolean(
            roles &&
            ([] as Array<string>).concat(role).every((role: string): boolean =>
                roles.includes(role)
            )
        )
    }

    const useUserState = (
        options: Partial<SessionCallbacks<UserContext>> = {}
    ): UserType => {
        type Session = ContextUserSession<UserContext>

        /*
            NOTE: Requests are started outside of react's state updater
            functions since they have to be pure (strict mode calls them
            twice). So we track the latest session synchronously.
        */
        const sessionReference = useRef<Session>({
            authenticated: null,
            authenticating: null,
            deauthenticating: null
        })
        const [session, setSession] =
            useState<Session>(sessionReference.current)

        const optionsReference = useRef(options)
        optionsReference.current = options

        const [actions] = useState(() => {
            const updateSession = (update: (session: Session) => Session) => {
                sessionReference.current = update(sessionReference.current)
                setSession(sessionReference.current)
            }
            /**
             * Runs given authentication request after a running logout and
             * records its result.
             * @param request - Authentication request to run.
             */
            const startAuthentication = (
                request: () => Promise<UserContext>
            ) => {
                // If already an authentication request is running do nothing.
                if (sessionReference.current.authenticating)
                    return

                const authenticater = (): Promise<UserContext> =>
                    request().then(
                        (userContext: UserContext): UserContext => {
                            if (optionsReference.current.onAuthenticate)
                                optionsReference.current.onAuthenticate(
                                    userContext
                                )

                            updateSession((session) => ({
                                ...session,
                                authenticated: true,
                                authenticating: null,
                                userContext
                            }))

                            return userContext
                        },
                        (error: unknown) => {
                            /*
                                NOTE: A failed authentication means that there
                                is no authenticated user, so dependent
                                components can redirect to a login page.
                            */
                            updateSession((session) => ({
                                ...session,
                                authenticated: false,
                                authenticating: null,
                                userContext: undefined
                            }))

                            throw error
                        }
                    )

                const {deauthenticating} = sessionReference.current
                const authenticating = deauthenticating ?
                    deauthenticating.then(authenticater, authenticater) :
                    authenticater()

                updateSession((session) => ({...session, authenticating}))
            }

            return {
                authenticate: (): void => {
                    startAuthentication(() =>
                        authenticate(sessionReference.current)
                    )
                },
                login: (loginData: LoginDataType): undefined => {
                    startAuthentication(() => login(loginData))
                },
                logout: (): void => {
                    // If already a logout request is running do nothing.
                    if (sessionReference.current.deauthenticating)
                        return

                    const deauthenticater = (): Promise<boolean> =>
                        logout(sessionReference.current).then(
                            (deauthenticated: boolean): boolean => {
                                if (
                                    deauthenticated &&
                                    optionsReference.current.onDeauthenticate
                                )
                                    optionsReference.current.onDeauthenticate(
                                        sessionReference.current.userContext
                                    )

                                updateSession((session) => ({
                                    ...session,
                                    authenticated: !deauthenticated,
                                    deauthenticating: null,
                                    userContext: deauthenticated ?
                                        undefined :
                                        session.userContext
                                }))

                                return deauthenticated
                            },
                            (error: unknown) => {
                                updateSession((session) => ({
                                    ...session, deauthenticating: null
                                }))

                                throw error
                            }
                        )

                    const {authenticating} = sessionReference.current
                    const deauthenticating = authenticating ?
                        authenticating.then(deauthenticater, deauthenticater) :
                        deauthenticater()

                    updateSession((session) => ({
                        ...session, deauthenticating
                    }))
                }
            }
        })

        return useMemo<UserType>(
            () => ({...actions, session}), [actions, session]
        )
    }

    return {
        UserProvider: ({children, options}) =>
            <userContext.Provider value={useUserState(options)}>
                {children}
            </userContext.Provider>,
        userContext,

        useHasRole,
        useIsAdmin: (): boolean => useHasRole('_admin'),
        useUser,
        useUserState
    }
}

export default sessionFactory
