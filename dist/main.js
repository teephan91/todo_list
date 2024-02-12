/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Russo+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-family: Lato, sans-serif;
    font-size: 16px;

    --backgroundColor: #eeeeee;
    --btnBackgroundColor: #34b233;
}

html {
    height: 100%;
    width: 100%;
}

body {
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--backgroundColor);
}

header {
    font-family: 'Russo One', sans-serif;
    font-size: 25px;
    text-align: center;
    border-bottom: 1px solid black;
}

h2 {
    margin: .75rem;
}

button {
    margin: .75rem;
    width: max-content;
    border: none;
    border-radius: 15px;
    padding: .5rem;
    font-family: Lato, sans-serif;
    color: #ffffff;
    background-color: var(--btnBackgroundColor);
}

.main_container {
    display: flex;
    flex-grow: 1;
}

    .sidebar {
        padding: 1.25rem;
        width: 25%;
        border-right: 1px solid black;
    }

        .add_project {
            display: flex;
            width: 100%;
            gap: .5rem;
        }

            #project_form {
                display: flex;
                gap: .5rem;
            }

            .add_project > button {
                background-color: maroon;
            }

        .sidebar > div {
            display: flex;
            justify-content: space-between;
            margin: .75rem;
        }

            .sidebar > div > button{
                width: min-content;
                background-color: maroon;
            }

    .todo_container {
        padding: 1.25rem;
        width: 100%;
    }

        .todo_container > div > div {
            margin: .75rem;
        }

        .main {
            margin: .75rem;
        }

footer {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 20px 0;
    color: #6b6b6b;
    background-color: #e7e5e4;
}

.github:hover {
    transform: scale(1.2);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,6BAA6B;IAC7B,eAAe;;IAEf,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,wCAAwC;AAC5C;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,cAAc;IACd,6BAA6B;IAC7B,cAAc;IACd,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;IAEI;QACI,gBAAgB;QAChB,UAAU;QACV,6BAA6B;IACjC;;QAEI;YACI,aAAa;YACb,WAAW;YACX,UAAU;QACd;;YAEI;gBACI,aAAa;gBACb,UAAU;YACd;;YAEA;gBACI,wBAAwB;YAC5B;;QAEJ;YACI,aAAa;YACb,8BAA8B;YAC9B,cAAc;QAClB;;YAEI;gBACI,kBAAkB;gBAClB,wBAAwB;YAC5B;;IAER;QACI,gBAAgB;QAChB,WAAW;IACf;;QAEI;YACI,cAAc;QAClB;;QAEA;YACI,cAAc;QAClB;;AAER;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Russo+One&display=swap\");\n\n:root {\n    font-family: Lato, sans-serif;\n    font-size: 16px;\n\n    --backgroundColor: #eeeeee;\n    --btnBackgroundColor: #34b233;\n}\n\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    margin: 0;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--backgroundColor);\n}\n\nheader {\n    font-family: 'Russo One', sans-serif;\n    font-size: 25px;\n    text-align: center;\n    border-bottom: 1px solid black;\n}\n\nh2 {\n    margin: .75rem;\n}\n\nbutton {\n    margin: .75rem;\n    width: max-content;\n    border: none;\n    border-radius: 15px;\n    padding: .5rem;\n    font-family: Lato, sans-serif;\n    color: #ffffff;\n    background-color: var(--btnBackgroundColor);\n}\n\n.main_container {\n    display: flex;\n    flex-grow: 1;\n}\n\n    .sidebar {\n        padding: 1.25rem;\n        width: 25%;\n        border-right: 1px solid black;\n    }\n\n        .add_project {\n            display: flex;\n            width: 100%;\n            gap: .5rem;\n        }\n\n            #project_form {\n                display: flex;\n                gap: .5rem;\n            }\n\n            .add_project > button {\n                background-color: maroon;\n            }\n\n        .sidebar > div {\n            display: flex;\n            justify-content: space-between;\n            margin: .75rem;\n        }\n\n            .sidebar > div > button{\n                width: min-content;\n                background-color: maroon;\n            }\n\n    .todo_container {\n        padding: 1.25rem;\n        width: 100%;\n    }\n\n        .todo_container > div > div {\n            margin: .75rem;\n        }\n\n        .main {\n            margin: .75rem;\n        }\n\nfooter {\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n    padding: 20px 0;\n    color: #6b6b6b;\n    background-color: #e7e5e4;\n}\n\n.github:hover {\n    transform: scale(1.2);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add_project.js":
/*!****************************!*\
  !*** ./src/add_project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_todo */ "./src/create_todo.js");


function addProject() {
    const sideBar = document.querySelector(".sidebar");
    const outerDiv = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submitBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    
    input.setAttributes({
        type: "text",
        id: "project",
        required: "",
    });

    submitBtn.textContent = "Submit";
    submitBtn.setAttribute('type', "submit");
    form.setAttribute('id', 'project_form');

    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click', removeAddProjectForm);
    
    form.append(input, submitBtn);
    outerDiv.append(form, deleteBtn);
    outerDiv.setAttribute('class', 'add_project');
    sideBar.appendChild(outerDiv);

    form.addEventListener("submit", _create_todo__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

function removeAddProjectForm() {
    this.parentNode.remove();
}

/***/ }),

/***/ "./src/add_todo.js":
/*!*************************!*\
  !*** ./src/add_todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _delete_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_todo */ "./src/delete_todo.js");
/* harmony import */ var _finish_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finish_todo */ "./src/finish_todo.js");
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_todo */ "./src/edit_todo.js");
/* harmony import */ var _update_todo_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update_todo_count */ "./src/update_todo_count.js");
/* harmony import */ var _create_todo_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create_todo_form */ "./src/create_todo_form.js");






class Todo {
  constructor(name, details, duedate, priority) {
    this.name = name;
    this.details = details;
    this.duedate = duedate;
    this.priority = priority;
  }
}

function createForm() {
  const projectContainer = document.getElementById(this.parentNode.id);
  
  const form = (0,_create_todo_form__WEBPACK_IMPORTED_MODULE_4__["default"])("main", "", "", "", "", "submit");

  form.addEventListener("submit", addTodo);
  projectContainer.appendChild(form);
}

function addTodo(event) {
  event.preventDefault();

  const mainContainer = document.getElementById(this.parentNode.id);
  let name = mainContainer.querySelector("#name").value;
  let details = mainContainer.querySelector("#details").value;
  let duedate = mainContainer.querySelector("#duedate").value;
  let priority = mainContainer.querySelector("#priority").value;
  let newTodo = new Todo(name, details, duedate, priority);

  const todoElement = document.createElement("div");
  todoElement.setAttribute("id", (0,_update_todo_count__WEBPACK_IMPORTED_MODULE_3__["default"])(this.parentNode.id));
  const todoCheckbox = document.createElement("input");
  todoCheckbox.setAttribute("type", "checkbox");
  const todoName = document.createElement("div");
  todoName.textContent = newTodo.name;
  todoName.setAttribute('class', 'name');
  const todoDetails = document.createElement("div");
  todoDetails.textContent = newTodo.details;
  todoDetails.setAttribute('class', 'details');
  const todoDueDate = document.createElement("div");
  todoDueDate.textContent = newTodo.duedate;
  todoDueDate.setAttribute('class', 'duedate');
  const todoPriority = document.createElement("div");
  todoPriority.textContent = newTodo.priority;
  todoPriority.setAttribute('class', 'priority');
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.textContent = "X";
  deleteTodoBtn.style.backgroundColor = 'maroon';
  const editTodoBtn = document.createElement("button");
  editTodoBtn.textContent = "Edit";
   
  todoCheckbox.addEventListener('change', _finish_todo__WEBPACK_IMPORTED_MODULE_1__["default"]);
  deleteTodoBtn.addEventListener('click', _delete_todo__WEBPACK_IMPORTED_MODULE_0__["default"]);
  editTodoBtn.addEventListener('click', _edit_todo__WEBPACK_IMPORTED_MODULE_2__["default"]);
    
  todoElement.append(todoCheckbox, todoName, todoDetails, todoDueDate, todoPriority, deleteTodoBtn, editTodoBtn);
  mainContainer.appendChild(todoElement);

  this.reset();
  this.remove();
}

/***/ }),

/***/ "./src/create_project.js":
/*!*******************************!*\
  !*** ./src/create_project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_project */ "./src/add_project.js");


function createProject() {
    const sideBar = document.querySelector(".sidebar");
    const btn = document.createElement('button');

    btn.textContent = 'Add Project';
    btn.addEventListener('click', _add_project__WEBPACK_IMPORTED_MODULE_0__["default"]);

    sideBar.appendChild(btn);
}

/***/ }),

/***/ "./src/create_todo.js":
/*!****************************!*\
  !*** ./src/create_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo),
/* harmony export */   projectCountStorage: () => (/* binding */ projectCountStorage),
/* harmony export */   projectTodoCounter: () => (/* binding */ projectTodoCounter)
/* harmony export */ });
/* harmony import */ var _delete_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_project.js */ "./src/delete_project.js");
/* harmony import */ var _display_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display_project.js */ "./src/display_project.js");
/* harmony import */ var _add_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_todo.js */ "./src/add_todo.js");




let projectCountStorage = [];
let projectCount = 0;

class projectTodoCounter {
    constructor(project, count) {
        this.project = project;
        this.count = count;
    }
}

function createTodo(event) {
    event.preventDefault();

    // This is for the sidebar
    const sideBar = document.querySelector('.sidebar');
    const projectContainerSidebar = document.createElement('div');
    const projectName = document.createElement("p");
    projectName.addEventListener('click', _display_project_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    const deleteProjectBtn = document.createElement("button");
   

    sideBar.appendChild(projectContainerSidebar);
    projectName.textContent = project.value;
    deleteProjectBtn.textContent = 'X';
    deleteProjectBtn.addEventListener("click", _delete_project_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    projectContainerSidebar.append(projectName, deleteProjectBtn);
    projectContainerSidebar.setAttribute("class", `project_${projectCount}`);


    // This is for the todo container
    const todoContainer = document.querySelector(".todo_container");
    const projectContainerTodoContainer = document.createElement("div");
    const projectTitle = document.createElement("h2");
    const addTodoBtn = document.createElement("button");

    projectContainerTodoContainer.setAttribute("id", `project_${projectCount}`);
    projectTitle.textContent = project.value;
    addTodoBtn.textContent = "Add Todo";
    projectContainerTodoContainer.append(projectTitle, addTodoBtn);
    projectContainerTodoContainer.style.display = 'none';
    todoContainer.appendChild(projectContainerTodoContainer);
    addTodoBtn.addEventListener('click', _add_todo_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

    // This is to keep track of project count
    projectCount++;

    let newProjectTodoCounter = new projectTodoCounter(
       projectContainerSidebar.className,
       0
    );
    projectCountStorage.push(newProjectTodoCounter);

    this.reset();
    sideBar.removeChild(this.parentNode);
}

/***/ }),

/***/ "./src/create_todo_form.js":
/*!*********************************!*\
  !*** ./src/create_todo_form.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoForm)
/* harmony export */ });
/* harmony import */ var _todo_form_similar_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_form_similar_props */ "./src/todo_form_similar_props.js");
/* harmony import */ var _todo_form_priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_form_priority */ "./src/todo_form_priority.js");
/* harmony import */ var _todo_form_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_form_btn */ "./src/todo_form_btn.js");




Element.prototype.setAttributes = function (obj) { 
    for(var prop in obj) {
        this.setAttribute(prop, obj[prop]); 
    }
};

function createTodoForm(form_class, name_value, details_value, duedate_value, priority_value, btn_value) {
    const form = document.createElement('form');

    form.setAttribute('class', form_class);

    form.appendChild(
      (0,_todo_form_similar_props__WEBPACK_IMPORTED_MODULE_0__["default"])(name_value, details_value, duedate_value)
    );
    form.appendChild((0,_todo_form_priority__WEBPACK_IMPORTED_MODULE_1__["default"])(priority_value));
    form.appendChild((0,_todo_form_btn__WEBPACK_IMPORTED_MODULE_2__["default"])(btn_value));
    
    return form;
}

/***/ }),

/***/ "./src/delete_project.js":
/*!*******************************!*\
  !*** ./src/delete_project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_todo */ "./src/create_todo.js");


function deleteProject() {
    const projectDeletedSidebar = document.getElementsByClassName(this.parentNode.className)[0];
    const projectDeletedTodoContainer = document.getElementById(projectDeletedSidebar.className);
    
    projectDeletedSidebar.remove();
    projectDeletedTodoContainer.remove();

    _create_todo__WEBPACK_IMPORTED_MODULE_0__.projectCountStorage.splice(_create_todo__WEBPACK_IMPORTED_MODULE_0__.projectCountStorage.findIndex(el => el.project === projectDeletedTodoContainer.id), 1);
} 

/***/ }),

/***/ "./src/delete_todo.js":
/*!****************************!*\
  !*** ./src/delete_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_todo */ "./src/create_todo.js");


function deleteTodo() {
    const projectThatHasTodoDeleted = document.getElementById(this.parentNode.parentNode.id);

    _create_todo__WEBPACK_IMPORTED_MODULE_0__.projectCountStorage.filter(el => el.project === projectThatHasTodoDeleted.id)[0].count--;

    this.parentNode.remove();
}

/***/ }),

/***/ "./src/display_project.js":
/*!********************************!*\
  !*** ./src/display_project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProject)
/* harmony export */ });
function displayProject() {
    const todoContainer = document.querySelector('.todo_container');
    const projectDisplaying = document.getElementById(this.parentNode.className);

    for (const project of todoContainer.children) {
        project.style.display = 'none';
    }
    projectDisplaying.style.display = 'block';
}

/***/ }),

/***/ "./src/edit_todo.js":
/*!**************************!*\
  !*** ./src/edit_todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTodo)
/* harmony export */ });
/* harmony import */ var _update_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update_todo */ "./src/update_todo.js");
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_todo */ "./src/add_todo.js");
/* harmony import */ var _create_todo_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_todo_form */ "./src/create_todo_form.js");




function editTodo() {
    const form = (0,_create_todo_form__WEBPACK_IMPORTED_MODULE_2__["default"])("main", "", "", "", "", "submit");
    const todoId = document.getElementById(this.parentNode.id);
    todoId.appendChild(form);
    const mainContainer = document.getElementById(this.parentNode.parentNode.id);

    let name = mainContainer.querySelector("#name");
    let details = mainContainer.querySelector("#details");
    let duedate = mainContainer.querySelector("#duedate");
    let priority = mainContainer.querySelector("#priority");

    name.value = todoId.getElementsByClassName('name')[0].textContent;
    details.value = todoId.getElementsByClassName('details')[0].textContent;
    duedate.value = todoId.getElementsByClassName('duedate')[0].textContent;
    priority.value = todoId.getElementsByClassName('priority')[0].textContent;
    
    form.classList.add(this.parentNode.id);
    form.removeEventListener('submit', _add_todo__WEBPACK_IMPORTED_MODULE_1__["default"]);
    form.addEventListener('submit', _update_todo__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/***/ }),

/***/ "./src/finish_todo.js":
/*!****************************!*\
  !*** ./src/finish_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finishTodo)
/* harmony export */ });
function finishTodo() {
    if (this.checked === true) {
        this.parentNode.style.setProperty("text-decoration", "line-through");
    } else {
        this.parentNode.style.setProperty("text-decoration", "none");
    }
}

/***/ }),

/***/ "./src/todo_form_btn.js":
/*!******************************!*\
  !*** ./src/todo_form_btn.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoFormBtn)
/* harmony export */ });
function createTodoFormBtn(btn_value) {
    const div = document.createElement('div');
    const submitBtn = document.createElement('button');
    const closeBtn = document.createElement('button');
    
    submitBtn.textContent = btn_value;
    submitBtn.setAttribute('type', btn_value);

    closeBtn.textContent = 'X';
    closeBtn.setAttribute('type', 'button');
    closeBtn.style.backgroundColor = 'maroon';
    closeBtn.addEventListener('click', removeAddTodoForm);

    div.append(submitBtn, closeBtn);

    return div;
}

function removeAddTodoForm() {
    this.parentNode.parentNode.remove();
}

/***/ }),

/***/ "./src/todo_form_priority.js":
/*!***********************************!*\
  !*** ./src/todo_form_priority.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPriorityProperty)
/* harmony export */ });
function createPriorityProperty(priority_value) {
    const div = document.createElement("div");
    const title = document.createElement("label");
    const select = document.createElement("select");
    const options = ['Low', 'Medium', 'High'];

    title.textContent = 'priority';
    title.setAttribute('for', 'priority');
    select.setAttribute('id', 'priority',);

    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');

        option.textContent = options[i];
        option.setAttribute('value', options[i]);
        if (option.value === priority_value) {
            option.setAttribute("selected", "");
        }

        select.appendChild(option);
    }

    div.append(title, select);

    return div;
}

/***/ }),

/***/ "./src/todo_form_similar_props.js":
/*!****************************************!*\
  !*** ./src/todo_form_similar_props.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSimilarProperties)
/* harmony export */ });
function createSimilarProperties(name_value, details_value, duedate_value) {
    const outerDiv = document.createElement('div');
    const todoSimilarProperties = [
      {
        for: "name",
        type: "text",
        id: "name",
        required: "",
        value: name_value,
      },
      {
        for: "details",
        type: "text",
        id: "details",
        required: "",
        value: details_value,
      },
      {
        for: "duedate",
        type: "date",
        id: "duedate",
        required: "",
        value: duedate_value,
      },
    ];

    for (let i = 0; i < todoSimilarProperties.length; i++) {
      const innerDiv = document.createElement("div");
      const title = document.createElement("label");
      const input = document.createElement("input");

      title.textContent = todoSimilarProperties[i]["for"];
      title.setAttribute("for", todoSimilarProperties[i]["for"]);

      input.setAttributes({
        type: todoSimilarProperties[i]["type"],
        id: todoSimilarProperties[i]["id"],
        required: todoSimilarProperties[i]["required"],
        value: todoSimilarProperties[i]["value"],
      });

      innerDiv.append(title, input);
      outerDiv.appendChild(innerDiv);
    }

    return outerDiv;
}

/***/ }),

/***/ "./src/update_todo.js":
/*!****************************!*\
  !*** ./src/update_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTodo)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_todo */ "./src/add_todo.js");


function updateTodo(event) {
    event.preventDefault();

    const mainContainer = document.getElementById(this.parentNode.id);
    const form = mainContainer.querySelector('.main');
    const todoId = form.classList[1];
    let todo = document.getElementById(todoId);
    let name = mainContainer.querySelector("#name").value;
    let details = mainContainer.querySelector("#details").value;
    let duedate = mainContainer.querySelector("#duedate").value;
    let priority = mainContainer.querySelector("#priority").value;

    todo.getElementsByClassName("name")[0].textContent = name;
    todo.getElementsByClassName("details")[0].textContent =
      details;
    todo.getElementsByClassName("duedate")[0].textContent =
      duedate;
    todo.getElementsByClassName("priority")[0].textContent =
      priority;

    form.removeEventListener('submit', updateTodo);
    form.addEventListener('submit', _add_todo__WEBPACK_IMPORTED_MODULE_0__["default"]);
    form.classList.remove(todoId);

  form.reset();
  form.remove();
}

/***/ }),

/***/ "./src/update_todo_count.js":
/*!**********************************!*\
  !*** ./src/update_todo_count.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTodoCount)
/* harmony export */ });
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_todo */ "./src/create_todo.js");


function updateTodoCount(project) {
    return project + '_' +(_create_todo__WEBPACK_IMPORTED_MODULE_0__.projectCountStorage.find((el) => el.project === project)['count'])++;
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_project */ "./src/create_project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_create_project__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZHQUE2RyxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDM0ksdUhBQXVIO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLCtGQUErRixJQUFJLElBQUksSUFBSSxvQkFBb0IsbUZBQW1GLFdBQVcsb0NBQW9DLHNCQUFzQixtQ0FBbUMsb0NBQW9DLEdBQUcsVUFBVSxtQkFBbUIsa0JBQWtCLEdBQUcsVUFBVSxnQkFBZ0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsK0NBQStDLEdBQUcsWUFBWSwyQ0FBMkMsc0JBQXNCLHlCQUF5QixxQ0FBcUMsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFlBQVkscUJBQXFCLHlCQUF5QixtQkFBbUIsMEJBQTBCLHFCQUFxQixvQ0FBb0MscUJBQXFCLGtEQUFrRCxHQUFHLHFCQUFxQixvQkFBb0IsbUJBQW1CLEdBQUcsa0JBQWtCLDJCQUEyQixxQkFBcUIsd0NBQXdDLE9BQU8sMEJBQTBCLDRCQUE0QiwwQkFBMEIseUJBQXlCLFdBQVcsK0JBQStCLGdDQUFnQyw2QkFBNkIsZUFBZSx1Q0FBdUMsMkNBQTJDLGVBQWUsNEJBQTRCLDRCQUE0Qiw2Q0FBNkMsNkJBQTZCLFdBQVcsd0NBQXdDLHFDQUFxQywyQ0FBMkMsZUFBZSx5QkFBeUIsMkJBQTJCLHNCQUFzQixPQUFPLHlDQUF5Qyw2QkFBNkIsV0FBVyxtQkFBbUIsNkJBQTZCLFdBQVcsWUFBWSxvQkFBb0IsZ0JBQWdCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHNCQUFzQixxQkFBcUIsZ0NBQWdDLEdBQUcsbUJBQW1CLDRCQUE0QixHQUFHLG1CQUFtQjtBQUNqaUc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNuSDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNidUM7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxvREFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3VDO0FBQ0E7QUFDSjtBQUNlO0FBQ0Y7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsZUFBZSw2REFBYzs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDhEQUFlO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsb0RBQVU7QUFDcEQsMENBQTBDLG9EQUFVO0FBQ3BELHdDQUF3QyxrREFBUTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRXVDOztBQUV4QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0Msb0RBQVU7O0FBRTVDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZ0Q7QUFDRTtBQUNYOztBQUVoQztBQUNQOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJEQUFjO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBEQUFhO0FBQzVEO0FBQ0EsNkRBQTZELGFBQWE7OztBQUcxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRSxhQUFhO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0RBQVU7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURnRTtBQUNOO0FBQ1Y7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBLE1BQU0sb0VBQXVCO0FBQzdCO0FBQ0EscUJBQXFCLCtEQUFzQjtBQUMzQyxxQkFBcUIsMERBQWlCO0FBQ3RDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJvRDs7QUFFckM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNkRBQW1CLFFBQVEsNkRBQW1CO0FBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7QUNWb0Q7O0FBRXJDO0FBQ2Y7O0FBRUEsSUFBSSw2REFBbUI7O0FBRXZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnVDO0FBQ047QUFDZTs7QUFFakM7QUFDZixpQkFBaUIsNkRBQWM7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpREFBTztBQUM5QyxvQ0FBb0Msb0RBQVU7QUFDOUM7Ozs7Ozs7Ozs7Ozs7O0FDdkJlO0FBQ2Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixvQkFBb0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLG9CQUFvQixrQ0FBa0M7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlDaUM7O0FBRWxCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxpREFBTztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCb0Q7O0FBRXJDO0FBQ2YsMkJBQTJCLDZEQUFtQjtBQUM5Qzs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTZDO0FBQ3hCOztBQUVyQiwyREFBYSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9hZGRfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYWRkX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2NyZWF0ZV9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jcmVhdGVfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlX3RvZG9fZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZGVsZXRlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RlbGV0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kaXNwbGF5X3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2VkaXRfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZmluaXNoX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9fZm9ybV9idG4uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9fZm9ybV9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX3NpbWlsYXJfcHJvcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3VwZGF0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy91cGRhdGVfdG9kb19jb3VudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdXNzbytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgLS1iYWNrZ3JvdW5kQ29sb3I6ICNlZWVlZWU7XG4gICAgLS1idG5CYWNrZ3JvdW5kQ29sb3I6ICMzNGIyMzM7XG59XG5cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcbn1cblxuaGVhZGVyIHtcbiAgICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmgyIHtcbiAgICBtYXJnaW46IC43NXJlbTtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW46IC43NXJlbTtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuQmFja2dyb3VuZENvbG9yKTtcbn1cblxuLm1haW5fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuICAgIC5zaWRlYmFyIHtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuXG4gICAgICAgIC5hZGRfcHJvamVjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBnYXA6IC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgICAgICNwcm9qZWN0X2Zvcm0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZ2FwOiAuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFkZF9wcm9qZWN0ID4gYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLnNpZGViYXIgPiBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbjogLjc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaWRlYmFyID4gZGl2ID4gYnV0dG9ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XG4gICAgICAgICAgICB9XG5cbiAgICAudG9kb19jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAgICAgLnRvZG9fY29udGFpbmVyID4gZGl2ID4gZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbjogLjc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAuNzVyZW07XG4gICAgICAgIH1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgY29sb3I6ICM2YjZiNmI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTVlNDtcbn1cblxuLmdpdGh1Yjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlOztJQUVmLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLDZCQUE2QjtJQUNqQzs7UUFFSTtZQUNJLGFBQWE7WUFDYixXQUFXO1lBQ1gsVUFBVTtRQUNkOztZQUVJO2dCQUNJLGFBQWE7Z0JBQ2IsVUFBVTtZQUNkOztZQUVBO2dCQUNJLHdCQUF3QjtZQUM1Qjs7UUFFSjtZQUNJLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUIsY0FBYztRQUNsQjs7WUFFSTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLHdCQUF3QjtZQUM1Qjs7SUFFUjtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7O1FBRUk7WUFDSSxjQUFjO1FBQ2xCOztRQUVBO1lBQ0ksY0FBYztRQUNsQjs7QUFFUjtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDEwMDszMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnVzc28rT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kQ29sb3I6ICNlZWVlZWU7XFxuICAgIC0tYnRuQmFja2dyb3VuZENvbG9yOiAjMzRiMjMzO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luOiAuNzVyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogLjc1cmVtO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuQmFja2dyb3VuZENvbG9yKTtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbTtcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgfVxcblxcbiAgICAgICAgLmFkZF9wcm9qZWN0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGdhcDogLjVyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI3Byb2plY3RfZm9ybSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGdhcDogLjVyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5hZGRfcHJvamVjdCA+IGJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAuc2lkZWJhciA+IGRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbWFyZ2luOiAuNzVyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNpZGViYXIgPiBkaXYgPiBidXR0b257XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgLnRvZG9fY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAgICAgLnRvZG9fY29udGFpbmVyID4gZGl2ID4gZGl2IHtcXG4gICAgICAgICAgICBtYXJnaW46IC43NXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYWluIHtcXG4gICAgICAgICAgICBtYXJnaW46IC43NXJlbTtcXG4gICAgICAgIH1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U1ZTQ7XFxufVxcblxcbi5naXRodWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGlkOiBcInByb2plY3RcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgfSk7XG5cbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcInN1Ym1pdFwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdF9mb3JtJyk7XG5cbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVBZGRQcm9qZWN0Rm9ybSk7XG4gICAgXG4gICAgZm9ybS5hcHBlbmQoaW5wdXQsIHN1Ym1pdEJ0bik7XG4gICAgb3V0ZXJEaXYuYXBwZW5kKGZvcm0sIGRlbGV0ZUJ0bik7XG4gICAgb3V0ZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRfcHJvamVjdCcpO1xuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNyZWF0ZVRvZG8pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlKCk7XG59IiwiaW1wb3J0IGRlbGV0ZVRvZG8gZnJvbSAnLi9kZWxldGVfdG9kbyc7XG5pbXBvcnQgZmluaXNoVG9kbyBmcm9tICcuL2ZpbmlzaF90b2RvJztcbmltcG9ydCBlZGl0VG9kbyBmcm9tICcuL2VkaXRfdG9kbyc7XG5pbXBvcnQgdXBkYXRlVG9kb0NvdW50IGZyb20gJy4vdXBkYXRlX3RvZG9fY291bnQnO1xuaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gJy4vY3JlYXRlX3RvZG9fZm9ybSc7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXRhaWxzLCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgXG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVUb2RvRm9ybShcIm1haW5cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJzdWJtaXRcIik7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFkZFRvZG8pO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gIGxldCBuYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWU7XG4gIGxldCBkZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbHNcIikudmFsdWU7XG4gIGxldCBkdWVkYXRlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyhuYW1lLCBkZXRhaWxzLCBkdWVkYXRlLCBwcmlvcml0eSk7XG5cbiAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB1cGRhdGVUb2RvQ291bnQodGhpcy5wYXJlbnROb2RlLmlkKSk7XG4gIGNvbnN0IHRvZG9DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdG9kb0NoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IG5ld1RvZG8ubmFtZTtcbiAgdG9kb05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYW1lJyk7XG4gIGNvbnN0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0RldGFpbHMudGV4dENvbnRlbnQgPSBuZXdUb2RvLmRldGFpbHM7XG4gIHRvZG9EZXRhaWxzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlscycpO1xuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gbmV3VG9kby5kdWVkYXRlO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZWRhdGUnKTtcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gbmV3VG9kby5wcmlvcml0eTtcbiAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHknKTtcbiAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgZGVsZXRlVG9kb0J0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbWFyb29uJztcbiAgY29uc3QgZWRpdFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0VG9kb0J0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgXG4gIHRvZG9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaW5pc2hUb2RvKTtcbiAgZGVsZXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8pO1xuICBlZGl0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvKTtcbiAgICBcbiAgdG9kb0VsZW1lbnQuYXBwZW5kKHRvZG9DaGVja2JveCwgdG9kb05hbWUsIHRvZG9EZXRhaWxzLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCBkZWxldGVUb2RvQnRuLCBlZGl0VG9kb0J0bik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuXG4gIHRoaXMucmVzZXQoKTtcbiAgdGhpcy5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRfcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBidG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChidG4pO1xufSIsImltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gJy4vZGVsZXRlX3Byb2plY3QuanMnO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0IGZyb20gJy4vZGlzcGxheV9wcm9qZWN0LmpzJztcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vYWRkX3RvZG8uanMnO1xuXG5leHBvcnQgbGV0IHByb2plY3RDb3VudFN0b3JhZ2UgPSBbXTtcbmxldCBwcm9qZWN0Q291bnQgPSAwO1xuXG5leHBvcnQgY2xhc3MgcHJvamVjdFRvZG9Db3VudGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCBjb3VudCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSBzaWRlYmFyXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lclNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVByb2plY3QpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgXG5cbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXJTaWRlYmFyKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QudmFsdWU7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyU2lkZWJhci5hcHBlbmQocHJvamVjdE5hbWUsIGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIHByb2plY3RDb250YWluZXJTaWRlYmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGBwcm9qZWN0XyR7cHJvamVjdENvdW50fWApO1xuXG5cbiAgICAvLyBUaGlzIGlzIGZvciB0aGUgdG9kbyBjb250YWluZXJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvX2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lclRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2plY3RfJHtwcm9qZWN0Q291bnR9YCk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC52YWx1ZTtcbiAgICBhZGRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9kb1wiO1xuICAgIHByb2plY3RDb250YWluZXJUb2RvQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvZG9CdG4pO1xuICAgIHByb2plY3RDb250YWluZXJUb2RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyVG9kb0NvbnRhaW5lcik7XG4gICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xuXG4gICAgLy8gVGhpcyBpcyB0byBrZWVwIHRyYWNrIG9mIHByb2plY3QgY291bnRcbiAgICBwcm9qZWN0Q291bnQrKztcblxuICAgIGxldCBuZXdQcm9qZWN0VG9kb0NvdW50ZXIgPSBuZXcgcHJvamVjdFRvZG9Db3VudGVyKFxuICAgICAgIHByb2plY3RDb250YWluZXJTaWRlYmFyLmNsYXNzTmFtZSxcbiAgICAgICAwXG4gICAgKTtcbiAgICBwcm9qZWN0Q291bnRTdG9yYWdlLnB1c2gobmV3UHJvamVjdFRvZG9Db3VudGVyKTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgICBzaWRlQmFyLnJlbW92ZUNoaWxkKHRoaXMucGFyZW50Tm9kZSk7XG59IiwiaW1wb3J0IGNyZWF0ZVNpbWlsYXJQcm9wZXJ0aWVzIGZyb20gXCIuL3RvZG9fZm9ybV9zaW1pbGFyX3Byb3BzXCI7XG5pbXBvcnQgY3JlYXRlUHJpb3JpdHlQcm9wZXJ0eSBmcm9tIFwiLi90b2RvX2Zvcm1fcHJpb3JpdHlcIjtcbmltcG9ydCBjcmVhdGVUb2RvRm9ybUJ0biBmcm9tIFwiLi90b2RvX2Zvcm1fYnRuXCI7XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAob2JqKSB7IFxuICAgIGZvcih2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvcCwgb2JqW3Byb3BdKTsgXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm0oZm9ybV9jbGFzcywgbmFtZV92YWx1ZSwgZGV0YWlsc192YWx1ZSwgZHVlZGF0ZV92YWx1ZSwgcHJpb3JpdHlfdmFsdWUsIGJ0bl92YWx1ZSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmb3JtX2NsYXNzKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVTaW1pbGFyUHJvcGVydGllcyhuYW1lX3ZhbHVlLCBkZXRhaWxzX3ZhbHVlLCBkdWVkYXRlX3ZhbHVlKVxuICAgICk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQcmlvcml0eVByb3BlcnR5KHByaW9yaXR5X3ZhbHVlKSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvRm9ybUJ0bihidG5fdmFsdWUpKTtcbiAgICBcbiAgICByZXR1cm4gZm9ybTtcbn0iLCJpbXBvcnQgeyBwcm9qZWN0Q291bnRTdG9yYWdlIH0gZnJvbSBcIi4vY3JlYXRlX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlZFNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUpWzBdO1xuICAgIGNvbnN0IHByb2plY3REZWxldGVkVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3REZWxldGVkU2lkZWJhci5jbGFzc05hbWUpO1xuICAgIFxuICAgIHByb2plY3REZWxldGVkU2lkZWJhci5yZW1vdmUoKTtcbiAgICBwcm9qZWN0RGVsZXRlZFRvZG9Db250YWluZXIucmVtb3ZlKCk7XG5cbiAgICBwcm9qZWN0Q291bnRTdG9yYWdlLnNwbGljZShwcm9qZWN0Q291bnRTdG9yYWdlLmZpbmRJbmRleChlbCA9PiBlbC5wcm9qZWN0ID09PSBwcm9qZWN0RGVsZXRlZFRvZG9Db250YWluZXIuaWQpLCAxKTtcbn0gIiwiaW1wb3J0IHsgcHJvamVjdENvdW50U3RvcmFnZSB9IGZyb20gXCIuL2NyZWF0ZV90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgY29uc3QgcHJvamVjdFRoYXRIYXNUb2RvRGVsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcblxuICAgIHByb2plY3RDb3VudFN0b3JhZ2UuZmlsdGVyKGVsID0+IGVsLnByb2plY3QgPT09IHByb2plY3RUaGF0SGFzVG9kb0RlbGV0ZWQuaWQpWzBdLmNvdW50LS07XG5cbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZSk7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdG9kb0NvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIHByb2plY3REaXNwbGF5aW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSIsImltcG9ydCB1cGRhdGVUb2RvIGZyb20gXCIuL3VwZGF0ZV90b2RvXCI7XG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGRfdG9kb1wiO1xuaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gXCIuL2NyZWF0ZV90b2RvX2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRvZG8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVRvZG9Gb3JtKFwibWFpblwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcInN1Ym1pdFwiKTtcbiAgICBjb25zdCB0b2RvSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgIHRvZG9JZC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuXG4gICAgbGV0IG5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICBsZXQgZGV0YWlscyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxzXCIpO1xuICAgIGxldCBkdWVkYXRlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIik7XG4gICAgbGV0IHByaW9yaXR5ID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG4gICAgbmFtZS52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYW1lJylbMF0udGV4dENvbnRlbnQ7XG4gICAgZGV0YWlscy52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXRhaWxzJylbMF0udGV4dENvbnRlbnQ7XG4gICAgZHVlZGF0ZS52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkdWVkYXRlJylbMF0udGV4dENvbnRlbnQ7XG4gICAgcHJpb3JpdHkudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJpb3JpdHknKVswXS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRvZG8pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdXBkYXRlVG9kbyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluaXNoVG9kbygpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcImxpbmUtdGhyb3VnaFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJub25lXCIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvRm9ybUJ0bihidG5fdmFsdWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IGJ0bl92YWx1ZTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgYnRuX3ZhbHVlKTtcblxuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBjbG9zZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbWFyb29uJztcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUFkZFRvZG9Gb3JtKTtcblxuICAgIGRpdi5hcHBlbmQoc3VibWl0QnRuLCBjbG9zZUJ0bik7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiByZW1vdmVBZGRUb2RvRm9ybSgpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eVByb3BlcnR5KHByaW9yaXR5X3ZhbHVlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAncHJpb3JpdHknO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknLCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25zW2ldKTtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gcHJpb3JpdHlfdmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGRpdi5hcHBlbmQodGl0bGUsIHNlbGVjdCk7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNpbWlsYXJQcm9wZXJ0aWVzKG5hbWVfdmFsdWUsIGRldGFpbHNfdmFsdWUsIGR1ZWRhdGVfdmFsdWUpIHtcbiAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9TaW1pbGFyUHJvcGVydGllcyA9IFtcbiAgICAgIHtcbiAgICAgICAgZm9yOiBcIm5hbWVcIixcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGlkOiBcIm5hbWVcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgIHZhbHVlOiBuYW1lX3ZhbHVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZm9yOiBcImRldGFpbHNcIixcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGlkOiBcImRldGFpbHNcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgIHZhbHVlOiBkZXRhaWxzX3ZhbHVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZm9yOiBcImR1ZWRhdGVcIixcbiAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgIGlkOiBcImR1ZWRhdGVcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgIHZhbHVlOiBkdWVkYXRlX3ZhbHVlLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvU2ltaWxhclByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1wiZm9yXCJdO1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcImZvclwiXSk7XG5cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0eXBlOiB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJ0eXBlXCJdLFxuICAgICAgICBpZDogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1wiaWRcIl0sXG4gICAgICAgIHJlcXVpcmVkOiB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJyZXF1aXJlZFwiXSxcbiAgICAgICAgdmFsdWU6IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcInZhbHVlXCJdLFxuICAgICAgfSk7XG5cbiAgICAgIGlubmVyRGl2LmFwcGVuZCh0aXRsZSwgaW5wdXQpO1xuICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRlckRpdjtcbn0iLCJpbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGRfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVUb2RvKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgIGNvbnN0IGZvcm0gPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgdG9kb0lkID0gZm9ybS5jbGFzc0xpc3RbMV07XG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvSWQpO1xuICAgIGxldCBuYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWU7XG4gICAgbGV0IGRldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKS52YWx1ZTtcbiAgICBsZXQgZHVlZGF0ZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcblxuICAgIHRvZG8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hbWVcIilbMF0udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRvZG8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRldGFpbHNcIilbMF0udGV4dENvbnRlbnQgPVxuICAgICAgZGV0YWlscztcbiAgICB0b2RvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkdWVkYXRlXCIpWzBdLnRleHRDb250ZW50ID1cbiAgICAgIGR1ZWRhdGU7XG4gICAgdG9kby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJpb3JpdHlcIilbMF0udGV4dENvbnRlbnQgPVxuICAgICAgcHJpb3JpdHk7XG5cbiAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHVwZGF0ZVRvZG8pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVG9kbyk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKHRvZG9JZCk7XG5cbiAgZm9ybS5yZXNldCgpO1xuICBmb3JtLnJlbW92ZSgpO1xufSIsImltcG9ydCB7IHByb2plY3RDb3VudFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVUb2RvQ291bnQocHJvamVjdCkge1xuICAgIHJldHVybiBwcm9qZWN0ICsgJ18nICsocHJvamVjdENvdW50U3RvcmFnZS5maW5kKChlbCkgPT4gZWwucHJvamVjdCA9PT0gcHJvamVjdClbJ2NvdW50J10pKys7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVfcHJvamVjdFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNyZWF0ZVByb2plY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=