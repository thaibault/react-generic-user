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
import {act} from 'react'
// endregion
/*
    NOTE: Asynchronous "act" calls need a "MessageChannel" implementation which
    is not available here, so we let started tasks settle afterward and let
    react schedule resulting updates by its own.
*/
/**
 * Settles pending promises and renders resulting updates.
 * @returns Promise resolving when settled.
 */
export const settle = async (): Promise<void> => {
    const scope = globalThis as {IS_REACT_ACT_ENVIRONMENT?: boolean}
    scope.IS_REACT_ACT_ENVIRONMENT = false
    try {
        for (let index = 0; index < 3; index++)
            await new Promise((resolve) => {
                setTimeout(resolve)
            })
    } finally {
        scope.IS_REACT_ACT_ENVIRONMENT = true
    }
}
/**
 * Calls given callback and settles resulting tasks afterward.
 * @param callback - Callback to call.
 * @returns Callback's result.
 */
export const trigger = async <Type>(callback: () => Type): Promise<Type> => {
    let result: Type | undefined
    act(() => {
        result = callback()
    })

    await settle()

    return result as Type
}
