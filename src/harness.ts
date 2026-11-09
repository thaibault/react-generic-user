// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'
/* !
    region header
    [Project page](https://tsickert.com/react-generic-user)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import type {BaseLocator} from 'react-generic-tools/endToEndTestHelper'

import textInputHarness from
    'react-input-material/components/TextInput/harness'
// endregion
/**
 * Provides locators to interact with a rendered login form.
 * @param parent - Locator to search for login form elements in.
 * @returns Stable and optional locators.
 */
export const loginHarness = (parent: BaseLocator) => ({
    stable: {
        nameInput: textInputHarness(parent.locator('.login__name')),
        passwordInput: textInputHarness(parent.locator('.login__password')),
        loginButton: {main: parent.locator('.login__button')}
    },
    optional: {
        statusMessage: parent.locator('.login__status'),
        errorStatusMessage:
            parent.locator('.login__status')
                .and(parent.getByRole('alert'))
    }
})

export default loginHarness
