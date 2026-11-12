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
import type {
    BaseUserContext,
    BaseUserSession,
    LoginFormState,
    RedirectProperties,
    User
} from '../type'

import {act} from 'react'
import prepareTestEnvironment from 'react-generic-tools/testHelper'

import {
    afterEach, beforeEach, describe, expect, jest, test
} from '@jest/globals'

import componentFactory from '../components'

import {settle} from './helper'
// endregion
describe('components', () => {
    const environment = prepareTestEnvironment(beforeEach, afterEach)

    let location = {pathname: '/protected'}
    let user: User

    const Redirect = (properties: RedirectProperties) =>
        <span className="redirect">{JSON.stringify(properties)}</span>
    const {Authenticated, Login} = componentFactory(
        () => user, {Redirect, useLocation: () => location}
    )

    const createUser = (
        session: Partial<BaseUserSession<BaseUserContext>> = {}
    ): User => ({
        authenticate: jest.fn(),
        login: jest.fn(() => Promise.resolve(true)),
        logout: jest.fn(),
        session: {
            authenticated: null,
            authenticating: false,
            deauthenticating: false,
            ...session
        }
    })
    const getText = () => environment.container?.textContent ?? ''

    beforeEach(() => {
        location = {pathname: '/protected'}
        user = createUser()
    })

    describe('Authenticated', () => {
        test('renders content of authenticated users', () => {
            user = createUser({authenticated: true})

            environment.render(<Authenticated>protected</Authenticated>)

            expect(getText()).toStrictEqual('protected')
            expect(user.authenticate).not.toHaveBeenCalled()
        })
        test('provides context to render functions', () => {
            user = createUser({authenticated: true})
            const render = jest.fn((_context: unknown) => 'protected')

            environment.render(<Authenticated fallbackLocation="/login">
                {render}
            </Authenticated>)

            expect(getText()).toStrictEqual('protected')
            expect(render).toHaveBeenCalledWith({
                fallbackLocation: {pathname: '/login'}, location, user
            })
        })
        test('authenticates unknown users', () => {
            environment.render(<Authenticated>protected</Authenticated>)

            expect(getText()).toStrictEqual('loading...')
            expect(user.authenticate).toHaveBeenCalledTimes(1)
        })
        test('renders given loading fallback', () => {
            environment.render(<Authenticated loadingFallback="wait">
                protected
            </Authenticated>)

            expect(getText()).toStrictEqual('wait')
        })
        test('redirects unauthenticated users', () => {
            user = createUser({authenticated: false})

            environment.render(<Authenticated fallbackLocation="/login">
                protected
            </Authenticated>)

            expect(JSON.parse(getText())).toStrictEqual({
                replace: true,
                state: {from: {pathname: '/protected'}},
                to: {pathname: '/login'}
            })
        })
        test('does not redirect to the current location', () => {
            user = createUser({authenticated: false})
            location = {pathname: '/login'}

            environment.render(<Authenticated
                fallbackLocation={{pathname: '/login', search: '?a=b'}}
            >
                protected
            </Authenticated>)

            expect(getText()).toStrictEqual('')
        })
    })
    describe('Login', () => {
        const getButton = () =>
            environment.container?.querySelector('.login__button') as
                HTMLButtonElement
        const getStatus = () =>
            environment.container?.querySelector('.login__status')
        /**
         * Types given value into input with given name.
         * @param name - Input name.
         * @param value - Value to type.
         * @returns Promise resolving when typed value was processed.
         */
        const type = async (name: string, value: string) => {
            const input = environment.container?.querySelector(
                `input[name="${name}"]`
            ) as HTMLInputElement

            act(() => {
                ;(Object.getOwnPropertyDescriptor(
                    HTMLInputElement.prototype, 'value'
                )?.set as (value: string) => void).call(input, value)
                input.dispatchEvent(new Event('input', {bubbles: true}))
            })

            await settle()
        }
        const submit = async () => {
            act(() => {
                getButton().click()
            })

            await settle()
        }

        test('renders a login form', () => {
            environment.render(<Login />)

            expect(environment.container?.querySelector('form.login'))
                .not.toBeNull()
            expect(environment.container?.querySelector('input[name="login"]'))
                .not.toBeNull()
            expect(environment.container?.querySelector(
                'input[name="password"]'
            )).not.toBeNull()
            expect(getButton().textContent).toContain('Log in')
            expect(getStatus()).toBeNull()
        })
        test('reports missing inputs', async () => {
            environment.render(<Login />)

            await submit()

            expect(getStatus()?.textContent)
                .toStrictEqual('Please type valid login.')
            expect(getStatus()?.getAttribute('role')).toStrictEqual('alert')
            expect(user.login).not.toHaveBeenCalled()

            await type('login', 'name')
            await submit()

            expect(getStatus()?.textContent)
                .toStrictEqual('Please type valid password.')
        })
        test('logs in with given credentials', async () => {
            const onSuccess = jest.fn()

            environment.render(<Login onSuccess={onSuccess} />)

            await type('login', 'name')
            await type('password', 'secret')
            await submit()

            expect(user.login)
                .toHaveBeenCalledWith({login: 'name', password: 'secret'})
            expect(onSuccess).toHaveBeenCalledWith(user)
            // NOTE: The given user is still not authenticated.
            expect(getStatus()?.textContent)
                .toStrictEqual('Invalid credentials!')
        })
        test('lets given submit handler prevent logins', async () => {
            const onSubmitted = jest.fn(
                (_login: null | string, _password: null | string) => false
            )

            environment.render(<Login onSubmitted={onSubmitted} />)

            await type('login', 'name')
            await type('password', 'secret')
            await submit()

            expect(onSubmitted).toHaveBeenCalledWith('name', 'secret')
            expect(user.login).not.toHaveBeenCalled()
            expect(getStatus()).toBeNull()
        })
        test('reports pending authentications', () => {
            user = createUser({authenticating: true})

            environment.render(<Login />)

            expect(getStatus()?.textContent)
                .toStrictEqual('authenticating...')
        })
        test('notifies about authenticated users', () => {
            user = createUser({authenticated: true})
            const onSuccess = jest.fn()

            environment.render(<Login onSuccess={onSuccess} />)

            expect(onSuccess).toHaveBeenCalledWith(user)
        })
        test('renders given status', async () => {
            const render = jest.fn((state: LoginFormState) =>
                state.submitted ? 'submitted' : 'initial'
            )

            environment.render(<Login>{render}</Login>)
            expect(getText()).toContain('initial')

            await submit()

            expect(getText()).toContain('submitted')
            expect(render).toHaveBeenLastCalledWith(expect.objectContaining({
                authenticated: false, pending: false, sent: false
            }))
        })
    })
})
