if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;// -*- coding: utf-8 -*-
/** @module type *//* !
    region header
    [Project page](https://tsickert.com/react-generic-user)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
// endregion
// NOTE: Has to be redeclared since it is not exported by "@reduxjs/toolkit".
// region exports
/// region routing
/**
 * Minimal location representation to stay independent of a concrete routing
 * library (e.g. "react-router" locations are compatible).
 *//**
 * Integration of the used routing library.
 * Using "react-router" for example: "{Redirect: Navigate, useLocation}".
 *//// endregion
/// region universal
//// region hooks
//// endregion
/// endregion
/// region context
//// region expected given integration by library's usage
//// endregion
/// endregion
/// region redux
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
var ACTION_NAME_PREFIX="user";//// region expected given integration by library's usage
//// endregion
/// endregion
// endregion
export { ACTION_NAME_PREFIX };
