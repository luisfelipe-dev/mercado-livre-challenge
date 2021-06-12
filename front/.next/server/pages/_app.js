module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Loading/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Loading/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Loading/styles.ts\");\n\nvar _jsxFileName = \"/Users/luisfelipe/Desktop/Projetos/ML-FRONT/front/src/components/Loading/index.tsx\";\n\n\n\nconst Loading = ({\n  loading\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    active: loading,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"LoadingIcon\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeD82M2NhIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7O0FBTUEsTUFBTUEsT0FBK0IsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpQjtBQUN2RCxzQkFDRSxxRUFBQyxpREFBRDtBQUFXLFVBQU0sRUFBRUEsT0FBbkI7QUFBQSwyQkFDRSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRZUQsc0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRhaW5lciwgTG9hZGluZ0ljb24gfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBMb2FkaW5nUHJvcHMge1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBMb2FkaW5nOiBSZWFjdC5GQzxMb2FkaW5nUHJvcHM+ID0gKHsgbG9hZGluZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBhY3RpdmU9e2xvYWRpbmd9PlxuICAgICAgPExvYWRpbmdJY29uIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Loading/index.tsx\n");

/***/ }),

/***/ "./src/components/Loading/styles.ts":
/*!******************************************!*\
  !*** ./src/components/Loading/styles.ts ***!
  \******************************************/
/*! exports provided: Container, LoadingIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingIcon\", function() { return LoadingIcon; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: ${props => props.active ? 'flex' : 'none'};\n  justify-content: center;\n  overflow: hidden;\n  z-index: 999;\n  background: rgba(255, 255, 255, 0.9);\n\n  width: 100%;\n  height: 100vh;\n\n  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: fadein 2s; /* Firefox < 16 */\n  -ms-animation: fadein 2s; /* Internet Explorer */\n  -o-animation: fadein 2s; /* Opera < 12.1 */\n  animation: fadein 2s;\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  /* Firefox < 16 */\n  @-moz-keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  /* Internet Explorer */\n  @-ms-keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  /* Opera < 12.1 */\n  @-o-keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n`;\nconst LoadingIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  ${({\n  theme\n}) => styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n    &:after {\n      animation: spin 0.5s infinite linear;\n      border: 2px solid #ffe600;\n      border-radius: 290486px;\n      border-right-color: transparent;\n      border-top-color: transparent;\n      content: '';\n      display: block;\n      height: 1em;\n      position: relative;\n      width: 1em;\n      position: absolute;\n      top: calc(50% - 1.5em);\n      left: calc(50% - 1.5em);\n      width: 3em;\n      height: 3em;\n      border-width: 0.25em;\n    }\n  `}\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL3N0eWxlcy50cz9iYzlkIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiYWN0aXZlIiwiTG9hZGluZ0ljb24iLCJ0aGVtZSIsImNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFvQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFjQyxLQUFELElBQVlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLE1BQWYsR0FBd0IsTUFBUTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBOUVBO0FBZ0ZBLE1BQU1DLFdBQVcsR0FBR0osd0RBQU0sQ0FBQ0MsR0FBSTtBQUMvQixJQUFJLENBQUM7QUFBRUk7QUFBRixDQUFELEtBQWVDLHFEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUk7QUFDSixDQXJCQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBDb250YWluZXJQcm9wcyB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxDb250YWluZXJQcm9wcz5gXG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmFjdGl2ZSA/ICdmbGV4JyA6ICdub25lJyl9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAyczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBGaXJlZm94IDwgMTYgKi9cbiAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXG4gIGFuaW1hdGlvbjogZmFkZWluIDJzO1xuXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAvKiBGaXJlZm94IDwgMTYgKi9cbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gIEAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC8qIE9wZXJhIDwgMTIuMSAqL1xuICBALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTG9hZGluZ0ljb24gPSBzdHlsZWQuZGl2YFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICAmOmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAwLjVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmU2MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMS41ZW0pO1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSAxLjVlbSk7XG4gICAgICB3aWR0aDogM2VtO1xuICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICBib3JkZXItd2lkdGg6IDAuMjVlbTtcbiAgICB9XG4gIGB9XG5gO1xuXG5leHBvcnQgeyBDb250YWluZXIsIExvYWRpbmdJY29uIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Loading/styles.ts\n");

/***/ }),

/***/ "./src/context/index.tsx":
/*!*******************************!*\
  !*** ./src/context/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading */ \"./src/components/Loading/index.tsx\");\n/* harmony import */ var _loadingContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingContext */ \"./src/context/loadingContext.tsx\");\n\nvar _jsxFileName = \"/Users/luisfelipe/Desktop/Projetos/ML-FRONT/front/src/context/index.tsx\";\n\n\n // import colors from '../styles/colors';\n// import sizes from '../styles/sizes';\n// import { ThemeProvider } from './Themes';\n// import { HeroesProvider } from './heroesContext';\n// const theme = {\n//   colors,\n//   sizes,\n// };\n\nconst AppProvider = ({\n  children\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_loadingContext__WEBPACK_IMPORTED_MODULE_3__[\"LoadingProvider\"], {\n  Component: _components_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  children: children\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 18,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9pbmRleC50c3g/ZDk5NCJdLCJuYW1lcyI6WyJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBcUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDNUIscUVBQUMsK0RBQUQ7QUFBaUIsV0FBUyxFQUFFQywyREFBNUI7QUFBQSxZQUFzQ0Q7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQUllRCwwRUFBZiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZyc7XG5pbXBvcnQgeyBMb2FkaW5nUHJvdmlkZXIgfSBmcm9tICcuL2xvYWRpbmdDb250ZXh0JztcblxuLy8gaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJztcbi8vIGltcG9ydCBzaXplcyBmcm9tICcuLi9zdHlsZXMvc2l6ZXMnO1xuXG4vLyBpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnLi9UaGVtZXMnO1xuLy8gaW1wb3J0IHsgSGVyb2VzUHJvdmlkZXIgfSBmcm9tICcuL2hlcm9lc0NvbnRleHQnO1xuXG4vLyBjb25zdCB0aGVtZSA9IHtcbi8vICAgY29sb3JzLFxuLy8gICBzaXplcyxcbi8vIH07XG5cbmNvbnN0IEFwcFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPExvYWRpbmdQcm92aWRlciBDb21wb25lbnQ9e0xvYWRpbmd9PntjaGlsZHJlbn08L0xvYWRpbmdQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/index.tsx\n");

/***/ }),

/***/ "./src/context/loadingContext.tsx":
/*!****************************************!*\
  !*** ./src/context/loadingContext.tsx ***!
  \****************************************/
/*! exports provided: LoadingContext, LoadingProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingContext\", function() { return LoadingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingProvider\", function() { return LoadingProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/luisfelipe/Desktop/Projetos/ML-FRONT/front/src/context/loadingContext.tsx\";\n\nconst LoadingContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\n\nconst LoadingProvider = ({\n  children,\n  Component\n}) => {\n  const loadingState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const focusState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const ValueState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const productsState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: suggestionsSearch,\n    1: setSuggestionsSearch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: breadcrumb,\n    1: setBreadcrumb\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const [loading] = loadingState;\n  const [focus] = focusState;\n  const [valueSearch] = ValueState;\n  const [products] = productsState;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoadingContext.Provider, {\n    value: {\n      loadingState,\n      focus,\n      focusState,\n      valueSearch,\n      ValueState,\n      suggestionsSearch,\n      setSuggestionsSearch,\n      products,\n      productsState,\n      breadcrumb,\n      setBreadcrumb\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {\n      loading: !!loading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, undefined), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9sb2FkaW5nQ29udGV4dC50c3g/MDI4OCJdLCJuYW1lcyI6WyJMb2FkaW5nQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2FkaW5nUHJvdmlkZXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImxvYWRpbmdTdGF0ZSIsInVzZVN0YXRlIiwiZm9jdXNTdGF0ZSIsIlZhbHVlU3RhdGUiLCJwcm9kdWN0c1N0YXRlIiwic3VnZ2VzdGlvbnNTZWFyY2giLCJzZXRTdWdnZXN0aW9uc1NlYXJjaCIsImJyZWFkY3J1bWIiLCJzZXRCcmVhZGNydW1iIiwibG9hZGluZyIsImZvY3VzIiwidmFsdWVTZWFyY2giLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUE2QkEsTUFBTUEsY0FBYyxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXBDOztBQUVBLE1BQU1DLGVBQStDLEdBQUcsQ0FBQztBQUN2REMsVUFEdUQ7QUFFdkRDO0FBRnVELENBQUQsS0FHbEQ7QUFDSixRQUFNQyxZQUFZLEdBQUdDLHNEQUFRLENBQUMsS0FBRCxDQUE3QjtBQUNBLFFBQU1DLFVBQVUsR0FBR0Qsc0RBQVEsQ0FBQyxLQUFELENBQTNCO0FBQ0EsUUFBTUUsVUFBVSxHQUFHRixzREFBUSxDQUFTLEVBQVQsQ0FBM0I7QUFDQSxRQUFNRyxhQUFhLEdBQUdILHNEQUFRLENBQVcsRUFBWCxDQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDSSxpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q0wsc0RBQVEsQ0FBVyxFQUFYLENBQTFEO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCUCxzREFBUSxDQUFXLEVBQVgsQ0FBNUM7QUFFQSxRQUFNLENBQUNRLE9BQUQsSUFBWVQsWUFBbEI7QUFDQSxRQUFNLENBQUNVLEtBQUQsSUFBVVIsVUFBaEI7QUFDQSxRQUFNLENBQUNTLFdBQUQsSUFBZ0JSLFVBQXRCO0FBQ0EsUUFBTSxDQUFDUyxRQUFELElBQWFSLGFBQW5CO0FBRUEsc0JBQ0UscUVBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUNFLFNBQUssRUFBRTtBQUNMSixrQkFESztBQUVMVSxXQUZLO0FBR0xSLGdCQUhLO0FBSUxTLGlCQUpLO0FBS0xSLGdCQUxLO0FBTUxFLHVCQU5LO0FBT0xDLDBCQVBLO0FBUUxNLGNBUks7QUFTTFIsbUJBVEs7QUFVTEcsZ0JBVks7QUFXTEM7QUFYSyxLQURUO0FBQUEsNEJBZUUscUVBQUMsU0FBRDtBQUFXLGFBQU8sRUFBRSxDQUFDLENBQUNDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsRUFnQkdYLFFBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0JELENBcENEIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHQvbG9hZGluZ0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICBjcmVhdGVDb250ZXh0LFxuICBEaXNwYXRjaCxcbiAgU2V0U3RhdGVBY3Rpb24sXG59IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIExvYWRpbmdDb21wb25lbnRQcm9wcyB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBMb2FkaW5nUHJvdmlkZXJQcm9wcyB7XG4gIENvbXBvbmVudDogUmVhY3QuRkM8TG9hZGluZ0NvbXBvbmVudFByb3BzPjtcbn1cblxuaW50ZXJmYWNlIExvYWRpbmdQcm92aWRlckRhdGEge1xuICBsb2FkaW5nU3RhdGU6IFtib29sZWFuLCBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj5dO1xuICBmb2N1czogYm9vbGVhbjtcbiAgZm9jdXNTdGF0ZTogW2Jvb2xlYW4sIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pl07XG4gIHZhbHVlU2VhcmNoOiBzdHJpbmc7XG4gIFZhbHVlU3RhdGU6IFtzdHJpbmcsIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+XTtcbiAgcHJvZHVjdHM6IEFycmF5PHN0cmluZz47XG4gIHByb2R1Y3RzU3RhdGU6IFtzdHJpbmdbXSwgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nW10+Pl07XG4gIHN1Z2dlc3Rpb25zU2VhcmNoOiBzdHJpbmdbXTtcbiAgc2V0U3VnZ2VzdGlvbnNTZWFyY2g6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZ1tdPj47XG4gIGJyZWFkY3J1bWI6IHN0cmluZ1tdO1xuICBzZXRCcmVhZGNydW1iOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmdbXT4+O1xufVxuXG5jb25zdCBMb2FkaW5nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgTG9hZGluZ1Byb3ZpZGVyRGF0YSk7XG5cbmNvbnN0IExvYWRpbmdQcm92aWRlcjogUmVhY3QuRkM8TG9hZGluZ1Byb3ZpZGVyUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIENvbXBvbmVudCxcbn0pID0+IHtcbiAgY29uc3QgbG9hZGluZ1N0YXRlID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBmb2N1c1N0YXRlID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBWYWx1ZVN0YXRlID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IHByb2R1Y3RzU3RhdGUgPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbc3VnZ2VzdGlvbnNTZWFyY2gsIHNldFN1Z2dlc3Rpb25zU2VhcmNoXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFticmVhZGNydW1iLCBzZXRCcmVhZGNydW1iXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3QgW2xvYWRpbmddID0gbG9hZGluZ1N0YXRlO1xuICBjb25zdCBbZm9jdXNdID0gZm9jdXNTdGF0ZTtcbiAgY29uc3QgW3ZhbHVlU2VhcmNoXSA9IFZhbHVlU3RhdGU7XG4gIGNvbnN0IFtwcm9kdWN0c10gPSBwcm9kdWN0c1N0YXRlO1xuXG4gIHJldHVybiAoXG4gICAgPExvYWRpbmdDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBsb2FkaW5nU3RhdGUsXG4gICAgICAgIGZvY3VzLFxuICAgICAgICBmb2N1c1N0YXRlLFxuICAgICAgICB2YWx1ZVNlYXJjaCxcbiAgICAgICAgVmFsdWVTdGF0ZSxcbiAgICAgICAgc3VnZ2VzdGlvbnNTZWFyY2gsXG4gICAgICAgIHNldFN1Z2dlc3Rpb25zU2VhcmNoLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgcHJvZHVjdHNTdGF0ZSxcbiAgICAgICAgYnJlYWRjcnVtYixcbiAgICAgICAgc2V0QnJlYWRjcnVtYixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbXBvbmVudCBsb2FkaW5nPXshIWxvYWRpbmd9IC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Mb2FkaW5nQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IExvYWRpbmdDb250ZXh0LCBMb2FkaW5nUHJvdmlkZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/loadingContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context */ \"./src/context/index.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/theme */ \"./src/styles/theme.ts\");\n\nvar _jsxFileName = \"/Users/luisfelipe/Desktop/Projetos/ML-FRONT/front/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(context__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"manifest\",\n          href: \"/manifest.json\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"description\",\n          content: \"A maior Comunidade de compra e venda online da Am\\xE9rica Latina.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:image\",\n          content: \"https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"shortcut icon\",\n          href: \"/img/favicon.svg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"apple-touch-icon\",\n          href: \"/img/favicon.svg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styles_global__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQWlEO0FBQy9DLHNCQUNFLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFQyxvREFBdEI7QUFBQSwyQkFDRSxxRUFBQywrQ0FBRDtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBTSxhQUFHLEVBQUMsVUFBVjtBQUFxQixjQUFJLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLGFBRFA7QUFFRSxpQkFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQU1FO0FBQ0Usa0JBQVEsRUFBQyxVQURYO0FBRUUsaUJBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFVRTtBQUFNLGFBQUcsRUFBQyxlQUFWO0FBQTBCLGNBQUksRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLGVBV0U7QUFBTSxhQUFHLEVBQUMsa0JBQVY7QUFBNkIsY0FBSSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFjRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEYsZUFlRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0FBRWNGLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcFByb3ZpZGVyIGZyb20gJ2NvbnRleHQnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICdzdHlsZXMvZ2xvYmFsJztcbmltcG9ydCB0aGVtZSBmcm9tICdzdHlsZXMvdGhlbWUnO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8QXBwUHJvdmlkZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJBIG1haW9yIENvbXVuaWRhZGUgZGUgY29tcHJhIGUgdmVuZGEgb25saW5lIGRhIEFtw6lyaWNhIExhdGluYS5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgICAgY29udGVudD1cImh0dHBzOi8vaHR0cDIubWxzdGF0aWMuY29tL3N0YXRpYy9vcmctaW1nL2hvbWVzbncvbWVyY2Fkby1saWJyZS5wbmc/dj0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltZy9mYXZpY29uLnN2Z1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvaW1nL2Zhdmljb24uc3ZnXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  ${({\n  theme\n}) => styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    html,\n    body,\n    #__next {\n      height: 100%;\n    }\n\n    body {\n      background: ${theme.color.MAIN_BG};\n      font-family: 'Proxima Nova', -apple-system, 'Helvetica Neue', Helvetica,\n        Roboto, Arial, sans-serif;\n    }\n\n    @media (max-width: 1080px) {\n      html {\n        font-size: 93.75%;\n      }\n    }\n\n    @media (max-width: 720px) {\n      html {\n        font-size: 87.5%;\n      }\n    }\n  `}\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz9iYTcxIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJjc3MiLCJjb2xvciIsIk1BSU5fQkciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxtRUFBa0I7QUFDdkMsSUFBSSxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQyxxREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0JELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxPQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUk7QUFDSixDQS9CQTtBQWlDZUwsMkVBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICAqIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICBodG1sLFxuICAgIGJvZHksXG4gICAgI19fbmV4dCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgYm9keSB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9yLk1BSU5fQkd9O1xuICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hIE5vdmEnLCAtYXBwbGUtc3lzdGVtLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsXG4gICAgICAgIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAgICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOTMuNzUlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogODcuNSU7XG4gICAgICB9XG4gICAgfVxuICBgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  color: {\n    PRIMARY: '#FFE600',\n    MAIN_BG: '#EEEEEE',\n    WHITE: '#FFFFFF',\n    WHITE100: '#FAFAFA',\n    GRAY800: '#333333',\n    GRAY500: '#999999',\n    GRAY100: '#CCC',\n    BLUE: '#3483FA'\n  },\n  media: {\n    XS: 0,\n    SM: '36rem',\n    MD: '48rem',\n    LG: '62rem',\n    XL: '75rem',\n    XXL: '87.5rem'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzk0Y2UiXSwibmFtZXMiOlsiY29sb3IiLCJQUklNQVJZIiwiTUFJTl9CRyIsIldISVRFIiwiV0hJVEUxMDAiLCJHUkFZODAwIiwiR1JBWTUwMCIsIkdSQVkxMDAiLCJCTFVFIiwibWVkaWEiLCJYUyIsIlNNIiwiTUQiLCJMRyIsIlhMIiwiWFhMIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2JBLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsU0FESjtBQUVMQyxXQUFPLEVBQUUsU0FGSjtBQUdMQyxTQUFLLEVBQUUsU0FIRjtBQUlMQyxZQUFRLEVBQUUsU0FKTDtBQUtMQyxXQUFPLEVBQUUsU0FMSjtBQU1MQyxXQUFPLEVBQUUsU0FOSjtBQU9MQyxXQUFPLEVBQUUsTUFQSjtBQVFMQyxRQUFJLEVBQUU7QUFSRCxHQURNO0FBV2JDLE9BQUssRUFBRTtBQUNMQyxNQUFFLEVBQUUsQ0FEQztBQUVMQyxNQUFFLEVBQUUsT0FGQztBQUdMQyxNQUFFLEVBQUUsT0FIQztBQUlMQyxNQUFFLEVBQUUsT0FKQztBQUtMQyxNQUFFLEVBQUUsT0FMQztBQU1MQyxPQUFHLEVBQUU7QUFOQTtBQVhNLENBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBjb2xvcjoge1xuICAgIFBSSU1BUlk6ICcjRkZFNjAwJyxcbiAgICBNQUlOX0JHOiAnI0VFRUVFRScsXG4gICAgV0hJVEU6ICcjRkZGRkZGJyxcbiAgICBXSElURTEwMDogJyNGQUZBRkEnLFxuICAgIEdSQVk4MDA6ICcjMzMzMzMzJyxcbiAgICBHUkFZNTAwOiAnIzk5OTk5OScsXG4gICAgR1JBWTEwMDogJyNDQ0MnLFxuICAgIEJMVUU6ICcjMzQ4M0ZBJyxcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBYUzogMCxcbiAgICBTTTogJzM2cmVtJyxcbiAgICBNRDogJzQ4cmVtJyxcbiAgICBMRzogJzYycmVtJyxcbiAgICBYTDogJzc1cmVtJyxcbiAgICBYWEw6ICc4Ny41cmVtJyxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });