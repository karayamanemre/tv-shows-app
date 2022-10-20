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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --bg-color: #dfd3c3;\\n  --primary-color: #372948;\\n  --secondary-color: #f8ede3;\\n  --border-color: #d0b8a8;\\n  --extra-color: #e26868;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Lato', sans-serif;\\n}\\n\\na {\\n  color: var(--primary-color);\\n  text-decoration: none;\\n  font-weight: 700;\\n  transition: 0.5s;\\n}\\n\\na:hover {\\n  color: var(--extra-color);\\n}\\n\\nheader {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\nheader,\\nfooter {\\n  padding: 5px 130px;\\n  background: var(--secondary-color);\\n  color: var(--primary-color);\\n  font-weight: 700;\\n  font-size: 22px;\\n  height: 80px;\\n}\\n\\n.brand {\\n  display: flex;\\n  align-items: center;\\n  gap: 30px;\\n}\\n\\n.nav-links {\\n  display: flex;\\n  align-items: center;\\n  font-size: 22px;\\n  gap: 30px;\\n}\\n\\nmain {\\n  display: flex;\\n  justify-content: center;\\n  background: var(--bg-color);\\n}\\n\\n#show-list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  margin: 25px auto;\\n  width: 100%;\\n  gap: 20px;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  background: var(--secondary-color);\\n  color: var(--primary-color);\\n  width: 280px;\\n  padding: 15px;\\n  gap: 15px;\\n  border-radius: 12px;\\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,\\n    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\\n}\\n\\n.card:hover {\\n  box-shadow: rgba(0, 0, 0, 0.9) 0px 2px 4px,\\n    rgba(0, 0, 0, 0.9) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\\n}\\n\\n.img {\\n  display: flex;\\n  flex-direction: column;\\n  width: 250px;\\n  height: 325px;\\n  border-radius: 10px;\\n  transition: 0.5s;\\n  box-shadow: rgba(0, 0, 0, 0.9) 0px 2px 4px,\\n    rgba(0, 0, 0, 0.9) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\\n  cursor: pointer;\\n  text-align: center;\\n  align-items: center;\\n}\\n\\n.img span {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n  font-size: 16px;\\n  transition: 1.5s;\\n  padding: 10px;\\n  opacity: 0;\\n  color: var(--secondary-color);\\n  border-radius: 10px;\\n  overflow-x: hidden;\\n}\\n\\n.img:hover span {\\n  opacity: 1;\\n  background: rgba(0, 0, 0, 0.8);\\n}\\n\\n.popup_container::-webkit-scrollbar-track,\\n.img span::-webkit-scrollbar-track {\\n  border-radius: 12px;\\n  background-color: rgba(0, 0, 0, 0.8);\\n}\\n\\n.popup_container::-webkit-scrollbar,\\n.img span::-webkit-scrollbar {\\n  width: 7px;\\n}\\n\\n.popup_container::-webkit-scrollbar-thumb,\\n.img span::-webkit-scrollbar-thumb {\\n  border-radius: 12px;\\n  box-shadow: inset 0 0 6px var(--extra-color);\\n  background-color: var(--extra-color);\\n}\\n\\n.title {\\n  font-size: 22px;\\n}\\n\\n.likes {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 20px;\\n  gap: 10px;\\n  color: var(--extra-color);\\n}\\n\\n.like-icon {\\n  cursor: pointer;\\n  transform: scale(0.8);\\n  transition: 0.5s;\\n}\\n\\n.like-icon:hover,\\n.close_icon:hover {\\n  transform: scale(1);\\n}\\n\\n.like-icon:active {\\n  transform: scale(0.8);\\n}\\n\\nbutton {\\n  border: none;\\n  border-radius: 5px;\\n  background: var(--primary-color);\\n  cursor: pointer;\\n}\\n\\n.button-top {\\n  display: block;\\n  box-sizing: border-box;\\n  border: 2px solid var(--primary-color);\\n  border-radius: 5px;\\n  padding: 10px 25px;\\n  background: var(--secondary-color);\\n  color: var(--primary-color);\\n  transform: translateY(-0.2em);\\n  transition: transform 0.3s ease;\\n  font-size: 16px;\\n}\\n\\nbutton:hover .button-top {\\n  transform: translateY(-0.3em);\\n}\\n\\nbutton:active .button-top {\\n  transform: translateY(0);\\n}\\n\\n.popup {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  background: rgba(0, 0, 0, 0.8);\\n  width: 100%;\\n  height: 100%;\\n  z-index: 2;\\n}\\n\\n.popup_container {\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 12px;\\n  background: var(--secondary-color);\\n  color: var(--primary-color);\\n  max-width: 50vw;\\n  max-height: 95vh;\\n  overflow-x: hidden;\\n  margin: 25px auto;\\n  z-index: 3;\\n  border: 4px solid var(--border-color);\\n}\\n\\n.close_icon {\\n  position: fixed;\\n  align-self: flex-end;\\n  cursor: pointer;\\n  margin: 5px -5px;\\n  transform: scale(0.9);\\n  transition: 0.5s;\\n}\\n\\n.popup-header {\\n  display: flex;\\n  padding: 15px;\\n  justify-content: center;\\n  align-items: center;\\n  border-bottom: 4px solid var(--border-color);\\n}\\n\\n.popup-title {\\n  font-size: 30px;\\n}\\n\\n.popup-genres {\\n  text-decoration: underline;\\n}\\n\\n.popup_container h2 {\\n  margin-bottom: 0.6rem;\\n}\\n\\n.popup_container p {\\n  width: 70%;\\n  margin: 0 auto;\\n}\\n\\n.popup_container h4 {\\n  font-style: italic;\\n}\\n\\n.comment_section {\\n  padding: 15px;\\n}\\n\\n.comment_section h2 {\\n  padding-bottom: 0.6rem;\\n}\\n\\n.no_comment {\\n  font-weight: 500;\\n  font-size: small;\\n  padding-bottom: 0.6rem;\\n}\\n\\n.comment_paragraph {\\n  font-size: 14px;\\n  font-weight: 500;\\n  padding-bottom: 0.6rem;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.6rem;\\n  max-width: 70%;\\n  margin: 1rem auto;\\n}\\n\\ninput {\\n  width: 100%;\\n  height: 40px;\\n  background: transparent;\\n  color: var(--primary-color);\\n  border: none;\\n  border-bottom: 2px solid var(--primary-color);\\n  margin-bottom: 20px;\\n}\\n\\ninput:focus {\\n  border-bottom: 2px solid var(--extra-color);\\n  outline: none;\\n}\\n\\ninput::placeholder {\\n  font-style: italic;\\n  color: var(--primary-color);\\n}\\n\\n.submit_button {\\n  align-self: flex-end;\\n}\\n\\nfooter {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.visible {\\n  display: block;\\n}\\n\\n@media screen and (max-width: 800px) {\\n  .nav-links {\\n    font-size: 18px;\\n    gap: 10px;\\n  }\\n\\n  header {\\n    padding: 5px 20px;\\n  }\\n\\n  .brand {\\n    gap: 10px;\\n  }\\n\\n  h2 {\\n    font-size: 18px;\\n  }\\n\\n  .popup_container {\\n    align-self: center;\\n    max-width: 90%;\\n  }\\n\\n  .popup-header {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _modules_showList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showList.js */ \"./src/modules/showList.js\");\n/* harmony import */ var _modules_apiData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/apiData.js */ \"./src/modules/apiData.js\");\n/* harmony import */ var _modules_likeData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likeData.js */ \"./src/modules/likeData.js\");\n/* harmony import */ var _modules_itemCount_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/itemCount.js */ \"./src/modules/itemCount.js\");\n\n\n\n\n\n\n\nconst logo = new Image();\nconst logoDiv = document.getElementById('logo');\n\nlogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;\nlogoDiv.appendChild(logo);\n\n(0,_modules_itemCount_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\nwindow.addEventListener('click', (e) => {\n  if (e.target.classList.contains('like-icon')) {\n    const targetId = e.target.id;\n    (0,_modules_likeData_js__WEBPACK_IMPORTED_MODULE_4__.postLikes)(targetId);\n    const likeDisplay = e.target.nextElementSibling;\n    let likeNum = Number(e.target.nextElementSibling.textContent);\n    likeNum += 1;\n    likeDisplay.textContent = String(likeNum);\n  }\n});\n\n(0,_modules_apiData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_likeData_js__WEBPACK_IMPORTED_MODULE_4__.getLikes)();\n(0,_modules_showList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n/* harmony import */ var _renderComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderComment.js */ \"./src/modules/renderComment.js\");\n\n\n\nconst api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YGalzGQEsNr86NPpSVf9';\n\nconst addComment = (id) => {\n  const userInput = document.querySelector('.username');\n  const userComment = document.querySelector('.comment');\n  const submitButton = document.querySelector('.submit_button');\n\n  submitButton.addEventListener('click', async () => {\n    if (!userInput.value) {\n      userInput.setCustomValidity('Please input your name');\n      userInput.reportValidity();\n      setTimeout(() => {\n        userInput.setCustomValidity('');\n      }, 1500);\n      return;\n    }\n\n    if (!userComment.value) {\n      userComment.setCustomValidity('Please input your insight');\n      userComment.reportValidity();\n      setTimeout(() => {\n        userComment.setCustomValidity('');\n      }, 1500);\n      return;\n    }\n\n    await fetch(`${api}/comments`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: `${+id}`,\n        username: userInput.value,\n        comment: userComment.value,\n      }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    await (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n    (0,_renderComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userInput.value, userComment.value);\n\n    userInput.value = '';\n    userComment.value = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/apiData.js":
/*!********************************!*\
  !*** ./src/modules/apiData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showList.js */ \"./src/modules/showList.js\");\n/* harmony import */ var _commentPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentPopUp.js */ \"./src/modules/commentPopUp.js\");\n\n\n\nconst fetchData = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const shows = await response.json();\n  const latestShows = shows.slice(0, 16);\n  (0,_showList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(latestShows);\n  (0,_commentPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(latestShows);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/apiData.js?");

/***/ }),

/***/ "./src/modules/commentCount.js":
/*!*************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComment = () => {\n  const commentItems = document.querySelectorAll('.comment_paragraph');\n  const commentsNum = commentItems.length;\n  return commentsNum;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/commentCount.js?");

/***/ }),

/***/ "./src/modules/commentPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_close_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/close.png */ \"./src/assets/close.png\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n/* harmony import */ var _fetchComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchComment.js */ \"./src/modules/fetchComment.js\");\n\n\n\n\n\nconst popUpPage = document.querySelector('.popup');\n\nconst popUpHandler = (shows) => {\n  const commentButton = document.querySelectorAll('.comment_button');\n  commentButton.forEach(async (button) => {\n    button.addEventListener('click', async () => {\n      document.body.style.overflow = 'hidden';\n      const actualButton = shows.find((show) => show.id === +button.dataset.id);\n      popUpPage.classList.add('visible');\n      const comments = await (0,_fetchComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(button.dataset.id);\n      popUpPage.innerHTML = `\n      <div class='popup_container'>\n        <div class='popup-header'>\n          <div class=\"img\" style=\"background: url('${actualButton.image.medium}'); background-position: center; background-repeat: no-repeat; background-size: cover;\">\n            <span>${actualButton.summary}</span>  \n          </div>\n          <div>\n            <h2 class='popup-title'>${actualButton.name}</h2>\n            <h4 class='popup-genres'>${actualButton.genres}</h4>\n            <form class=\"form\">\n              <h2 class=\"form_heading\">Add Your Comment<h2/>\n              <input type=\"text\" class=\"username\" placeholder=\"Your Name...\">\n              <input type=\"text\" name=\"comment\" class=\"comment\" placeholder=\"Your Insight...\">\n              <button type='button' class='submit_button'><span class=\"button-top\">Add Comment</span></button>\n            </form>\n          </div>\n        </div>\n        <img class='close_icon' src='${_assets_close_png__WEBPACK_IMPORTED_MODULE_0__}'>\n        <div>\n          <div class='comment_section'>\n          <h2 class='comment_heading'>Comments (${comments.error ? 0 : comments.length})<h2/>\n          ${comments.error ? '<p class=\"no_comment\"> No comment for this movie</p>' : ` \n            ${comments.map((comment, idx) => `\n              <p class='comment_paragraph' key=${idx}>${comment.creation_date} ${comment.username}: \"${comment.comment}\"</p>\n            `).join('')}\n          `}\n          </div> \n        </div>\n      </div>\n      `;\n\n      document.querySelector('.close_icon').addEventListener('click', () => {\n        popUpPage.classList.remove('visible');\n        popUpPage.innerHTML = '';\n        document.body.style.overflow = 'visible';\n      });\n\n      (0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(button.dataset.id);\n      (0,_commentCount_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUpHandler);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/commentPopUp.js?");

/***/ }),

/***/ "./src/modules/fetchComment.js":
/*!*************************************!*\
  !*** ./src/modules/fetchComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YGalzGQEsNr86NPpSVf9';\n\nconst showComments = async (id) => {\n  const response = await fetch(`${api}/comments?item_id=${id}`);\n  const allComments = await response.json();\n  return allComments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/fetchComment.js?");

/***/ }),

/***/ "./src/modules/itemCount.js":
/*!**********************************!*\
  !*** ./src/modules/itemCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showCount = () => {\n  window.addEventListener('load', () => {\n    const showList = document.querySelector('#show-list');\n    const showNum = showList.childElementCount;\n    const showNumDisplay = document.querySelector('#show-count');\n    showNumDisplay.textContent = showNum;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCount);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/itemCount.js?");

/***/ }),

/***/ "./src/modules/likeData.js":
/*!*********************************!*\
  !*** ./src/modules/likeData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\n/* harmony import */ var _showLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showLike.js */ \"./src/modules/showLike.js\");\n\n\nconst apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YGalzGQEsNr86NPpSVf9';\n\nconst getLikes = async () => {\n  await fetch(`${apiUrl}/likes`)\n    .then((response) => response.json())\n    .then((response) => (0,_showLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(response));\n};\n\nconst postLikes = async (id) => {\n  await fetch(`${apiUrl}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: id }),\n  });\n};\n\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/likeData.js?");

/***/ }),

/***/ "./src/modules/renderComment.js":
/*!**************************************!*\
  !*** ./src/modules/renderComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n\n\nconst renderComment = (userInput, userComment) => {\n  const commentSection = document.querySelector('.comment_section');\n  const commentParagraphs = document.querySelectorAll('.comment_paragraph');\n\n  const date = new Date().toISOString().slice(0, 10);\n  if (!commentParagraphs.length) {\n    document.querySelector('.no_comment').innerHTML = `${date} ${userInput}: \"${userComment}\"`;\n  } else {\n    const p = document.createElement('p');\n    p.classList.add('comment_paragraph');\n    p.textContent = `${date} ${userInput}: \"${userComment}\"`;\n    commentSection.appendChild(p);\n  }\n\n  const commentHeading = document.querySelector('.comment_section');\n  commentHeading.firstElementChild.innerHTML = `Comments (${(0,_commentCount_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/renderComment.js?");

/***/ }),

/***/ "./src/modules/showLike.js":
/*!*********************************!*\
  !*** ./src/modules/showLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showLikes = (dataObject) => {\n  dataObject.forEach((data) => {\n    const likeCount = document.querySelectorAll('.like-count');\n    likeCount.forEach((display) => {\n      if (display.id === data.item_id) {\n        display.textContent = data.likes;\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showLikes);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/showLike.js?");

/***/ }),

/***/ "./src/modules/showList.js":
/*!*********************************!*\
  !*** ./src/modules/showList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_like_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/like-icon.png */ \"./src/assets/like-icon.png\");\n\n\nconst createList = (shows) => {\n  const displayContainer = document.getElementById('show-list');\n  shows.forEach((item, index) => {\n    displayContainer.innerHTML += `\n    <div class=\"card\">\n      <div class=\"img\" style=\"background: url('${item.image.medium}'); background-position: center; background-repeat: no-repeat; background-size: cover;\">\n        <span>${item.summary}</span>\n      </div>\n      <h3 class=\"title\">${item.name}</h3>\n      <div class=\"likes\">\n        <img class=\"like-icon\" id='${item.id}' src=\"${_assets_like_icon_png__WEBPACK_IMPORTED_MODULE_0__}\">\n        <p class=\"like-count\" id='${item.id}'>0</p><p>Likes</p>\n      </div>\n      <button class=\"comment_button\" data-id=${index + 1}>\n        <span class=\"button-top\">Comment</span></button>\n    </div>\n    `;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/showList.js?");

/***/ }),

/***/ "./src/assets/close.png":
/*!******************************!*\
  !*** ./src/assets/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b57005ade4bc588a5434.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/assets/close.png?");

/***/ }),

/***/ "./src/assets/like-icon.png":
/*!**********************************!*\
  !*** ./src/assets/like-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"191a9958f174fc1f7e2b.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/assets/like-icon.png?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3bfd0e951dc161ef033.png\";\n\n//# sourceURL=webpack://javascript-capstone-project/./src/assets/logo.png?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;