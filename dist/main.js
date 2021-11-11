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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    box-sizing: border-box;\\n    color: #e2e2e2;\\n}\\n\\n.grid-container {\\n    display: grid;\\n    grid-template-areas: \\\"head head head head head\\\" \\\"aside main main main main\\\" \\\"aside main main main main\\\" \\\"aside main main main main\\\" \\\"aside main main main main\\\" \\\"aside main main main main\\\" \\\"aside main main main main\\\" \\\"foot foot foot foot foot\\\";\\n    grid-template-columns: repeat(4, 1fr);\\n    height: 100vh;\\n    background-color: #1f1f1f;\\n    grid-template-rows: auto 1fr auto;\\n    /* min-height: 100%; */\\n}\\n\\nheader {\\n    grid-area: head;\\n    /* border: 2px solid #1c1c1c; */\\n    padding: 10px;\\n    background-color: #282828;\\n}\\n\\naside {\\n    grid-area: aside;\\n    /* border: 2px solid black; */\\n    padding: 5px;\\n    background-color: #282828;\\n}\\n\\naside>ul {\\n    margin-bottom: 50px;\\n}\\n\\naside>ul>#default {\\n    background-color: #363636;\\n    cursor: pointer;\\n}\\n\\n#default>img {\\n    position: relative;\\n    top: 3px;\\n}\\n\\n#projects>li {\\n    margin-left: 50px;\\n    list-style: circle;\\n    cursor: pointer;\\n}\\n\\n#projects>li:hover {\\n    background-color: #363636;\\n}\\n\\n#projects>#more {\\n    display: inline-block;\\n    background-repeat: no-repeat;\\n    height: 20px;\\n    width: 20px;\\n    border: none;\\n    margin-right: 2px;\\n    position: relative;\\n    top: 3px;\\n}\\n\\n#projects>#more {\\n    cursor: pointer;\\n}\\n\\n#projects>#new-project {\\n    background-repeat: no-repeat;\\n    height: 20px;\\n    width: 20px;\\n    display: inline-block;\\n    cursor: pointer;\\n    position: relative;\\n    top: 3px;\\n}\\n\\n#project-input>button, #project-input>input {\\n    color: black;\\n}\\n\\n#add-project-btn {\\n    margin-right: 5px;\\n    background-color: rgb(27, 147, 202);\\n    border: none;\\n}\\n\\n#project-delete-btn {\\n    display: inline-block;\\n    background-repeat: no-repeat;\\n    height: 20px;\\n    width: 20px;\\n    position: relative;\\n    top: 3px;\\n}\\n\\n#content {\\n    grid-area: main;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    position: relative;\\n    top: 10px;\\n}\\n\\n#content>li {\\n    border-bottom: 2px solid #363636;\\n    width: 600px;\\n    margin-bottom: 10px;\\n    padding: 10px;\\n}\\n\\n#content>li>#add-todo {\\n    border-radius: 50%;\\n    height: 20px;\\n    width: 20px;\\n    background-repeat: no-repeat;\\n    cursor: pointer;\\n}\\n\\n#content>li>#add:hover {\\n    background-color: rgb(27, 147, 202);\\n}\\n\\n#content>li {\\n    list-style: none;\\n}\\n\\nfooter {\\n    grid-area: foot;\\n    text-align: center;\\n    background-color: #282828;\\n}\\n\\nheader, footer {\\n    border: 2px solid #1c1c1c;\\n}\\n\\n.form-container {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\nform {\\n    position: absolute;\\n    background-color: rgb(77, 77, 77);\\n    top: 30%;\\n    right: 50%;\\n    border: 2px solid black;\\n}\\n\\ninput[type=\\\"text\\\"], input[type=\\\"date\\\"], textarea, select {\\n    color: black;\\n}\\n\\nbutton {\\n    padding: 3px;\\n    margin-right: 10px;\\n    cursor: pointer;\\n}\\n\\n.container {\\n    padding: 10px;\\n    color: black;\\n}\\n\\n.flex-container {\\n    display: flex;\\n}\\n\\n.first {\\n    margin-right: 20px;\\n}\\n\\n#form-ok {\\n    background-color: rgb(27, 147, 202);\\n    width: 60px;\\n    border: none;\\n}\\n\\n#form-cancel {\\n    border: none;\\n    color: black;\\n}\\n\\n#add-todo {\\n    background-color: rgb(27, 147, 202);\\n    width: 60px;\\n    border: none;\\n}\\n\\n#cancel-todo {\\n    border: none;\\n    color: black;\\n}\\n\\n#todo-remove-btn {\\n    float: right;\\n    height: 19px;\\n    width: 22px;\\n    background-repeat: no-repeat;\\n    cursor: pointer;\\n    position: relative;\\n    top: 13px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ProjectDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDOM.js */ \"./src/ProjectDOM.js\");\n/* harmony import */ var _TODO_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TODO_DOM.js */ \"./src/TODO_DOM.js\");\n\n\n\nfunction DOM() {\n\n    function render() {\n        let projectDOM = (0,_ProjectDOM_js__WEBPACK_IMPORTED_MODULE_0__.ProjectDOM)();\n        let todoDOM = (0,_TODO_DOM_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        projectDOM.render();\n        todoDOM.render();\n    }\n\n    return { render }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.TODOs = []\n    }\n\n    getName() {\n        return this.name\n    }\n\n    getTODOs() {\n        return this.TODOs\n    }\n\n    addTODO(todo) {\n        this.TODOs.push(todo)\n    }\n\n    replaceTODO(index, todo) {\n        this.TODOs[index] = todo\n    }\n\n    removeTODO(index) {\n        if (index == 0 && this.TODOs.length == 1) {\n            this.TODOs = []\n        }\n        this.TODOs.splice(index, 1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/ProjectDOM.js":
/*!***************************!*\
  !*** ./src/ProjectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectDOM\": () => (/* binding */ ProjectDOM),\n/* harmony export */   \"selectedProject\": () => (/* binding */ selectedProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _TODO_DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TODO_DOM.js */ \"./src/TODO_DOM.js\");\n/* harmony import */ var _chevron_up_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chevron-up.svg */ \"./src/chevron-up.svg\");\n/* harmony import */ var _chevron_down_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chevron-down.svg */ \"./src/chevron-down.svg\");\n/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plus.svg */ \"./src/plus.svg\");\n/* harmony import */ var _trash_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trash-2.svg */ \"./src/trash-2.svg\");\n/* harmony import */ var _inbox_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox.svg */ \"./src/inbox.svg\");\n/* harmony import */ var _edit_2_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-2.svg */ \"./src/edit-2.svg\");\n\n\n\n\n\n\n\n\n\n\nlet selectedProject = document.querySelector(\"#default\");\n\nfunction ProjectDOM() {\n    const ulProjects = document.querySelector(\"#projects\");\n    const todo_dom = (0,_TODO_DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    function addEventListenersToProject(li) {\n        li.addEventListener('click', () => {\n            selectedProject.style.backgroundColor = \"#282828\";\n            li.style.backgroundColor = \"#363636\";\n            selectedProject = li;\n            todo_dom.renderTODOs(selectedProject);\n        });\n    }\n\n    function renderProjects(projectsList) {\n        for (let i = 1; i < projectsList.length; i++) {\n            if (projectsList[i] != null) {\n                appendProject(projectsList, i);\n            }\n        }\n    }\n\n    function appendProject(projectsList, index) {\n        const li = document.createElement('li');\n        const deleteBtn = document.createElement('div');\n        deleteBtn.setAttribute('remove-btn-index', index);\n        deleteBtn.setAttribute('id', 'project-delete-btn');\n        deleteBtn.style.background = `url(${_trash_2_svg__WEBPACK_IMPORTED_MODULE_6__})`;\n        deleteBtn.style.marginLeft = \"5px\";\n        const editBtn = document.createElement('div');\n        editBtn.style.display = \"inline-block\";\n        editBtn.style.position = \"relative\";\n        editBtn.style.top = \"3px\";\n        editBtn.style.marginLeft = \"5px\";\n        editBtn.style.background = `url(${_edit_2_svg__WEBPACK_IMPORTED_MODULE_8__})`;\n        editBtn.style.backgroundRepeat = 'no-repeat';\n        editBtn.style.height = '19px';\n        editBtn.style.width = '19px';\n\n        editBtn.addEventListener('click', (event) => {\n            const current_li = event.target.parentNode;\n            current_li.innerHTML = \"\";\n\n            const input = document.createElement('input');\n            input['value'] = project.getName();\n\n            const addBtn = document.createElement('button');\n            addBtn.setAttribute(\"id\", \"add-project-btn\");\n            addBtn.textContent = \"Add\"\n\n            addBtn.addEventListener('click', () => {\n                const name = input.value;\n                const new_project = new _Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n\n                (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.replaceProject)(index, new_project);\n\n                current_li.innerHTML = \"\";\n                current_li.textContent = new_project.getName();\n                current_li.append(editBtn);\n                current_li.append(deleteBtn);\n                projectsList = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getProjectsList)();\n                project = projectsList[index];\n            })\n\n            const cancelBtn = document.createElement('button');\n            cancelBtn.setAttribute(\"id\", \"cancel-project-btn\");\n            cancelBtn.textContent = \"Cancel\";\n\n            cancelBtn.addEventListener('click', () => {\n                current_li.textContent = project.getName();\n                current_li.append(editBtn);\n                current_li.append(deleteBtn);\n            });\n\n            current_li.setAttribute('id', 'project-input');\n            current_li.append(input);\n            current_li.append(addBtn);\n            current_li.append(cancelBtn);\n        });\n\n        deleteBtn.addEventListener('click', (event) => {\n            const projectsListDiv = document.querySelector(\"#projects\");\n            const li = event.target.parentNode;\n            projectsListDiv.removeChild(li);\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)(index);\n        });\n\n        let project = projectsList[index];\n\n        li.textContent = project.getName();\n        li.setAttribute('data-index', index);\n        li.append(editBtn);\n        li.append(deleteBtn);\n        ulProjects.append(li);\n        addEventListenersToProject(li);\n    }\n\n    function addEventListeners() {\n        const projectAddBtn = document.querySelector(\"#new-project\");\n        const projectMoreBtn = document.querySelector(\"#more\");\n        const defaultProject = document.querySelector(\"#default\");\n\n        projectAddBtn.addEventListener('click', () => {\n            const li = document.createElement('li');\n            const input = document.createElement('input');\n\n            const addBtn = document.createElement('button');\n            addBtn.setAttribute(\"id\", \"add-project-btn\");\n            addBtn.textContent = \"Add\"\n\n            addBtn.addEventListener('click', () => {\n                const name = input.value;\n                const project = new _Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n                (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(project);\n\n                const inputLi = document.querySelector(\"#project-input\");\n                ulProjects.removeChild(inputLi);\n                appendProject(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList, _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList.length - 1);\n            })\n\n            const cancelBtn = document.createElement('button');\n            cancelBtn.setAttribute(\"id\", \"cancel-project-btn\");\n            cancelBtn.textContent = \"Cancel\";\n\n            cancelBtn.addEventListener('click', () => {\n                const li = document.querySelector(\"#project-input\");\n                ulProjects.removeChild(li);\n            })\n\n            li.setAttribute('id', 'project-input');\n            li.append(input);\n            li.append(addBtn);\n            li.append(cancelBtn);\n            ulProjects.append(li);\n\n        })\n\n        projectMoreBtn.addEventListener('click', () => {\n            const lis = document.querySelectorAll(\"#projects>li\");\n            const icon = document.querySelector(\"#more\");\n            if (lis.length > 0) {\n                icon.style.background = `url(${_chevron_up_svg__WEBPACK_IMPORTED_MODULE_3__})`;\n                clearProjectsList();\n            }\n            else {\n                icon.style.background = `url(${_chevron_down_svg__WEBPACK_IMPORTED_MODULE_4__})`;\n                renderProjects(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList);\n            }\n        })\n\n        defaultProject.addEventListener('click', (event) => {\n            selectedProject.style.backgroundColor = \"#282828\";\n            defaultProject.style.backgroundColor = \"#363636\";\n            selectedProject = event.target; \n            todo_dom.renderTODOs(selectedProject);\n        })\n    }\n\n    function clearProjectsList() {\n        const li = document.querySelectorAll(\"#projects>li\");\n        li.forEach((li) => {\n            ulProjects.removeChild(li);\n        });\n    }\n\n    function render() {\n        const chevronIcon = document.querySelector(\"#more\");\n        chevronIcon.style.background = `url(${_chevron_down_svg__WEBPACK_IMPORTED_MODULE_4__})`;\n        const addProject = document.querySelector(\"#new-project\");\n        addProject.style.background = `url(${_plus_svg__WEBPACK_IMPORTED_MODULE_5__})`;\n        const defaultImg = document.querySelector(\"#default>img\");\n        defaultImg['src'] = _inbox_svg__WEBPACK_IMPORTED_MODULE_7__;\n\n        renderProjects((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getProjectsList)());\n        addEventListeners();\n    }\n\n    return { render }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/ProjectDOM.js?");

/***/ }),

/***/ "./src/TODO.js":
/*!*********************!*\
  !*** ./src/TODO.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TODO{\n    constructor(title, description, dueDate, priority){\n        this.title = title\n        this.description = description\n        this.dueDate = dueDate\n        this.priority = priority\n    }\n\n    getTitle() {\n        return this.title;\n    }\n    getDescription() {\n        return this.description;\n    }\n    getDueDate() {\n        return this.dueDate;\n    }\n    getPriority(){\n        return this.priority;\n    }\n\n    setTitle(title) {\n        this.title = title\n    }\n    setDescription(description) {\n        this.description = description\n    }\n    setDueDate(dueDate) {\n        this.dueDate = dueDate\n    }\n    \n    setPriority(priority){\n        this.priority = priority;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TODO);\n\n//# sourceURL=webpack://todo-list/./src/TODO.js?");

/***/ }),

/***/ "./src/TODO_DOM.js":
/*!*************************!*\
  !*** ./src/TODO_DOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDOM.js */ \"./src/ProjectDOM.js\");\n/* harmony import */ var _TODO_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TODO.js */ \"./src/TODO.js\");\n/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete.svg */ \"./src/delete.svg\");\n/* harmony import */ var _edit_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-2.svg */ \"./src/edit-2.svg\");\n/* harmony import */ var _plus_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plus.svg */ \"./src/plus.svg\");\n\n\n\n\n\n\n\nfunction TODO_DOM() {\n    const content = document.querySelector(\"#content\");\n\n    function renderTODOs(project) {\n        let i = 0;\n        clearScreen();\n        const projectToRender = project.getAttribute('data-index') == null ? _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList[0] : _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList[+project.getAttribute('data-index')];\n        const todos = projectToRender == null ? _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList[+(project.getAttribute('data-index')) - 1].getTODOs() : projectToRender.getTODOs();\n        todos.forEach((todo) => {\n            appendTODO(todo, i);\n            i += 1;\n        })\n    }\n\n    function appendTODO(todo, index) {\n        const lis = document.querySelectorAll(\"#content>li\");\n        const last_li = lis[lis.length - 1];\n\n        const removeBtn = document.createElement('div');\n        removeBtn.style.backgroundImage = `url(${_delete_svg__WEBPACK_IMPORTED_MODULE_3__})`;\n        removeBtn.setAttribute('id', 'todo-remove-btn');\n\n        const editBtn = document.createElement('div');\n        editBtn.style.backgroundImage = `url(${_edit_2_svg__WEBPACK_IMPORTED_MODULE_4__})`;\n        editBtn.style.backgroundRepeat = \"no-repeat\";\n        editBtn.style.height = \"19px\";\n        editBtn.style.width = \"19px\";\n        editBtn.style.cursor = \"pointer\";\n        editBtn.style.position = \"relative\";\n        editBtn.style.top = \"13px\";\n        editBtn.style.marginRight = \"40px\";\n\n        const iconContainer = document.createElement('div');\n        iconContainer.style.display = \"inline-block\";\n        iconContainer.appendChild(removeBtn);\n        iconContainer.append(editBtn);\n\n        removeBtn.addEventListener('click', (event) => {\n            const TODOindex = event.target.parentNode.parentNode.getAttribute('data-index');\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeTODO)(+TODOindex, +_ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index'));\n            renderTODOs(_ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject);\n        })\n\n        editBtn.addEventListener('click', (event) => {\n            renderEditForm(event.target.parentNode.parentNode.getAttribute('data-index'));\n        })\n\n        const li = document.createElement('li');\n        li.setAttribute('data-index', index)\n        li.textContent = todo.getTitle();\n        li.style.display = 'flex';\n        li.style.flexDirection = \"row\";\n        li.style.justifyContent = \"space-between\";\n        li.appendChild(iconContainer);\n\n        last_li.parentNode.insertBefore(li, last_li);\n    }\n\n    function addEventListeners() {\n        const addTODO = document.querySelector(\"#new-todo\");\n        addTODO.addEventListener('click', () => {\n            renderForm();\n        })\n\n    }\n\n    function renderForm() {\n        const addTODOBtn = document.querySelector(\"#add-todo\");\n        addTODOBtn.style.display = \"None\";\n        const formContainer = document.createElement(\"div\");\n        formContainer.setAttribute('class', 'form-container');\n        const container = document.createElement(\"div\");\n        container.setAttribute('class', 'container');\n        const form = document.createElement('form');\n        const flexContainer = document.createElement('div');\n        flexContainer.setAttribute('class', 'flex-container');\n        const first = document.createElement('div');\n        first.setAttribute('class', 'first');\n        const second = document.createElement('div');\n        second.setAttribute('class', 'second');\n\n        first.innerHTML = '<label for= \"title\" > Title : <br><input type=\"text\" id=\"title\"></label><br> <label for=\"description\">Description : <br><textarea id=\"description\"></textarea></label><br></br>'\n        second.innerHTML = '<label for=\"due\">Due Date : <br><input type=\"date\" id=\"due\"></label><br> <label for= \"priority\" > Priority: <br> <select name=\"priority\" id=\"priority\"> <option value=\"high\">High</option> <option value=\"medium\">Medium</option> <option value=\"low\">Low</option> </select> </label>'\n\n        flexContainer.appendChild(first);\n        flexContainer.appendChild(second);\n\n        container.append(flexContainer);\n\n\n        const okBtn = document.createElement('button');\n        okBtn.textContent = \"OK\";\n        okBtn.setAttribute('id', 'add-todo');\n\n        okBtn.addEventListener('click', (event) => {\n            addTODOBtn.style.display = \"\";\n            event.preventDefault();\n            const Title = document.querySelector(\"#title\").value;\n            const Description = document.querySelector(\"#description\").value;\n            const Due = document.querySelector(\"#due\").value;\n            const Priority = document.querySelector(\"#priority\").value;\n            const todo = new _TODO_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Title, Description, Due, Priority);\n            let index = 0;\n            if (_ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index')) {\n                index = _ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index');\n            }\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addTODO)(index, todo);\n            removeForm();\n            let projectIndex = _ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index') == null ? 0 : _ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index');\n            let i = _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList[projectIndex].TODOs.length - 1;\n            appendTODO(todo, i);\n        })\n\n        const cancelBtn = document.createElement('button');\n        cancelBtn.textContent = \"Cancel\";\n        cancelBtn.setAttribute('id', 'cancel-todo');\n\n        cancelBtn.addEventListener('click', (event) => {\n            addTODOBtn.style.display = \"\";\n            event.preventDefault();\n            removeForm();\n        })\n\n        container.appendChild(okBtn);\n        container.appendChild(cancelBtn);\n\n        form.appendChild(container);\n\n        formContainer.appendChild(form);\n\n        content.appendChild(formContainer);\n\n    }\n\n    function renderEditForm(TODOindex) {\n        const projectIndex = _ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index') == null ? 0 : _ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index');\n        const project = _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList[projectIndex];\n        const currentTODO = project.getTODOs()[+TODOindex];\n\n        const title = currentTODO.getTitle();\n        const description = currentTODO.getDescription();\n        const dueDate = currentTODO.getDueDate();\n        const priority = currentTODO.getPriority();\n\n\n        const addTODOBtn = document.querySelector(\"#add-todo\");\n        addTODOBtn.style.display = \"None\";\n        const formContainer = document.createElement(\"div\");\n        formContainer.setAttribute('class', 'form-container');\n        const container = document.createElement(\"div\");\n        container.setAttribute('class', 'container');\n        const form = document.createElement('form');\n        const flexContainer = document.createElement('div');\n        flexContainer.setAttribute('class', 'flex-container');\n        const first = document.createElement('div');\n        first.setAttribute('class', 'first');\n        const second = document.createElement('div');\n        second.setAttribute('class', 'second');\n\n        first.innerHTML = `<label for= \"title\" > Title : <br><input type=\"text\" id=\"title\" value=\"${title}\"></label><br> <label for=\"description\">Description : <br><textarea id=\"description\">${description}</textarea></label><br></br>`\n        second.innerHTML = `<label for=\"due\">Due Date : <br><input type=\"date\" id=\"due\" value=${dueDate}></label><br> <label for= \"priority\" > Priority: <br> <select name=\"priority\" id=\"priority\" selected=${priority}> <option value=\"high\">High</option> <option value=\"medium\">Medium</option> <option value=\"low\">Low</option> </select> </label>`\n\n        const prioritySelect = second.querySelector('label>#priority');\n\n        if (priority == \"low\") {\n            prioritySelect.selectedIndex = 2;\n        }\n        else if (priority == \"medium\") {\n            prioritySelect.selectedIndex = 1;\n        }\n\n        flexContainer.appendChild(first);\n        flexContainer.appendChild(second);\n\n        container.append(flexContainer);\n\n\n        const okBtn = document.createElement('button');\n        okBtn.textContent = \"OK\";\n        okBtn.setAttribute('id', 'add-todo');\n\n        okBtn.addEventListener('click', (event) => {\n            addTODOBtn.style.display = \"\";\n            event.preventDefault();\n            const Title = document.querySelector(\"#title\").value;\n            const Description = document.querySelector(\"#description\").value;\n            const Due = document.querySelector(\"#due\").value;\n            const Priority = document.querySelector(\"#priority\").value;\n            const todo = new _TODO_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Title, Description, Due, Priority);\n            let index = 0;\n            if (_ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index')) {\n                index = _ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.getAttribute('data-index');\n            }\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.replaceTODO)(index, TODOindex, todo);\n            removeForm();\n            renderTODOs(_ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject);\n        })\n\n        const cancelBtn = document.createElement('button');\n        cancelBtn.textContent = \"Cancel\";\n        cancelBtn.setAttribute('id', 'cancel-todo');\n\n        cancelBtn.addEventListener('click', (event) => {\n            addTODOBtn.style.display = \"\";\n            event.preventDefault();\n            removeForm();\n        })\n\n        container.appendChild(okBtn);\n        container.appendChild(cancelBtn);\n\n        form.appendChild(container);\n\n        formContainer.appendChild(form);\n\n        content.appendChild(formContainer);\n\n    }\n\n    function removeForm() {\n        const formContainer = document.querySelector(\".form-container\");\n        content.removeChild(formContainer);\n    }\n\n    function clearScreen() {\n        const lis = document.querySelectorAll(\"#content>li\");\n        let i = 0;\n        while (i < lis.length - 1) {\n            content.removeChild(lis[i]);\n            i++;\n        }\n    }\n\n    function render() {\n        const addTODO = document.querySelector(\"#add-todo\");\n        addTODO.style.background = `url(${_plus_svg__WEBPACK_IMPORTED_MODULE_5__})`;\n        addEventListeners();\n        renderTODOs(_ProjectDOM_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject);\n    }\n\n    return { render, clearScreen, renderTODOs };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TODO_DOM);\n\n//# sourceURL=webpack://todo-list/./src/TODO_DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsList\": () => (/* binding */ projectsList),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"getProjectsList\": () => (/* binding */ getProjectsList),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject),\n/* harmony export */   \"replaceProject\": () => (/* binding */ replaceProject),\n/* harmony export */   \"addTODO\": () => (/* binding */ addTODO),\n/* harmony export */   \"removeTODO\": () => (/* binding */ removeTODO),\n/* harmony export */   \"replaceTODO\": () => (/* binding */ replaceTODO)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _TODO_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TODO.js */ \"./src/TODO.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n\n\n\n\n\nlet projectsList = [];\n\nif (JSON.parse(localStorage.getItem('projectsList')) == null) {\n\n    projectsList.push(new _Project_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Default\"));\n\n    projectsList[0].addTODO(new _TODO_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('TEST1', 'lorem epsum', '10/9/2021'));\n    projectsList[0].addTODO(new _TODO_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('TEST2', 'lorem e1312', '14/9/2021'));\n    projectsList[0].addTODO(new _TODO_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('TEST3', 'lorem 76576', '16/9/2021'));\n\n    localStorage.setItem('projectsList', JSON.stringify(projectsList));\n\n}\n\nelse {\n    projectsList = getProjectsList();\n}\n\nfunction getProjectsList() {\n    // Adds the methods back to projects\n    let temp = []\n    let projectsList = JSON.parse(localStorage.getItem('projectsList'))\n    for (let i = 0; i < projectsList.length; ++i) {\n        if (projectsList[i] != null) {\n            Object.setPrototypeOf(projectsList[i], _Project_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prototype);\n            for (let j = 0; j < projectsList[i].TODOs.length; ++j) {\n                Object.setPrototypeOf(projectsList[i].TODOs[j], _TODO_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype);\n            }\n            temp.push(projectsList[i])\n        }\n    }\n    return temp;\n}\n\nfunction updateLocalStorage() {\n    localStorage.setItem('projectsList', JSON.stringify(projectsList));\n}\n\nfunction addProject(project) {\n    projectsList.push(project);\n    updateLocalStorage();\n}\n\nfunction removeProject(index) {\n    projectsList[index] = null\n    updateLocalStorage();\n}\n\nfunction replaceProject(projectIndex, project) {\n    projectsList[projectIndex] = project;\n    updateLocalStorage();\n}\n\nfunction addTODO(index, TODO) {\n    projectsList[index].addTODO(TODO);\n    updateLocalStorage();\n}\n\nfunction replaceTODO(projectIndex, TODOIndex, TODO) {\n    projectsList[projectIndex].replaceTODO(TODOIndex, TODO);\n    updateLocalStorage();\n}\n\nfunction removeTODO(TODOindex, projectIndex) {\n    if (projectIndex == null) {\n        projectIndex = 0;\n    }\n    projectsList[projectIndex].removeTODO(TODOindex);\n    updateLocalStorage();\n}\n\nlet dom = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\ndom.render();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/chevron-down.svg":
/*!******************************!*\
  !*** ./src/chevron-down.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"719e63dcb0fbfe03cf3c.svg\";\n\n//# sourceURL=webpack://todo-list/./src/chevron-down.svg?");

/***/ }),

/***/ "./src/chevron-up.svg":
/*!****************************!*\
  !*** ./src/chevron-up.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b6c1b3cdde58678e3405.svg\";\n\n//# sourceURL=webpack://todo-list/./src/chevron-up.svg?");

/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6d0f825d1fd4ca2b789.svg\";\n\n//# sourceURL=webpack://todo-list/./src/delete.svg?");

/***/ }),

/***/ "./src/edit-2.svg":
/*!************************!*\
  !*** ./src/edit-2.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c5f38997ff73922246b.svg\";\n\n//# sourceURL=webpack://todo-list/./src/edit-2.svg?");

/***/ }),

/***/ "./src/inbox.svg":
/*!***********************!*\
  !*** ./src/inbox.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30d553c49d96d16ad7d3.svg\";\n\n//# sourceURL=webpack://todo-list/./src/inbox.svg?");

/***/ }),

/***/ "./src/plus.svg":
/*!**********************!*\
  !*** ./src/plus.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"27015524fa46b83fd282.svg\";\n\n//# sourceURL=webpack://todo-list/./src/plus.svg?");

/***/ }),

/***/ "./src/trash-2.svg":
/*!*************************!*\
  !*** ./src/trash-2.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04bea6812f7d0a40e6af.svg\";\n\n//# sourceURL=webpack://todo-list/./src/trash-2.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;