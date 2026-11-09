if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import { default as __WEBPACK_EXTERNAL_MODULE_react_input_material_components_TextInput_harness_1f30e93e_default__ } from "react-input-material/components/TextInput/harness";

;// external "react-input-material/components/TextInput/harness"

;// ./src/harness.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness *//* !
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
/**
 * Provides locators to interact with a rendered login form.
 * @param parent - Locator to search for login form elements in.
 * @returns Stable and optional locators.
 */var loginHarness=function loginHarness(parent){return{stable:{nameInput:__WEBPACK_EXTERNAL_MODULE_react_input_material_components_TextInput_harness_1f30e93e_default__(parent.locator(".login__name")),passwordInput:__WEBPACK_EXTERNAL_MODULE_react_input_material_components_TextInput_harness_1f30e93e_default__(parent.locator(".login__password")),loginButton:{main:parent.locator(".login__button")}},optional:{statusMessage:parent.locator(".login__status"),errorStatusMessage:parent.locator(".login__status").and(parent.getByRole("alert"))}}};/* harmony default export */ var harness = (loginHarness);
export { harness as default, loginHarness };
