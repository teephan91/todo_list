/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    const body = document.querySelector("body");
    const form = document.createElement('form');
    const input = document.createElement('input');
    const btn = document.createElement('button');
    
    input.setAttributes({
        type: "text",
        id: "project",
        required: "",
    });

    btn.textContent = "Submit";
    btn.setAttribute('type', "submit");
    form.setAttribute('id', 'project_form');
    
    form.append(input, btn);
    body.appendChild(form);

    form.addEventListener("submit", _create_todo__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/***/ }),

/***/ "./src/add_todo.js":
/*!*************************!*\
  !*** ./src/add_todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_todo */ "./src/create_todo.js");
/* harmony import */ var _delete_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete_todo */ "./src/delete_todo.js");
/* harmony import */ var _finish_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finish_todo */ "./src/finish_todo.js");
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit_todo */ "./src/edit_todo.js");





let idCounter = 1;

function addTodo(event) {
  event.preventDefault();

  const mainContainer = document.getElementById("container");
  let name = document.querySelector("#name").value;
  let details = document.querySelector("#details").value;
  let duedate = document.querySelector("#duedate").value;
  let priority = document.querySelector("#priority").value;
  let newTodo = new _create_todo__WEBPACK_IMPORTED_MODULE_0__.Todo(name, details, duedate, priority);

  const todoElement = document.createElement("div");
  todoElement.setAttribute('id', idCounter);
  idCounter++;
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
   
  todoCheckbox.addEventListener('change', _finish_todo__WEBPACK_IMPORTED_MODULE_2__["default"]);
  deleteTodoBtn.addEventListener('click', _delete_todo__WEBPACK_IMPORTED_MODULE_1__["default"]);
  editTodoBtn.addEventListener('click', _edit_todo__WEBPACK_IMPORTED_MODULE_3__["default"]);
    
  todoElement.append(todoCheckbox, todoName, todoDetails, todoDueDate, todoPriority, deleteTodoBtn, editTodoBtn);
  mainContainer.appendChild(todoElement);

  this.reset();
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
    const body = document.querySelector("body");
    const btn = document.createElement('button');

    btn.textContent = 'Add Project';
    btn.addEventListener('click', _add_project__WEBPACK_IMPORTED_MODULE_0__["default"]);

    body.appendChild(btn);
}

/***/ }),

/***/ "./src/create_todo.js":
/*!****************************!*\
  !*** ./src/create_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _create_todo_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_todo_form.js */ "./src/create_todo_form.js");
/* harmony import */ var _add_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_todo.js */ "./src/add_todo.js");



// createTodoForm('main','','','','','submit');

class Todo {
    constructor(name, details, duedate, priority) {
        this.name = name;
        this.details = details;
        this.duedate = duedate;
        this.priority = priority;
    }
}

function createTodo(event) {
    event.preventDefault();

    const project = document.querySelector('#project');
    (0,_create_todo_form_js__WEBPACK_IMPORTED_MODULE_0__["default"])('main', project.value, '', '', '', '', 'submit');

    const form = document.getElementById("main");
    form.addEventListener('submit', _add_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

    this.reset();
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
/* harmony import */ var _todo_form_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_form_project */ "./src/todo_form_project.js");
/* harmony import */ var _todo_form_similar_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_form_similar_props */ "./src/todo_form_similar_props.js");
/* harmony import */ var _todo_form_priority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_form_priority */ "./src/todo_form_priority.js");
/* harmony import */ var _todo_form_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_form_btn */ "./src/todo_form_btn.js");





Element.prototype.setAttributes = function (obj) { 
    for(var prop in obj) {
        this.setAttribute(prop, obj[prop]); 
    }
};

function createTodoForm(form_id, project_value, name_value, details_value, duedate_value, priority_value, btn_value) {
    const body = document.querySelector('body');
    const form = document.createElement('form');
    const div = document.createElement('div');

    form.setAttribute('id', form_id);

    div.appendChild((0,_todo_form_project__WEBPACK_IMPORTED_MODULE_0__["default"])(project_value));
    div.appendChild(
      (0,_todo_form_similar_props__WEBPACK_IMPORTED_MODULE_1__["default"])(name_value, details_value, duedate_value)
    );
    div.appendChild((0,_todo_form_priority__WEBPACK_IMPORTED_MODULE_2__["default"])(priority_value));
    div.appendChild((0,_todo_form_btn__WEBPACK_IMPORTED_MODULE_3__["default"])(btn_value));

    form.appendChild(div);
    body.appendChild(form);
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
function deleteTodo() {
    this.parentNode.remove();
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



function editTodo() {
    const todoId = document.getElementById(this.parentNode.id);
    const form = document.getElementById('main');
    let name = document.querySelector("#name");
    let details = document.querySelector("#details");
    let duedate = document.querySelector("#duedate");
    let priority = document.querySelector("#priority");

    name.value = todoId.getElementsByClassName('name')[0].textContent;
    details.value = todoId.getElementsByClassName('details')[0].textContent;
    duedate.value = todoId.getElementsByClassName('duedate')[0].textContent;
    priority.value = todoId.getElementsByClassName('priority')[0].textContent;
    
    form.setAttribute('class', this.parentNode.id);
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
    const btn = document.createElement('button');
    btn.textContent = btn_value;
    btn.setAttribute("type", btn_value);
    div.appendChild(btn);

    return div;
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

/***/ "./src/todo_form_project.js":
/*!**********************************!*\
  !*** ./src/todo_form_project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectName)
/* harmony export */ });
function createProjectName(project_value) {
    const div = document.createElement('div');
    div.textContent = project_value;

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

    const form = document.getElementById("main");
    const todoId = form.className;
    let todo = document.getElementById(todoId);
    let name = document.querySelector("#name").value;
    let details = document.querySelector("#details").value;
    let duedate = document.querySelector("#duedate").value;
    let priority = document.querySelector("#priority").value;

    todo.getElementsByClassName("name")[0].textContent = name;
    todo.getElementsByClassName("details")[0].textContent =
      details;
    todo.getElementsByClassName("duedate")[0].textContent =
      duedate;
    todo.getElementsByClassName("priority")[0].textContent =
      priority;

    form.removeEventListener('submit', updateTodo);
    form.addEventListener('submit', _add_todo__WEBPACK_IMPORTED_MODULE_0__["default"]);
    form.removeAttribute('class');

    form.reset();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_project */ "./src/create_project.js");


(0,_create_project__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLG9EQUFVO0FBQzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnFDO0FBQ0U7QUFDQTtBQUNKOztBQUVuQzs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQUk7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG9EQUFVO0FBQ3BELDBDQUEwQyxvREFBVTtBQUNwRCx3Q0FBd0Msa0RBQVE7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ3VDOztBQUV4QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0Msb0RBQVU7O0FBRTVDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVm1EO0FBQ2Y7O0FBRXBDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBLElBQUksZ0VBQWM7O0FBRWxCO0FBQ0Esb0NBQW9DLG9EQUFPOztBQUUzQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qm9EO0FBQ1k7QUFDTjtBQUNWOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw4REFBaUI7QUFDckM7QUFDQSxNQUFNLG9FQUF1QjtBQUM3QjtBQUNBLG9CQUFvQiwrREFBc0I7QUFDMUMsb0JBQW9CLDBEQUFpQjs7QUFFckM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNCZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdUM7QUFDTjs7QUFFbEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlEQUFPO0FBQzlDLG9DQUFvQyxvREFBVTtBQUM5Qzs7Ozs7Ozs7Ozs7Ozs7QUNuQmU7QUFDZjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0Isb0JBQW9CO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q2lDOztBQUVsQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGlEQUFPO0FBQzNDOztBQUVBO0FBQ0E7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjZDOztBQUU3QywyREFBYSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2FkZF9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9hZGRfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2NyZWF0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jcmVhdGVfdG9kb19mb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kZWxldGVfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZWRpdF90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9maW5pc2hfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX2J0bi5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvX2Zvcm1fcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX3NpbWlsYXJfcHJvcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3VwZGF0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGlkOiBcInByb2plY3RcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgfSk7XG5cbiAgICBidG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcInN1Ym1pdFwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdF9mb3JtJyk7XG4gICAgXG4gICAgZm9ybS5hcHBlbmQoaW5wdXQsIGJ0bik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBjcmVhdGVUb2RvKTtcbn0iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9jcmVhdGVfdG9kbyc7XG5pbXBvcnQgZGVsZXRlVG9kbyBmcm9tICcuL2RlbGV0ZV90b2RvJztcbmltcG9ydCBmaW5pc2hUb2RvIGZyb20gJy4vZmluaXNoX3RvZG8nO1xuaW1wb3J0IGVkaXRUb2RvIGZyb20gJy4vZWRpdF90b2RvJztcblxubGV0IGlkQ291bnRlciA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG8oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKS52YWx1ZTtcbiAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gIGxldCBuZXdUb2RvID0gbmV3IFRvZG8obmFtZSwgZGV0YWlscywgZHVlZGF0ZSwgcHJpb3JpdHkpO1xuXG4gIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkQ291bnRlcik7XG4gIGlkQ291bnRlcisrO1xuICBjb25zdCB0b2RvQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvZG9DaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBuZXdUb2RvLm5hbWU7XG4gIHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmFtZScpO1xuICBjb25zdCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EZXRhaWxzLnRleHRDb250ZW50ID0gbmV3VG9kby5kZXRhaWxzO1xuICB0b2RvRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RldGFpbHMnKTtcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IG5ld1RvZG8uZHVlZGF0ZTtcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWVkYXRlJyk7XG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IG5ld1RvZG8ucHJpb3JpdHk7XG4gIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Jyk7XG4gIGNvbnN0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVUb2RvQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIGNvbnN0IGVkaXRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgIFxuICB0b2RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmluaXNoVG9kbyk7XG4gIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb2RvKTtcbiAgZWRpdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kbyk7XG4gICAgXG4gIHRvZG9FbGVtZW50LmFwcGVuZCh0b2RvQ2hlY2tib3gsIHRvZG9OYW1lLCB0b2RvRGV0YWlscywgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgZGVsZXRlVG9kb0J0biwgZWRpdFRvZG9CdG4pO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcblxuICB0aGlzLnJlc2V0KCk7XG59XG4iLCJpbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRfcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGJ0bik7XG59IiwiaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gJy4vY3JlYXRlX3RvZG9fZm9ybS5qcyc7XG5pbXBvcnQgYWRkVG9kbyBmcm9tICcuL2FkZF90b2RvLmpzJztcblxuLy8gY3JlYXRlVG9kb0Zvcm0oJ21haW4nLCcnLCcnLCcnLCcnLCdzdWJtaXQnKTtcblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRldGFpbHMsIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gICAgY3JlYXRlVG9kb0Zvcm0oJ21haW4nLCBwcm9qZWN0LnZhbHVlLCAnJywgJycsICcnLCAnJywgJ3N1Ym1pdCcpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRvZG8pO1xuXG4gICAgdGhpcy5yZXNldCgpO1xufSIsImltcG9ydCBjcmVhdGVQcm9qZWN0TmFtZSBmcm9tIFwiLi90b2RvX2Zvcm1fcHJvamVjdFwiO1xuaW1wb3J0IGNyZWF0ZVNpbWlsYXJQcm9wZXJ0aWVzIGZyb20gXCIuL3RvZG9fZm9ybV9zaW1pbGFyX3Byb3BzXCI7XG5pbXBvcnQgY3JlYXRlUHJpb3JpdHlQcm9wZXJ0eSBmcm9tIFwiLi90b2RvX2Zvcm1fcHJpb3JpdHlcIjtcbmltcG9ydCBjcmVhdGVUb2RvRm9ybUJ0biBmcm9tIFwiLi90b2RvX2Zvcm1fYnRuXCI7XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAob2JqKSB7IFxuICAgIGZvcih2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvcCwgb2JqW3Byb3BdKTsgXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm0oZm9ybV9pZCwgcHJvamVjdF92YWx1ZSwgbmFtZV92YWx1ZSwgZGV0YWlsc192YWx1ZSwgZHVlZGF0ZV92YWx1ZSwgcHJpb3JpdHlfdmFsdWUsIGJ0bl92YWx1ZSkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGZvcm1faWQpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3ROYW1lKHByb2plY3RfdmFsdWUpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVTaW1pbGFyUHJvcGVydGllcyhuYW1lX3ZhbHVlLCBkZXRhaWxzX3ZhbHVlLCBkdWVkYXRlX3ZhbHVlKVxuICAgICk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5UHJvcGVydHkocHJpb3JpdHlfdmFsdWUpKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0Zvcm1CdG4oYnRuX3ZhbHVlKSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgdXBkYXRlVG9kbyBmcm9tIFwiLi91cGRhdGVfdG9kb1wiO1xuaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vYWRkX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRvZG8oKSB7XG4gICAgY29uc3QgdG9kb0lkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKTtcbiAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG4gICAgbmFtZS52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYW1lJylbMF0udGV4dENvbnRlbnQ7XG4gICAgZGV0YWlscy52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZXRhaWxzJylbMF0udGV4dENvbnRlbnQ7XG4gICAgZHVlZGF0ZS52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkdWVkYXRlJylbMF0udGV4dENvbnRlbnQ7XG4gICAgcHJpb3JpdHkudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJpb3JpdHknKVswXS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVG9kbyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB1cGRhdGVUb2RvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5pc2hUb2RvKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcIm5vbmVcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtQnRuKGJ0bl92YWx1ZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0bl92YWx1ZTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBidG5fdmFsdWUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eVByb3BlcnR5KHByaW9yaXR5X3ZhbHVlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAncHJpb3JpdHknO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknLCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25zW2ldKTtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gcHJpb3JpdHlfdmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGRpdi5hcHBlbmQodGl0bGUsIHNlbGVjdCk7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROYW1lKHByb2plY3RfdmFsdWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0X3ZhbHVlO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaW1pbGFyUHJvcGVydGllcyhuYW1lX3ZhbHVlLCBkZXRhaWxzX3ZhbHVlLCBkdWVkYXRlX3ZhbHVlKSB7XG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvU2ltaWxhclByb3BlcnRpZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJuYW1lXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpZDogXCJuYW1lXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogbmFtZV92YWx1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJkZXRhaWxzXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpZDogXCJkZXRhaWxzXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogZGV0YWlsc192YWx1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJkdWVkYXRlXCIsXG4gICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICBpZDogXCJkdWVkYXRlXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogZHVlZGF0ZV92YWx1ZSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1NpbWlsYXJQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcImZvclwiXTtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJmb3JcIl0pO1xuXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1widHlwZVwiXSxcbiAgICAgICAgaWQ6IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcImlkXCJdLFxuICAgICAgICByZXF1aXJlZDogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1wicmVxdWlyZWRcIl0sXG4gICAgICAgIHZhbHVlOiB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJ2YWx1ZVwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBpbm5lckRpdi5hcHBlbmQodGl0bGUsIGlucHV0KTtcbiAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0ZXJEaXY7XG59IiwiaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vYWRkX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVG9kbyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IHRvZG9JZCA9IGZvcm0uY2xhc3NOYW1lO1xuICAgIGxldCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0lkKTtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcbiAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKS52YWx1ZTtcbiAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgdG9kby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmFtZVwiKVswXS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdG9kby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGV0YWlsc1wiKVswXS50ZXh0Q29udGVudCA9XG4gICAgICBkZXRhaWxzO1xuICAgIHRvZG8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImR1ZWRhdGVcIilbMF0udGV4dENvbnRlbnQgPVxuICAgICAgZHVlZGF0ZTtcbiAgICB0b2RvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmlvcml0eVwiKVswXS50ZXh0Q29udGVudCA9XG4gICAgICBwcmlvcml0eTtcblxuICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdXBkYXRlVG9kbyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUb2RvKTtcbiAgICBmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcblxuICAgIGZvcm0ucmVzZXQoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZV9wcm9qZWN0XCI7XG5cbmNyZWF0ZVByb2plY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=