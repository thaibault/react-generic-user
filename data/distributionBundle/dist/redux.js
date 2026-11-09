if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_clientnode__ from "clientnode";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_includes_js_66c3fd7d__ from "core-js/modules/es.array.includes.js";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__ from "react-generic-tools";
import { useDispatch as __WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useDispatch__, useSelector as __WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useSelector__ } from "react-redux";
import { createAsyncThunk as __WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createAsyncThunk__, createSlice as __WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createSlice__ } from "@reduxjs/toolkit";
/******/ var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ ACTION_NAME_PREFIX; }
/* harmony export */ });
// -*- coding: utf-8 -*-
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

/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["useEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useEffect; } });

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["isObject"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.isObject; } });

/***/ }),
/* 8 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["useMemorizedValue"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__.useMemorizedValue; } });

/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __webpack_require__.d = function(exports, definition) {
/******/ 	for(var key in definition) {
/******/ 		if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 			Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
/******/ 
/************************************************************************/

// EXTERNAL MODULE: external "core-js/modules/es.array.includes.js"
var es_array_includes_js_ = __webpack_require__(3);
// EXTERNAL MODULE: external "clientnode"
var external_clientnode_ = __webpack_require__(7);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(8);
;// external "react-redux"

;// external "@reduxjs/toolkit"

// EXTERNAL MODULE: ./src/type.ts
var type = /*#__PURE__*/__webpack_require__(0);
;// ./src/redux.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module redux *//* !
    region header
    [Project page](https://tsickert.com/react-generic-user)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
var useNoLocation=function useNoLocation(){return null};/**
 * Creates a redux slice, thunks and hooks to manage a user session.
 * @param handler - Implements authentication, login and logout.
 * @param options - Additional options.
 * @param options.useLocation - Hook to determine current location. Needed to
 * remember initially requested locations.
 * @returns Session slice, thunks and hooks.
 */var sessionFactory=function sessionFactory(handler,_temp){var _ref=_temp===void 0?{}:_temp,_ref$useLocation=_ref.useLocation,useLocation=_ref$useLocation===void 0?useNoLocation:_ref$useLocation;/*
        NOTE: We wrap handler calls via "(...parameters) => handler..." to
        allow setting handler after this factory function has been called.
    */var authenticateThunk=__WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createAsyncThunk__("".concat(type/* ACTION_NAME_PREFIX */.u,"/authenticate"),function(){return handler.authenticate.apply(handler,arguments)});var loginThunk=__WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createAsyncThunk__("".concat(type/* ACTION_NAME_PREFIX */.u,"/login"),function(){return handler.login.apply(handler,arguments)});var logoutThunk=__WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createAsyncThunk__("".concat(type/* ACTION_NAME_PREFIX */.u,"/logout"),function(){return handler.logout.apply(handler,arguments)});var useHasRole=function useHasRole(role){var session=__WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useSelector__(function(state){return state.user});var userContext=session===null||session===void 0?void 0:session.userContext;var roles=userContext===null||userContext===void 0?void 0:userContext.roles;return Boolean(roles&&[].concat(role).every(function(role){return roles.includes(role)}))};var slice=__WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createSlice__({name:type/* ACTION_NAME_PREFIX */.u,initialState:{authenticated:null,authenticating:false,deauthenticating:false,initialRequestedLocation:undefined,userContext:undefined},selectors:{selectUser:function selectUser(slice){return slice}},reducers:{deauthenticate:function deauthenticate(state){return _objectSpread(_objectSpread({},state),{},{authenticated:false,userContext:undefined})},setInitialRequestedLocation:function setInitialRequestedLocation(state,_ref2){var payload=_ref2.payload;return _objectSpread(_objectSpread({},state),{},{initialRequestedLocation:payload})}},extraReducers:function extraReducers(builder){builder.addCase(logoutThunk.fulfilled,function(state,action){state.deauthenticating=false;if(action.payload){state.authenticated=false;state.userContext=undefined}}).addCase(logoutThunk.pending,function(state){state.deauthenticating=true}).addCase(logoutThunk.rejected,function(state){state.deauthenticating=false}).addMatcher(function(action){return["".concat(authenticateThunk.typePrefix,"/fulfilled"),"".concat(loginThunk.typePrefix,"/fulfilled")].includes(action.type)},function(state,action){state.authenticating=false;if(typeof action.payload==="boolean")state.authenticated=action.payload;else if((0,external_clientnode_.isObject)(action.payload)){state.authenticated=true;state.userContext=action.payload}else state.authenticated=false}).addMatcher(function(action){return["".concat(authenticateThunk.typePrefix,"/pending"),"".concat(loginThunk.typePrefix,"/pending")].includes(action.type)},function(state){state.authenticating=true}).addMatcher(function(action){return["".concat(authenticateThunk.typePrefix,"/rejected"),"".concat(loginThunk.typePrefix,"/rejected")].includes(action.type)},function(state){state.authenticating=false})}});return{authenticateThunk:authenticateThunk,loginThunk:loginThunk,logoutThunk:logoutThunk,slice:slice,useHasRole:useHasRole,useIsAdmin:function useIsAdmin(){return useHasRole("_admin")},useUser:function useUser(data,isLoginLocation){if(data===void 0){data={}}if(isLoginLocation===void 0){isLoginLocation=function isLoginLocation(location){return location.pathname.endsWith("/login")}}var dispatch=__WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useDispatch__();var location=useLocation();var session=__WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useSelector__(slice.selectors.selectUser);(0,external_react_.useEffect)(function(){if(location&&!isLoginLocation(location)&&(!session||session.initialRequestedLocation===undefined||session.authenticated&&session.initialRequestedLocation!==null))dispatch(slice.actions.setInitialRequestedLocation(session!==null&&session!==void 0&&session.authenticated?null:location))},[dispatch,location,session===null||session===void 0?void 0:session.authenticated,session===null||session===void 0?void 0:session.initialRequestedLocation]);if(session===null)throw new Error("No user redux state found. Did you register a "+"corresponding redux slice?");var authenticate=(0,external_react_generic_tools_.useMemorizedValue)(function(){dispatch(authenticateThunk(data))},dispatch);var login=(0,external_react_generic_tools_.useMemorizedValue)(function(_ref3){var login=_ref3.login,password=_ref3.password;dispatch(loginThunk(_objectSpread(_objectSpread({},data),{},{login:login,password:password})))},dispatch);var logout=(0,external_react_generic_tools_.useMemorizedValue)(function(){dispatch(logoutThunk(data))},dispatch);return (0,external_react_generic_tools_.useMemorizedValue)({authenticate:authenticate,login:login,logout:logout,session:session},authenticateThunk,dispatch,session)}}};/* harmony default export */ var redux = (sessionFactory);
export { redux as default, sessionFactory };
