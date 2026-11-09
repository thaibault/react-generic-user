if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import { TextInput as __WEBPACK_EXTERNAL_MODULE_react_input_material_bf884f53_TextInput__ } from "react-input-material";
import { Button as __WEBPACK_EXTERNAL_MODULE__rmwc_button_e0454fea_Button__ } from "@rmwc/button";
import { useDispatch as __WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useDispatch__, useSelector as __WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useSelector__ } from "react-redux";
import { createAsyncThunk as __WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createAsyncThunk__, createSlice as __WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createSlice__ } from "@reduxjs/toolkit";
import * as __WEBPACK_EXTERNAL_MODULE_clientnode__ from "clientnode";
import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_includes_js_66c3fd7d__ from "core-js/modules/es.array.includes.js";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_generic_tools_67824958__ from "react-generic-tools";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
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
module.exports = x({ ["createContext"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.createContext; }, ["memo"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.memo; }, ["useContext"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useContext; }, ["useEffect"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useEffect; }, ["useState"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useState; } });

/***/ }),
/* 2 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["Fragment"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.Fragment; }, ["jsx"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsx; }, ["jsxs"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsxs; } });

/***/ }),
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sr: function() { return /* binding */ CSS_CLASS_NAMES; },
  WV: function() { return /* binding */ componentFactory; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "clientnode"
var external_clientnode_ = __webpack_require__(7);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
;// external "react-input-material"

// EXTERNAL MODULE: external "react-generic-tools"
var external_react_generic_tools_ = __webpack_require__(8);
;// external "@rmwc/button"

;// ./src/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"login":"login","loginStatus":"login__status","loginButton":"login__button","loginName":"login__name","loginPassword":"login__password"});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(2);
;// ./src/components.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module index *//* !
    region header
    [Project page](https://tsickert.com/react-generic-user)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};// endregion
var CSS_CLASS_NAMES=style_module;/**
 * Creates components to protect content and to log in.
 * NOTE: User hook should either be a "ContextUserHook" or "ReduxUserHook".
 * @param useUser - Hook to retrieve current user.
 * @param routing - Integration of the used routing library.
 * @param routing.Redirect - Component redirecting to given location.
 * @param routing.useLocation - Hook to determine current location.
 * @returns Components.
 */var componentFactory=function componentFactory(useUser,_ref){var Redirect=_ref.Redirect,useLocation=_ref.useLocation;return{/**
         * @param options - Options for given component.
         * @param options.children - Content to render when authenticated.
         * @param options.fallbackLocation - Location to redirect to when
         * authentication was unsuccessful.
         * @param options.loadingFallback - String to show when determining
         * authentication result.
         * @returns An content to be rendered.
         * A wrapper for <Route> that redirects to the login screen if you're
         * not yet authenticated.
         */Authenticated:/*#__PURE__*/(0,external_react_.memo)(function(_ref2){var _fallbackLocation;var children=_ref2.children,fallbackLocation=_ref2.fallbackLocation,_ref2$loadingFallback=_ref2.loadingFallback,loadingFallback=_ref2$loadingFallback===void 0?"loading...":_ref2$loadingFallback;var location=useLocation();var user=useUser();(0,external_react_.useEffect)(function(){if(user.session.authenticated===null)user.authenticate()},[user.session.authenticated]);fallbackLocation=(0,external_react_generic_tools_.useMemorizedValue)(typeof fallbackLocation==="string"?{pathname:fallbackLocation}:fallbackLocation,fallbackLocation);var loginTarget=(0,external_react_generic_tools_.useMemorizedValue)(_objectSpread({},fallbackLocation),fallbackLocation);if(user.session.authenticated){if((0,external_clientnode_.isFunction)(children))return/*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment,{children:children({fallbackLocation:fallbackLocation,location:location,user:user})});return/*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment,{children:children})}if(user.session.authenticated===null)return/*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment,{children:loadingFallback!==null&&loadingFallback!==void 0?loadingFallback:""});if(((_fallbackLocation=fallbackLocation)===null||_fallbackLocation===void 0?void 0:_fallbackLocation.pathname)===location.pathname)return/*#__PURE__*/(0,jsx_runtime_.jsx)(jsx_runtime_.Fragment,{});return/*#__PURE__*/(0,jsx_runtime_.jsx)(Redirect,{replace:true,state:{from:location},to:loginTarget})}),Login:function Login(_ref3){var buttonProperties=_ref3.buttonProperties,inputProperties=_ref3.inputProperties,loginProperties=_ref3.loginProperties,passwordProperties=_ref3.passwordProperties,children=_ref3.children,onSubmitted=_ref3.onSubmitted,onSuccess=_ref3.onSuccess;var user=useUser();var _useState=(0,external_react_.useState)(_objectSpread(_objectSpread({},loginProperties),{},{invalid:true})),_useState2=_slicedToArray(_useState,2),loginInput=_useState2[0],setLoginInput=_useState2[1];var _useState3=(0,external_react_.useState)(_objectSpread(_objectSpread({},passwordProperties),{},{invalid:true})),_useState4=_slicedToArray(_useState3,2),passwordInput=_useState4[0],setPasswordInput=_useState4[1];var _useState5=(0,external_react_.useState)(false),_useState6=_slicedToArray(_useState5,2),submitted=_useState6[0],setSubmitted=_useState6[1];var _useState7=(0,external_react_.useState)(false),_useState8=_slicedToArray(_useState7,2),sent=_useState8[0],setSent=_useState8[1];(0,external_react_.useEffect)(function(){if(user.session.authenticated&&onSuccess)onSuccess(user)},[user.session.authenticated,onSuccess]);var login=(0,external_react_generic_tools_.useMemorizedValue)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event){var _loginInput$value,_passwordInput$value;var result,_loginInput$value2,_passwordInput$value2,_result;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:event.preventDefault();result=onSubmitted&&onSubmitted((_loginInput$value=loginInput.value)!==null&&_loginInput$value!==void 0?_loginInput$value:null,(_passwordInput$value=passwordInput.value)!==null&&_passwordInput$value!==void 0?_passwordInput$value:null);if(!(typeof result!=="boolean"||result)){_context.n=1;break}setSubmitted(true);if(!(loginInput.valid&&passwordInput.valid)){_context.n=1;break}_result=user.login({login:(_loginInput$value2=loginInput.value)!==null&&_loginInput$value2!==void 0?_loginInput$value2:null,password:(_passwordInput$value2=passwordInput.value)!==null&&_passwordInput$value2!==void 0?_passwordInput$value2:null});setSent(true);if(!(onSuccess&&_result!==null&&_result!==void 0&&_result.then)){_context.n=1;break}_context.n=1;return _result.then(function(){onSuccess(user)});case 1:return _context.a(2)}},_callee)})),onSubmitted,onSuccess,loginInput.value,loginInput.valid,passwordInput.value,passwordInput.valid,setSent,setSubmitted);var renderStatus=(0,external_react_generic_tools_.useMemorizedValue)((0,external_clientnode_.isFunction)(children)?children:children?function(){return children}:function(_ref5){var sent=_ref5.sent,submitted=_ref5.submitted,pending=_ref5.pending,authenticated=_ref5.authenticated,loginInput=_ref5.loginInput,passwordInput=_ref5.passwordInput;return pending?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:CSS_CLASS_NAMES.loginStatus,children:"authenticating..."}):submitted&&!authenticated&&(sent||loginInput.invalid||passwordInput.invalid)?/*#__PURE__*/(0,jsx_runtime_.jsx)("div",{className:CSS_CLASS_NAMES.loginStatus,role:"alert",children:loginInput.invalid?"Please type valid login.":passwordInput.invalid?"Please type valid password.":"Invalid credentials!"}):""},children);var setSentToFalse=(0,external_react_generic_tools_.useMemorizedValue)(function(){setSent(false)},setSent);return/*#__PURE__*/(0,jsx_runtime_.jsxs)("form",{className:CSS_CLASS_NAMES.login,children:[renderStatus({sent:sent,submitted:submitted,pending:Boolean(user.session.authenticating),authenticated:Boolean(user.session.authenticated),loginInput:loginInput,passwordInput:passwordInput}),/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE_react_input_material_bf884f53_TextInput__,_objectSpread(_objectSpread({className:CSS_CLASS_NAMES.loginName,componentProperties:(0,external_react_generic_tools_.useMemorizedValue)({autoComplete:"username"}),name:"login",onChange:setLoginInput,onChangeValue:setSentToFalse,required:true,trailingIcon:"account_circle"},(0,external_react_generic_tools_.useMemorizedValue)(inputProperties||{},inputProperties)),(0,external_react_generic_tools_.useMemorizedValue)(loginProperties||{},inputProperties))),/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE_react_input_material_bf884f53_TextInput__,_objectSpread(_objectSpread({className:CSS_CLASS_NAMES.loginPassword,componentProperties:(0,external_react_generic_tools_.useMemorizedValue)({autoComplete:"current-password"}),name:"password",onChange:setPasswordInput,onChangeValue:setSentToFalse,required:true,trailingIcon:"password_preset"},(0,external_react_generic_tools_.useMemorizedValue)(inputProperties||{},inputProperties)),(0,external_react_generic_tools_.useMemorizedValue)(passwordProperties||{},passwordProperties))),/*#__PURE__*/(0,jsx_runtime_.jsx)(__WEBPACK_EXTERNAL_MODULE__rmwc_button_e0454fea_Button__,_objectSpread({children:"Log in",className:CSS_CLASS_NAMES.loginButton,onClick:(0,external_react_generic_tools_.useMemorizedValue)(function(event){void login(event)},login),trailingIcon:"input"},(0,external_react_generic_tools_.useMemorizedValue)(buttonProperties||{},buttonProperties)))]})}}};/* harmony default export */ var components = ((/* unused pure expression or super */ null && (componentFactory)));

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: function() { return /* binding */ sessionFactory; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module index *//* !
    region header
    [Project page](https://tsickert.com/react-generic-user)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
var sessionFactory=function sessionFactory(_ref){var _authenticate=_ref.authenticate,_login=_ref.login,_logout=_ref.logout;var userContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);var useUser=function useUser(){var user=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(userContext);if(user===undefined)throw new Error("No user context available. Did you wrap components using "+"the user context into the \"UserProvider\" component?");return user};var useHasRole=function useHasRole(role){var _user$session$userCon;var user=useUser();var roles=(_user$session$userCon=user.session.userContext)===null||_user$session$userCon===void 0?void 0:_user$session$userCon.roles;return Boolean(roles&&[].concat(role).every(function(role){return roles.includes(role)}))};var useUserState=function useUserState(options){if(options===void 0){options={}}var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({session:{authenticated:null,authenticating:null,deauthenticating:null},authenticate:function authenticate(){setUser(function(oldUser){/*
                      If already an authentication request is running do
                      nothing.
                    */if(oldUser.session.authenticating)return oldUser;var authenticater=function authenticater(){return new Promise(function(resolve,reject){_authenticate(oldUser.session).then(function(userContext){setUser(function(oldUser){if(options.onAuthenticate)options.onAuthenticate(userContext);resolve(userContext);return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{authenticated:true,authenticating:null,userContext:userContext})})})}).catch(function(error){setUser(function(oldUser){/*
                                                eslint-disable
                                                prefer-promise-reject-errors
                                            */reject(error);/*
                                                eslint-enable
                                                prefer-promise-reject-errors
                                            */return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{authenticating:null})})})})})};return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{authenticating:oldUser.session.deauthenticating?oldUser.session.deauthenticating.then(authenticater,authenticater):authenticater()})})})},login:function login(loginData){setUser(function(oldUser){if(oldUser.session.authenticating)return oldUser;var authenticater=function authenticater(){return new Promise(function(resolve,reject){_login(loginData).then(function(userContext){setUser(function(oldUser){if(options.onAuthenticate)options.onAuthenticate(userContext);resolve(userContext);return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{authenticated:true,authenticating:null,userContext:userContext})})})}).catch(function(error){setUser(function(oldUser){/*
                                                eslint-disable
                                                prefer-promise-reject-errors
                                            */reject(error);/*
                                                eslint-enable
                                                prefer-promise-reject-errors
                                            */return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{authenticating:null})})})})})};return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{authenticating:oldUser.session.deauthenticating?oldUser.session.deauthenticating.then(authenticater,authenticater):authenticater()})})})},logout:function logout(){setUser(function(oldUser){if(oldUser.session.deauthenticating)return oldUser;var deauthenticater=function deauthenticater(){return new Promise(function(resolve,reject){_logout(oldUser.session).then(function(deauthenticated){setUser(function(oldUser){if(deauthenticated&&options.onDeauthenticate)options.onDeauthenticate(oldUser.session.userContext);resolve(deauthenticated);return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{authenticated:!deauthenticated,deauthenticating:null,userContext:deauthenticated?undefined:oldUser.session.userContext})})})}).catch(function(error){setUser(function(oldUser){/*
                                                eslint-disable
                                                prefer-promise-reject-errors
                                            */reject(error);/*
                                                eslint-enable
                                                prefer-promise-reject-errors
                                            */return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{deauthenticating:null})})})})})};return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{deauthenticating:oldUser.session.authenticating?oldUser.session.authenticating.then(deauthenticater,deauthenticater):deauthenticater()})})})}}),_useState2=_slicedToArray(_useState,2),user=_useState2[0],setUser=_useState2[1];return user};return{UserProvider:function UserProvider(_ref2){var children=_ref2.children,options=_ref2.options;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(userContext.Provider,{value:useUserState(options),children:children})},userContext:userContext,useHasRole:useHasRole,useIsAdmin:function useIsAdmin(){return useHasRole("_admin")},useUser:useUser,useUserState:useUserState}};/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (sessionFactory)));

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: function() { return /* binding */ sessionFactory; }
});

// UNUSED EXPORTS: default

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
    */var authenticateThunk=__WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createAsyncThunk__("".concat(type/* ACTION_NAME_PREFIX */.u,"/authenticate"),function(){return handler.authenticate.apply(handler,arguments)});var loginThunk=__WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createAsyncThunk__("".concat(type/* ACTION_NAME_PREFIX */.u,"/login"),function(){return handler.login.apply(handler,arguments)});var logoutThunk=__WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createAsyncThunk__("".concat(type/* ACTION_NAME_PREFIX */.u,"/logout"),function(){return handler.logout.apply(handler,arguments)});var useHasRole=function useHasRole(role){var session=__WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useSelector__(function(state){return state.user});var userContext=session===null||session===void 0?void 0:session.userContext;var roles=userContext===null||userContext===void 0?void 0:userContext.roles;return Boolean(roles&&[].concat(role).every(function(role){return roles.includes(role)}))};var slice=__WEBPACK_EXTERNAL_MODULE__reduxjs_toolkit_b9e87ac4_createSlice__({name:type/* ACTION_NAME_PREFIX */.u,initialState:{authenticated:null,authenticating:false,deauthenticating:false,initialRequestedLocation:undefined,userContext:undefined},selectors:{selectUser:function selectUser(slice){return slice}},reducers:{deauthenticate:function deauthenticate(state){return _objectSpread(_objectSpread({},state),{},{authenticated:false,userContext:undefined})},setInitialRequestedLocation:function setInitialRequestedLocation(state,_ref2){var payload=_ref2.payload;return _objectSpread(_objectSpread({},state),{},{initialRequestedLocation:payload})}},extraReducers:function extraReducers(builder){builder.addCase(logoutThunk.fulfilled,function(state,action){state.deauthenticating=false;if(action.payload){state.authenticated=false;state.userContext=undefined}}).addCase(logoutThunk.pending,function(state){state.deauthenticating=true}).addCase(logoutThunk.rejected,function(state){state.deauthenticating=false}).addMatcher(function(action){return["".concat(authenticateThunk.typePrefix,"/fulfilled"),"".concat(loginThunk.typePrefix,"/fulfilled")].includes(action.type)},function(state,action){state.authenticating=false;if(typeof action.payload==="boolean")state.authenticated=action.payload;else if((0,external_clientnode_.isObject)(action.payload)){state.authenticated=true;state.userContext=action.payload}else state.authenticated=false}).addMatcher(function(action){return["".concat(authenticateThunk.typePrefix,"/pending"),"".concat(loginThunk.typePrefix,"/pending")].includes(action.type)},function(state){state.authenticating=true}).addMatcher(function(action){return["".concat(authenticateThunk.typePrefix,"/rejected"),"".concat(loginThunk.typePrefix,"/rejected")].includes(action.type)},function(state){state.authenticating=false})}});return{authenticateThunk:authenticateThunk,loginThunk:loginThunk,logoutThunk:logoutThunk,slice:slice,useHasRole:useHasRole,useIsAdmin:function useIsAdmin(){return useHasRole("_admin")},useUser:function useUser(data,isLoginLocation){if(data===void 0){data={}}if(isLoginLocation===void 0){isLoginLocation=function isLoginLocation(location){return location.pathname.endsWith("/login")}}var dispatch=__WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useDispatch__();var location=useLocation();var session=__WEBPACK_EXTERNAL_MODULE_react_redux_1ffa815c_useSelector__(slice.selectors.selectUser);(0,external_react_.useEffect)(function(){if(location&&!isLoginLocation(location)&&(!session||session.initialRequestedLocation===undefined||session.authenticated&&session.initialRequestedLocation!==null))dispatch(slice.actions.setInitialRequestedLocation(session!==null&&session!==void 0&&session.authenticated?null:location))},[dispatch,location,session===null||session===void 0?void 0:session.authenticated,session===null||session===void 0?void 0:session.initialRequestedLocation]);if(session===null)throw new Error("No user redux state found. Did you register a "+"corresponding redux slice?");var authenticate=(0,external_react_generic_tools_.useMemorizedValue)(function(){dispatch(authenticateThunk(data))},dispatch);var login=(0,external_react_generic_tools_.useMemorizedValue)(function(_ref3){var login=_ref3.login,password=_ref3.password;dispatch(loginThunk(_objectSpread(_objectSpread({},data),{},{login:login,password:password})))},dispatch);var logout=(0,external_react_generic_tools_.useMemorizedValue)(function(){dispatch(logoutThunk(data))},dispatch);return (0,external_react_generic_tools_.useMemorizedValue)({authenticate:authenticate,login:login,logout:logout,session:session},authenticateThunk,dispatch,session)}}};/* harmony default export */ var redux = ((/* unused pure expression or super */ null && (sessionFactory)));

/***/ }),
/* 7 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["isFunction"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.isFunction; }, ["isObject"]: function() { return __WEBPACK_EXTERNAL_MODULE_clientnode__.isObject; } });

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
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WV: function() { return /* reexport safe */ _components_js__WEBPACK_IMPORTED_MODULE_0__.WV; },
/* harmony export */   l$: function() { return /* reexport safe */ _redux_js__WEBPACK_IMPORTED_MODULE_2__.t; },
/* harmony export */   qJ: function() { return /* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_1__.t; },
/* harmony export */   sr: function() { return /* reexport safe */ _components_js__WEBPACK_IMPORTED_MODULE_0__.sr; },
/* harmony export */   uI: function() { return /* reexport safe */ _type_js__WEBPACK_IMPORTED_MODULE_3__.u; }
/* harmony export */ });
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = /*#__PURE__*/__webpack_require__(4);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = /*#__PURE__*/__webpack_require__(5);
/* harmony import */ var _redux_js__WEBPACK_IMPORTED_MODULE_2__ = /*#__PURE__*/__webpack_require__(6);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_3__ = /*#__PURE__*/__webpack_require__(0);
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module index *//* !
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
var __webpack_exports__ACTION_NAME_PREFIX = __webpack_exports__.uI;
var __webpack_exports__CSS_CLASS_NAMES = __webpack_exports__.sr;
var __webpack_exports__componentFactory = __webpack_exports__.WV;
var __webpack_exports__contextSessionFactory = __webpack_exports__.qJ;
var __webpack_exports__reduxSessionFactory = __webpack_exports__.l$;
export { __webpack_exports__ACTION_NAME_PREFIX as ACTION_NAME_PREFIX, __webpack_exports__CSS_CLASS_NAMES as CSS_CLASS_NAMES, __webpack_exports__componentFactory as componentFactory, __webpack_exports__contextSessionFactory as contextSessionFactory, __webpack_exports__reduxSessionFactory as reduxSessionFactory };
