if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import * as __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_includes_js_66c3fd7d__ from "core-js/modules/es.array.includes.js";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__ from "react/jsx-runtime";
/******/ var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["createContext"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.createContext; }, ["useContext"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useContext; }, ["useState"]: function() { return __WEBPACK_EXTERNAL_MODULE_react__.useState; } });

/***/ }),
/* 2 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({ ["jsx"]: function() { return __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1__.jsx; } });

/***/ }),
/* 3 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var x = function(y) {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = function(x) { return function() { return x; }; }
module.exports = x({  });

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
                                            */return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{deauthenticating:null})})})})})};return _objectSpread(_objectSpread({},oldUser),{},{session:_objectSpread(_objectSpread({},oldUser.session),{},{deauthenticating:oldUser.session.authenticating?oldUser.session.authenticating.then(deauthenticater,deauthenticater):deauthenticater()})})})}}),_useState2=_slicedToArray(_useState,2),user=_useState2[0],setUser=_useState2[1];return user};return{UserProvider:function UserProvider(_ref2){var children=_ref2.children,options=_ref2.options;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(userContext.Provider,{value:useUserState(options),children:children})},userContext:userContext,useHasRole:useHasRole,useIsAdmin:function useIsAdmin(){return useHasRole("_admin")},useUser:useUser,useUserState:useUserState}};/* harmony default export */ __webpack_exports__.A = (sessionFactory);
var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default, sessionFactory };
