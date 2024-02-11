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
}

.main_container {
    display: flex;
    flex-grow: 1;
}

    .sidebar {
        padding: 1.25rem;
        width: 300px;
    }

        .sidebar h2 {
            margin: .75rem;
        }

        .sidebar button {
            width: 50%;
            border: none;
            border-radius: 15px;
            padding: .5rem;
            margin: .75rem;
            font-family: Lato, sans-serif;
            color: #ffffff;
            background-color: var(--btnBackgroundColor);
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
    }

footer {

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,6BAA6B;IAC7B,eAAe;;IAEf,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,wCAAwC;AAC5C;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;IAEI;QACI,gBAAgB;QAChB,YAAY;IAChB;;QAEI;YACI,cAAc;QAClB;;QAEA;YACI,UAAU;YACV,YAAY;YACZ,mBAAmB;YACnB,cAAc;YACd,cAAc;YACd,6BAA6B;YAC7B,cAAc;YACd,2CAA2C;QAC/C;;QAEA;YACI,aAAa;YACb,WAAW;YACX,UAAU;QACd;;YAEI;gBACI,aAAa;gBACb,UAAU;YACd;;YAEA;gBACI,wBAAwB;YAC5B;;QAEJ;YACI,aAAa;YACb,8BAA8B;YAC9B,cAAc;QAClB;;YAEI;gBACI,kBAAkB;gBAClB,wBAAwB;YAC5B;;IAER;QACI,gBAAgB;IACpB;;AAEJ;;AAEA","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Russo+One&display=swap\");\n\n:root {\n    font-family: Lato, sans-serif;\n    font-size: 16px;\n\n    --backgroundColor: #eeeeee;\n    --btnBackgroundColor: #34b233;\n}\n\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    margin: 0;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--backgroundColor);\n}\n\nheader {\n    font-family: 'Russo One', sans-serif;\n    font-size: 25px;\n    text-align: center;\n}\n\n.main_container {\n    display: flex;\n    flex-grow: 1;\n}\n\n    .sidebar {\n        padding: 1.25rem;\n        width: 300px;\n    }\n\n        .sidebar h2 {\n            margin: .75rem;\n        }\n\n        .sidebar button {\n            width: 50%;\n            border: none;\n            border-radius: 15px;\n            padding: .5rem;\n            margin: .75rem;\n            font-family: Lato, sans-serif;\n            color: #ffffff;\n            background-color: var(--btnBackgroundColor);\n        }\n\n        .add_project {\n            display: flex;\n            width: 100%;\n            gap: .5rem;\n        }\n\n            #project_form {\n                display: flex;\n                gap: .5rem;\n            }\n\n            .add_project > button {\n                background-color: maroon;\n            }\n\n        .sidebar > div {\n            display: flex;\n            justify-content: space-between;\n            margin: .75rem;\n        }\n\n            .sidebar > div > button{\n                width: min-content;\n                background-color: maroon;\n            }\n\n    .todo_container {\n        padding: 1.25rem;\n    }\n\nfooter {\n\n}"],"sourceRoot":""}]);
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
    console.log(projectDisplaying);

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
    const btn = document.createElement('button');
    btn.textContent = btn_value;
    btn.setAttribute("type", btn_value);

    return btn;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNpQzs7QUFFbEI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGlEQUFPO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJvRDs7QUFFckM7QUFDZiwyQkFBMkIsNkRBQW1CO0FBQzlDOzs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDeEI7O0FBRXJCLDJEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2FkZF9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9hZGRfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2NyZWF0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jcmVhdGVfdG9kb19mb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kZWxldGVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZGVsZXRlX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2Rpc3BsYXlfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZWRpdF90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9maW5pc2hfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX2J0bi5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvX2Zvcm1fc2ltaWxhcl9wcm9wcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdXBkYXRlX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3VwZGF0ZV90b2RvX2NvdW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAxMDA7MzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1c3NvK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAtLWJhY2tncm91bmRDb2xvcjogI2VlZWVlZTtcbiAgICAtLWJ0bkJhY2tncm91bmRDb2xvcjogIzM0YjIzMztcbn1cblxuaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xufVxuXG5oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28gT25lJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbl9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4gICAgLnNpZGViYXIge1xuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuXG4gICAgICAgIC5zaWRlYmFyIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogLjc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGViYXIgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICBtYXJnaW46IC43NXJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5CYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZF9wcm9qZWN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGdhcDogLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAgICAgI3Byb2plY3RfZm9ybSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBnYXA6IC41cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWRkX3Byb2plY3QgPiBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAuc2lkZWJhciA+IGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luOiAuNzVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAgICAgLnNpZGViYXIgPiBkaXYgPiBidXR0b257XG4gICAgICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcbiAgICAgICAgICAgIH1cblxuICAgIC50b2RvX2NvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgfVxuXG5mb290ZXIge1xuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7O0lBRWYsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7SUFFSTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCOztRQUVJO1lBQ0ksY0FBYztRQUNsQjs7UUFFQTtZQUNJLFVBQVU7WUFDVixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxjQUFjO1lBQ2QsNkJBQTZCO1lBQzdCLGNBQWM7WUFDZCwyQ0FBMkM7UUFDL0M7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsV0FBVztZQUNYLFVBQVU7UUFDZDs7WUFFSTtnQkFDSSxhQUFhO2dCQUNiLFVBQVU7WUFDZDs7WUFFQTtnQkFDSSx3QkFBd0I7WUFDNUI7O1FBRUo7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLGNBQWM7UUFDbEI7O1lBRUk7Z0JBQ0ksa0JBQWtCO2dCQUNsQix3QkFBd0I7WUFDNUI7O0lBRVI7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDEwMDszMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnVzc28rT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kQ29sb3I6ICNlZWVlZWU7XFxuICAgIC0tYnRuQmFja2dyb3VuZENvbG9yOiAjMzRiMjMzO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuc2lkZWJhciBoMiB7XFxuICAgICAgICAgICAgbWFyZ2luOiAuNzVyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2lkZWJhciBidXR0b24ge1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiAuNzVyZW07XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuQmFja2dyb3VuZENvbG9yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5hZGRfcHJvamVjdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBnYXA6IC41cmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgICNwcm9qZWN0X2Zvcm0ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBnYXA6IC41cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYWRkX3Byb2plY3QgPiBidXR0b24ge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLnNpZGViYXIgPiBkaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIG1hcmdpbjogLjc1cmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaWRlYmFyID4gZGl2ID4gYnV0dG9ue1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIC50b2RvX2NvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuZm9vdGVyIHtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL2NyZWF0ZV90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdFwiLFxuICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICB9KTtcblxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsIFwic3VibWl0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0X2Zvcm0nKTtcblxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUFkZFByb2plY3RGb3JtKTtcbiAgICBcbiAgICBmb3JtLmFwcGVuZChpbnB1dCwgc3VibWl0QnRuKTtcbiAgICBvdXRlckRpdi5hcHBlbmQoZm9ybSwgZGVsZXRlQnRuKTtcbiAgICBvdXRlckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZF9wcm9qZWN0Jyk7XG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChvdXRlckRpdik7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlVG9kbyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFkZFByb2plY3RGb3JtKCkge1xuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgZGVsZXRlVG9kbyBmcm9tICcuL2RlbGV0ZV90b2RvJztcbmltcG9ydCBmaW5pc2hUb2RvIGZyb20gJy4vZmluaXNoX3RvZG8nO1xuaW1wb3J0IGVkaXRUb2RvIGZyb20gJy4vZWRpdF90b2RvJztcbmltcG9ydCB1cGRhdGVUb2RvQ291bnQgZnJvbSAnLi91cGRhdGVfdG9kb19jb3VudCc7XG5pbXBvcnQgY3JlYXRlVG9kb0Zvcm0gZnJvbSAnLi9jcmVhdGVfdG9kb19mb3JtJztcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRldGFpbHMsIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICBcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZVRvZG9Gb3JtKFwibWFpblwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcInN1Ym1pdFwiKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkVG9kbyk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgbGV0IG5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcbiAgbGV0IGRldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKS52YWx1ZTtcbiAgbGV0IGR1ZWRhdGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUsIGRldGFpbHMsIGR1ZWRhdGUsIHByaW9yaXR5KTtcblxuICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHVwZGF0ZVRvZG9Db3VudCh0aGlzLnBhcmVudE5vZGUuaWQpKTtcbiAgY29uc3QgdG9kb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b2RvQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9kby5uYW1lO1xuICB0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hbWUnKTtcbiAgY29uc3QgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvRGV0YWlscy50ZXh0Q29udGVudCA9IG5ld1RvZG8uZGV0YWlscztcbiAgdG9kb0RldGFpbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxzJyk7XG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBuZXdUb2RvLmR1ZWRhdGU7XG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlZGF0ZScpO1xuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBuZXdUb2RvLnByaW9yaXR5O1xuICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eScpO1xuICBjb25zdCBkZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBjb25zdCBlZGl0VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICBcbiAgdG9kb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbmlzaFRvZG8pO1xuICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbyk7XG4gIGVkaXRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG8pO1xuICAgIFxuICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb0NoZWNrYm94LCB0b2RvTmFtZSwgdG9kb0RldGFpbHMsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGRlbGV0ZVRvZG9CdG4sIGVkaXRUb2RvQnRuKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG5cbiAgdGhpcy5yZXNldCgpO1xuICB0aGlzLnJlbW92ZSgpO1xufSIsImltcG9ydCBhZGRQcm9qZWN0IGZyb20gXCIuL2FkZF9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG5cbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGJ0bik7XG59IiwiaW1wb3J0IGRlbGV0ZVByb2plY3QgZnJvbSAnLi9kZWxldGVfcHJvamVjdC5qcyc7XG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSAnLi9kaXNwbGF5X3Byb2plY3QuanMnO1xuaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9hZGRfdG9kby5qcyc7XG5cbmV4cG9ydCBsZXQgcHJvamVjdENvdW50U3RvcmFnZSA9IFtdO1xubGV0IHByb2plY3RDb3VudCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBwcm9qZWN0VG9kb0NvdW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIGNvdW50KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gVGhpcyBpcyBmb3IgdGhlIHNpZGViYXJcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyU2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UHJvamVjdCk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICBcblxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lclNpZGViYXIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC52YWx1ZTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICAgIHByb2plY3RDb250YWluZXJTaWRlYmFyLmFwcGVuZChwcm9qZWN0TmFtZSwgZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lclNpZGViYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYHByb2plY3RfJHtwcm9qZWN0Q291bnR9YCk7XG5cblxuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSB0b2RvIGNvbnRhaW5lclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9fY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXJUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyVG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcHJvamVjdF8ke3Byb2plY3RDb3VudH1gKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnZhbHVlO1xuICAgIGFkZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb2RvXCI7XG4gICAgcHJvamVjdENvbnRhaW5lclRvZG9Db250YWluZXIuYXBwZW5kKHByb2plY3RUaXRsZSwgYWRkVG9kb0J0bik7XG4gICAgcHJvamVjdENvbnRhaW5lclRvZG9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXJUb2RvQ29udGFpbmVyKTtcbiAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlRm9ybSk7XG5cbiAgICAvLyBUaGlzIGlzIHRvIGtlZXAgdHJhY2sgb2YgcHJvamVjdCBjb3VudFxuICAgIHByb2plY3RDb3VudCsrO1xuXG4gICAgbGV0IG5ld1Byb2plY3RUb2RvQ291bnRlciA9IG5ldyBwcm9qZWN0VG9kb0NvdW50ZXIoXG4gICAgICAgcHJvamVjdENvbnRhaW5lclNpZGViYXIuY2xhc3NOYW1lLFxuICAgICAgIDBcbiAgICApO1xuICAgIHByb2plY3RDb3VudFN0b3JhZ2UucHVzaChuZXdQcm9qZWN0VG9kb0NvdW50ZXIpO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHNpZGVCYXIucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnROb2RlKTtcbn0iLCJpbXBvcnQgY3JlYXRlU2ltaWxhclByb3BlcnRpZXMgZnJvbSBcIi4vdG9kb19mb3JtX3NpbWlsYXJfcHJvcHNcIjtcbmltcG9ydCBjcmVhdGVQcmlvcml0eVByb3BlcnR5IGZyb20gXCIuL3RvZG9fZm9ybV9wcmlvcml0eVwiO1xuaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtQnRuIGZyb20gXCIuL3RvZG9fZm9ybV9idG5cIjtcblxuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIChvYmopIHsgXG4gICAgZm9yKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShwcm9wLCBvYmpbcHJvcF0pOyBcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvRm9ybShmb3JtX2NsYXNzLCBuYW1lX3ZhbHVlLCBkZXRhaWxzX3ZhbHVlLCBkdWVkYXRlX3ZhbHVlLCBwcmlvcml0eV92YWx1ZSwgYnRuX3ZhbHVlKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGZvcm1fY2xhc3MpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZVNpbWlsYXJQcm9wZXJ0aWVzKG5hbWVfdmFsdWUsIGRldGFpbHNfdmFsdWUsIGR1ZWRhdGVfdmFsdWUpXG4gICAgKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5UHJvcGVydHkocHJpb3JpdHlfdmFsdWUpKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Gb3JtQnRuKGJ0bl92YWx1ZSkpO1xuICAgIFxuICAgIHJldHVybiBmb3JtO1xufSIsImltcG9ydCB7IHByb2plY3RDb3VudFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3REZWxldGVkU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZSlbMF07XG4gICAgY29uc3QgcHJvamVjdERlbGV0ZWRUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdERlbGV0ZWRTaWRlYmFyLmNsYXNzTmFtZSk7XG4gICAgXG4gICAgcHJvamVjdERlbGV0ZWRTaWRlYmFyLnJlbW92ZSgpO1xuICAgIHByb2plY3REZWxldGVkVG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIHByb2plY3RDb3VudFN0b3JhZ2Uuc3BsaWNlKHByb2plY3RDb3VudFN0b3JhZ2UuZmluZEluZGV4KGVsID0+IGVsLnByb2plY3QgPT09IHByb2plY3REZWxldGVkVG9kb0NvbnRhaW5lci5pZCksIDEpO1xufSAiLCJpbXBvcnQgeyBwcm9qZWN0Q291bnRTdG9yYWdlIH0gZnJvbSBcIi4vY3JlYXRlX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICBjb25zdCBwcm9qZWN0VGhhdEhhc1RvZG9EZWxldGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuXG4gICAgcHJvamVjdENvdW50U3RvcmFnZS5maWx0ZXIoZWwgPT4gZWwucHJvamVjdCA9PT0gcHJvamVjdFRoYXRIYXNUb2RvRGVsZXRlZC5pZClbMF0uY291bnQtLTtcblxuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpIHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdERpc3BsYXlpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUuY2xhc3NOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0RGlzcGxheWluZyk7XG5cbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgdG9kb0NvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICBwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIHByb2plY3REaXNwbGF5aW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSIsImltcG9ydCB1cGRhdGVUb2RvIGZyb20gXCIuL3VwZGF0ZV90b2RvXCI7XG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGRfdG9kb1wiO1xuaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gXCIuL2NyZWF0ZV90b2RvX2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRvZG8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVRvZG9Gb3JtKFwibWFpblwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcInN1Ym1pdFwiKTtcbiAgICBjb25zdCB0b2RvSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgIHRvZG9JZC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuXG4gICAgbGV0IG5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICBsZXQgZGV0YWlscyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxzXCIpO1xuICAgIGxldCBkdWVkYXRlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIik7XG4gICAgbGV0IHByaW9yaXR5ID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG4gICAgbmFtZS52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYW1lJylbMF0udGV4dENvbnRlbnQ7XG4gICAgZGV0YWlscy52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXRhaWxzJylbMF0udGV4dENvbnRlbnQ7XG4gICAgZHVlZGF0ZS52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkdWVkYXRlJylbMF0udGV4dENvbnRlbnQ7XG4gICAgcHJpb3JpdHkudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJpb3JpdHknKVswXS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRvZG8pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdXBkYXRlVG9kbyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluaXNoVG9kbygpIHtcbiAgICBpZiAodGhpcy5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcImxpbmUtdGhyb3VnaFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJub25lXCIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvRm9ybUJ0bihidG5fdmFsdWUpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBidG5fdmFsdWU7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgYnRuX3ZhbHVlKTtcblxuICAgIHJldHVybiBidG47XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlQcm9wZXJ0eShwcmlvcml0eV92YWx1ZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBvcHRpb25zID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ3ByaW9yaXR5JztcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5JywpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uc1tpXSk7XG4gICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHByaW9yaXR5X3ZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBkaXYuYXBwZW5kKHRpdGxlLCBzZWxlY3QpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaW1pbGFyUHJvcGVydGllcyhuYW1lX3ZhbHVlLCBkZXRhaWxzX3ZhbHVlLCBkdWVkYXRlX3ZhbHVlKSB7XG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvU2ltaWxhclByb3BlcnRpZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJuYW1lXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpZDogXCJuYW1lXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogbmFtZV92YWx1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJkZXRhaWxzXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpZDogXCJkZXRhaWxzXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogZGV0YWlsc192YWx1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJkdWVkYXRlXCIsXG4gICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICBpZDogXCJkdWVkYXRlXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogZHVlZGF0ZV92YWx1ZSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1NpbWlsYXJQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcImZvclwiXTtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJmb3JcIl0pO1xuXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1widHlwZVwiXSxcbiAgICAgICAgaWQ6IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcImlkXCJdLFxuICAgICAgICByZXF1aXJlZDogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1wicmVxdWlyZWRcIl0sXG4gICAgICAgIHZhbHVlOiB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJ2YWx1ZVwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBpbm5lckRpdi5hcHBlbmQodGl0bGUsIGlucHV0KTtcbiAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0ZXJEaXY7XG59IiwiaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vYWRkX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVG9kbyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgICBjb25zdCBmb3JtID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IHRvZG9JZCA9IGZvcm0uY2xhc3NMaXN0WzFdO1xuICAgIGxldCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0lkKTtcbiAgICBsZXQgbmFtZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlO1xuICAgIGxldCBkZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbHNcIikudmFsdWU7XG4gICAgbGV0IGR1ZWRhdGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICB0b2RvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYW1lXCIpWzBdLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0b2RvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZXRhaWxzXCIpWzBdLnRleHRDb250ZW50ID1cbiAgICAgIGRldGFpbHM7XG4gICAgdG9kby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHVlZGF0ZVwiKVswXS50ZXh0Q29udGVudCA9XG4gICAgICBkdWVkYXRlO1xuICAgIHRvZG8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByaW9yaXR5XCIpWzBdLnRleHRDb250ZW50ID1cbiAgICAgIHByaW9yaXR5O1xuXG4gICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB1cGRhdGVUb2RvKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRvZG8pO1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSh0b2RvSWQpO1xuXG4gIGZvcm0ucmVzZXQoKTtcbiAgZm9ybS5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgeyBwcm9qZWN0Q291bnRTdG9yYWdlIH0gZnJvbSBcIi4vY3JlYXRlX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVG9kb0NvdW50KHByb2plY3QpIHtcbiAgICByZXR1cm4gcHJvamVjdCArICdfJyArKHByb2plY3RDb3VudFN0b3JhZ2UuZmluZCgoZWwpID0+IGVsLnByb2plY3QgPT09IHByb2plY3QpWydjb3VudCddKSsrO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlX3Byb2plY3RcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jcmVhdGVQcm9qZWN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9