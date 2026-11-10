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
    FunctionComponent, UIEvent as Event, MouseEvent, ReactElement, ReactNode
} from 'react'
import type {TextInputTypes} from 'react-input-material'

import type {ButtonProps} from '@rmwc/button'

import type {
    AuthenticatedProps,
    BaseUserContext,
    BaseUserSession,
    BaseLoginData,
    Location,
    LoginProps,
    RenderStatus,
    Routing,
    To,
    User
} from './type'

import {isFunction} from 'clientnode'
import {memo as memoize, useEffect, useState} from 'react'
import TextInput from 'react-input-material/components/TextInput'
import {useMemorizedValue} from 'react-generic-tools'

import {Button} from '@rmwc/button'

import cssClassNames from './style.module.css'
// endregion
export const CSS_CLASS_NAMES = cssClassNames

/**
 * Creates components to protect content and to log in.
 * NOTE: User hook should either be a "ContextUserHook" or "ReduxUserHook".
 * @param useUser - Hook to retrieve current user.
 * @param routing - Integration of the used routing library.
 * @param routing.Redirect - Component redirecting to given location.
 * @param routing.useLocation - Hook to determine current location.
 * @returns Components.
 */
export const componentFactory = function<
    LoginData extends BaseLoginData = BaseLoginData,
    UserContext extends BaseUserContext = BaseUserContext,
    SessionType extends BaseUserSession<UserContext> =
        BaseUserSession<UserContext>
>(
    useUser: () => User<LoginData, UserContext, SessionType>,
    {Redirect, useLocation}: Routing
): {
    Authenticated: FunctionComponent<AuthenticatedProps>
    Login: FunctionComponent<LoginProps<LoginData, UserContext, SessionType>>
} {
    type UserType = User<LoginData, UserContext, SessionType>

    return {
        /**
         * @param options - Options for given component.
         * @param options.children - Content to render when authenticated.
         * @param options.fallbackLocation - Location to redirect to when
         * authentication was unsuccessful.
         * @param options.loadingFallback - String to show when determining
         * authentication result.
         * @returns An content to be rendered.
         * A wrapper for <Route> that redirects to the login screen if you're
         * not yet authenticated.
         */
        Authenticated: memoize(({
            children, fallbackLocation, loadingFallback = 'loading...'
        }): ReactElement => {
            const location = useLocation()
            const user: UserType = useUser()

            useEffect(
                () => {
                    if (user.session.authenticated === null)
                        user.authenticate()
                },
                [user.session.authenticated]
            )

            fallbackLocation = useMemorizedValue<To | undefined>(
                typeof fallbackLocation === 'string' ?
                    {pathname: fallbackLocation} :
                    fallbackLocation,
                fallbackLocation
            )
            const loginTarget = useMemorizedValue<To>(
                {...(fallbackLocation as Partial<Location> | undefined)},
                fallbackLocation
            )

            if (user.session.authenticated) {
                if (isFunction(children))
                    return <>{children({fallbackLocation, location, user})}</>

                return <>{children}</>
            }

            if (user.session.authenticated === null)
                return <>{loadingFallback ?? ''}</>

            if (
                (fallbackLocation as Partial<Location> | undefined)
                    ?.pathname === location.pathname
            )
                return <></>

            return <Redirect
                replace state={{from: location}} to={loginTarget}
            />
        }),
        Login: ({
            buttonProperties,
            inputProperties,
            loginProperties,
            passwordProperties,

            children,

            onSubmitted,
            onSuccess
        }): ReactElement => {
            const user = useUser() as
                User<BaseLoginData, UserContext, SessionType>

            const [loginInput, setLoginInput] =
                useState<TextInputTypes.Props<string>>(
                    {...loginProperties, invalid: true}
                )
            const [passwordInput, setPasswordInput] =
                useState<TextInputTypes.Props<string>>(
                    {...passwordProperties, invalid: true}
                )
            const [submitted, setSubmitted] = useState<boolean>(false)
            const [sent, setSent] = useState<boolean>(false)

            useEffect(
                () => {
                    if (user.session.authenticated && onSuccess)
                        onSuccess(user)
                },
                [user.session.authenticated, onSuccess]
            )

            const login = useMemorizedValue(
                async (event: Event): Promise<void> => {
                    event.preventDefault()

                    const result: boolean | undefined =
                        onSubmitted &&
                        onSubmitted(
                            loginInput.value ?? null,
                            passwordInput.value ?? null
                        )

                    if (typeof result !== 'boolean' || result) {
                        setSubmitted(true)

                        if (loginInput.valid && passwordInput.valid) {
                            const result: Promise<boolean> | undefined =
                                user.login({
                                    login: loginInput.value ?? null,
                                    password: passwordInput.value ?? null
                                })

                            setSent(true)

                            if (onSuccess && result?.then)
                                await result.then(() => {
                                    onSuccess(user)
                                })
                        }
                    }
                },
                onSubmitted,
                onSuccess,

                loginInput.value,
                loginInput.valid,
                passwordInput.value,
                passwordInput.valid,

                setSent,
                setSubmitted
            )

            const renderStatus: RenderStatus = useMemorizedValue(
                isFunction(children) ?
                    children :
                    children ?
                        ((): ReactNode => children) :
                        (({
                            sent,
                            submitted,
                            pending,
                            authenticated,

                            loginInput,
                            passwordInput
                        }): ReactNode =>
                            pending ?
                                <div className={CSS_CLASS_NAMES.loginStatus}>
                                    authenticating...
                                </div> :
                                submitted &&
                                !authenticated &&
                                (
                                    sent ||
                                    loginInput.invalid ||
                                    passwordInput.invalid
                                ) ?
                                    <div
                                        className={CSS_CLASS_NAMES.loginStatus}
                                        role="alert"
                                    >
                                        {loginInput.invalid ?
                                            'Please type valid login.' :
                                            passwordInput.invalid ?
                                                'Please type valid password.' :
                                                'Invalid credentials!'
                                        }
                                    </div> :
                                    ''
                        ),
                children
            )

            const setSentToFalse = useMemorizedValue(
                () => {
                    setSent(false)
                },
                setSent
            )

            return <form className={CSS_CLASS_NAMES.login}>
                {renderStatus({
                    sent,
                    submitted,
                    pending: Boolean(user.session.authenticating),
                    authenticated: Boolean(user.session.authenticated),

                    loginInput,
                    passwordInput
                })}

                <TextInput<string>
                    className={CSS_CLASS_NAMES.loginName}
                    componentProperties={
                        useMemorizedValue({autoComplete: 'username'})
                    }
                    name="login"

                    onChange={setLoginInput}
                    onChangeValue={setSentToFalse}

                    required

                    trailingIcon="account_circle"

                    {...useMemorizedValue<TextInputTypes.Props<string>>(
                        inputProperties || {}, inputProperties
                    )}
                    {...useMemorizedValue<TextInputTypes.Props<string>>(
                        loginProperties || {}, inputProperties
                    )}
                />

                <TextInput<string>
                    className={CSS_CLASS_NAMES.loginPassword}
                    componentProperties={
                        useMemorizedValue({autoComplete: 'current-password'})
                    }
                    name="password"

                    onChange={setPasswordInput}
                    onChangeValue={setSentToFalse}

                    required

                    trailingIcon="password_preset"

                    {...useMemorizedValue<TextInputTypes.Props<string>>(
                        inputProperties || {}, inputProperties
                    )}
                    {...useMemorizedValue<TextInputTypes.Props<string>>(
                        passwordProperties || {}, passwordProperties
                    )}
                />

                <Button
                    children="Log in"
                    className={CSS_CLASS_NAMES.loginButton}
                    onClick={useMemorizedValue(
                        (event: MouseEvent) => {
                            void login(event)
                        },
                        login
                    )}
                    trailingIcon="input"
                    {...useMemorizedValue<ButtonProps>(
                        buttonProperties || {}, buttonProperties
                    )}
                />
            </form>
        }
    }
}

export default componentFactory
