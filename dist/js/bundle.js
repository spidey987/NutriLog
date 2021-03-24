/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Views/ccView.js":
/*!*************************!*\
  !*** ./Views/ccView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCalCou\": () => (/* binding */ renderCalCou)\n/* harmony export */ });\nconst renderCalCou = () => {\r\n    const markup = `\r\n        <div class=\"v70_0\">\r\n            <div class=\"v70_1\">\r\n                <div class=\"v70_2\"></div>\r\n                <div class=\"v70_3\"></div><span class=\"v70_4\">Click the '+' button to add food & ingredients to your\r\n                    meal!</span><span class=\"v70_5\">Create your own meal and track 3x faster</span><span class=\"v70_6\">Add\r\n                    food & ingredients</span>\r\n                <div class=\"v70_7\">\r\n                    <div class=\"v70_8\"></div><span class=\"v70_9\">Enter the meal name</span>\r\n                </div>\r\n                <div class=\"v70_10\"></div>\r\n                <div class=\"v70_11\"></div><span class=\"v70_12\">NutriLog</span>\r\n                <div class=\"v70_13\">\r\n                    <div class=\"v70_14\"></div>\r\n                </div><span class=\"v70_15\">CALORIE COUNT</span><span class=\"v70_16\">SET GOALS</span><span\r\n                    class=\"v70_17\">RECIPE</span>\r\n                <div class=\"v70_18\">\r\n                    <div class=\"v70_19\"></div>\r\n                    <div class=\"v70_20\"></div>\r\n                </div>\r\n                <div class=\"v70_21\">\r\n                    <div class=\"v70_22\">\r\n                        <div class=\"v70_23\"></div>\r\n                    </div><span class=\"v70_24\">SAVE</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n    document.querySelector('.result').insertAdjacentHTML('afterbegin', markup);\r\n}\n\n//# sourceURL=webpack://nutrilog/./Views/ccView.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Views_ccView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Views/ccView */ \"./Views/ccView.js\");\n//import * as ccView from './Views/ccView';\r\n\r\n\r\n/** Global state of the app\r\n * Calorie Counter\r\n * Set Goal\r\n * Recipe\r\n */\r\n\r\n//const state = {};\r\n\r\n// Calorie Counter\r\ndocument.querySelector('.v59_94').addEventListener('click', e => {\r\n    (0,_Views_ccView__WEBPACK_IMPORTED_MODULE_0__.renderCalCou)();\r\n    console.log('clicked');\r\n}); \r\n\r\n// Set GoalsetgoalView.renderSetGoal();\r\n\r\n// RecipesearchView.renderSearch();\n\n//# sourceURL=webpack://nutrilog/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;