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

import {createContext, useContext, useState} from 'react'
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
        const [user, setUser] = useState<UserType>({
            session: {
                authenticated: null,
                authenticating: null,
                deauthenticating: null
            },

            authenticate: (): void => {
                setUser((oldUser: UserType): UserType => {
                    /*
                      If already an authentication request is running do
                      nothing.
                    */
                    if (oldUser.session.authenticating)
                        return oldUser

                    const authenticater = (): Promise<UserContext> =>
                        new Promise<UserContext>((
                            resolve: (value: UserContext) => void,
                            reject: (reason: Error) => void
                        ): void => {
                            authenticate(oldUser.session)
                                .then((userContext: UserContext): void => {
                                    setUser((
                                        oldUser: UserType
                                    ): UserType => {
                                        if (options.onAuthenticate)
                                            options.onAuthenticate(userContext)

                                        resolve(userContext)

                                        return {
                                            ...oldUser,
                                            session: {
                                                ...oldUser.session,
                                                authenticated: true,
                                                authenticating: null,
                                                userContext
                                            }
                                        }
                                    })
                                })
                                .catch((error: unknown) => {
                                    setUser(
                                        (oldUser: UserType): UserType => {
                                            /*
                                                eslint-disable
                                                prefer-promise-reject-errors
                                            */
                                            reject(error as Error)
                                            /*
                                                eslint-enable
                                                prefer-promise-reject-errors
                                            */

                                            return {
                                                ...oldUser,
                                                session: {
                                                    ...oldUser.session,
                                                    authenticating: null
                                                }
                                            }
                                        }
                                    )
                                })
                        })

                    return {
                        ...oldUser,
                        session: {
                            ...oldUser.session,
                            authenticating:
                                oldUser.session.deauthenticating ?
                                    oldUser.session.deauthenticating.then(
                                        authenticater, authenticater
                                    ) :
                                    authenticater()
                        }
                    }
                })
            },
            login: (loginData: LoginDataType): undefined => {
                setUser((oldUser: UserType): UserType => {
                    if (oldUser.session.authenticating)
                        return oldUser

                    const authenticater = (): Promise<UserContext> =>
                        new Promise<UserContext>(
                            (
                                resolve: (value: UserContext) => void,
                                reject: (error: Error) => void
                            ): void => {
                                login(loginData)
                                    .then((userContext: UserContext): void => {
                                        setUser(
                                            (oldUser: UserType): UserType => {
                                                if (options.onAuthenticate)
                                                    options.onAuthenticate(
                                                        userContext
                                                    )

                                                resolve(userContext)

                                                return {
                                                    ...oldUser,
                                                    session: {
                                                        ...oldUser.session,
                                                        authenticated: true,
                                                        authenticating: null,
                                                        userContext
                                                    }
                                                }
                                            }
                                        )
                                    })
                                    .catch((error: unknown) => {
                                        setUser(
                                            (oldUser: UserType): UserType => {
                                            /*
                                                eslint-disable
                                                prefer-promise-reject-errors
                                            */
                                                reject(error as Error)
                                            /*
                                                eslint-enable
                                                prefer-promise-reject-errors
                                            */
                                                return {
                                                    ...oldUser,
                                                    session: {
                                                        ...oldUser.session,
                                                        authenticating: null
                                                    }
                                                }
                                            }
                                        )
                                    })
                            }
                        )

                    return {
                        ...oldUser,
                        session: {
                            ...oldUser.session,
                            authenticating:
                                oldUser.session.deauthenticating ?
                                    oldUser.session.deauthenticating.then(
                                        authenticater, authenticater
                                    ) :
                                    authenticater()
                        }
                    }
                })
            },
            logout: (): void => {
                setUser((oldUser: UserType): UserType => {
                    if (oldUser.session.deauthenticating)
                        return oldUser

                    const deauthenticater = (): Promise<boolean> =>
                        new Promise<boolean>((
                            resolve: (value: boolean) => void,
                            reject: (reason: Error) => void
                        ): void => {
                            logout(oldUser.session)
                                .then((deauthenticated: boolean): void => {
                                    setUser((oldUser: UserType): UserType => {
                                        if (
                                            deauthenticated &&
                                            options.onDeauthenticate
                                        )
                                            options.onDeauthenticate(
                                                oldUser.session.userContext
                                            )

                                        resolve(deauthenticated)

                                        return {
                                            ...oldUser,
                                            session: {
                                                ...oldUser.session,
                                                authenticated: !deauthenticated,
                                                deauthenticating: null,
                                                userContext: deauthenticated ?
                                                    undefined :
                                                    oldUser.session.userContext
                                            }
                                        }
                                    })
                                })
                                .catch((error: unknown) => {
                                    setUser(
                                        (oldUser: UserType): UserType => {
                                            /*
                                                eslint-disable
                                                prefer-promise-reject-errors
                                            */
                                            reject(error as Error)
                                            /*
                                                eslint-enable
                                                prefer-promise-reject-errors
                                            */

                                            return {
                                                ...oldUser,
                                                session: {
                                                    ...oldUser.session,
                                                    deauthenticating: null
                                                }
                                            }
                                        }
                                    )
                                })
                        })

                    return {
                        ...oldUser,
                        session: {
                            ...oldUser.session,
                            deauthenticating: oldUser.session.authenticating ?
                                oldUser.session.authenticating
                                    .then(deauthenticater, deauthenticater) :
                                deauthenticater()
                        }
                    }
                })
            }
        })

        return user
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
