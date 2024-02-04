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
    const sideBar = document.querySelector(".sidebar");
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
    sideBar.appendChild(form);

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
/* harmony import */ var _delete_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_todo */ "./src/delete_todo.js");
/* harmony import */ var _finish_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finish_todo */ "./src/finish_todo.js");
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_todo */ "./src/edit_todo.js");
/* harmony import */ var _update_todo_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update_todo_count */ "./src/update_todo_count.js");





class Todo {
  constructor(name, details, duedate, priority) {
    this.name = name;
    this.details = details;
    this.duedate = duedate;
    this.priority = priority;
  }
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
/* harmony export */   projectCountStorage: () => (/* binding */ projectCountStorage)
/* harmony export */ });
/* harmony import */ var _create_todo_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_todo_form.js */ "./src/create_todo_form.js");
/* harmony import */ var _add_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_todo.js */ "./src/add_todo.js");
/* harmony import */ var _delete_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_project.js */ "./src/delete_project.js");




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

    const sideBar = document.querySelector('.sidebar');
    const projectList = document.createElement('div');
    const todoContainer = document.querySelector('.todo_container');
    const container = document.createElement('div');
    const deleteProjectBtn = document.createElement('button');
    const project = document.querySelector('#project');

    sideBar.appendChild(projectList);
    let projectName = document.createElement('p');
    projectName.textContent = project.value;
    projectName.setAttribute('class', `project_${projectCount}`);
    projectList.appendChild(projectName);
    
    container.setAttribute('id', `project_${projectCount}`);
    let newProjectTodoCounter = new projectTodoCounter(`project_${projectCount}`, 0);
    projectCountStorage.push(newProjectTodoCounter);
    projectCount++;

    deleteProjectBtn.textContent = 'X';
    deleteProjectBtn.addEventListener('click', _delete_project_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    
    const form = (0,_create_todo_form_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
      "main",
      project.value,
      "",
      "",
      "",
      "",
      "submit"
    );
    form.addEventListener('submit', _add_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    container.append(deleteProjectBtn, form);
    todoContainer.appendChild(container);

    this.reset();
    sideBar.removeChild(this);
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

function createTodoForm(form_class, project_value, name_value, details_value, duedate_value, priority_value, btn_value) {
    const form = document.createElement('form');
    const div = document.createElement('div');

    form.setAttribute('class', form_class);

    div.appendChild((0,_todo_form_project__WEBPACK_IMPORTED_MODULE_0__["default"])(project_value));
    div.appendChild(
      (0,_todo_form_similar_props__WEBPACK_IMPORTED_MODULE_1__["default"])(name_value, details_value, duedate_value)
    );
    div.appendChild((0,_todo_form_priority__WEBPACK_IMPORTED_MODULE_2__["default"])(priority_value));
    div.appendChild((0,_todo_form_btn__WEBPACK_IMPORTED_MODULE_3__["default"])(btn_value));

    form.appendChild(div);
    
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
    const projectToBeDeleted = document.getElementById(this.parentNode.id);
    
    projectToBeDeleted.remove();

    _create_todo__WEBPACK_IMPORTED_MODULE_0__.projectCountStorage.splice(_create_todo__WEBPACK_IMPORTED_MODULE_0__.projectCountStorage.findIndex(el => el.project === projectToBeDeleted.id), 1);
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
    const mainContainer = document.getElementById(this.parentNode.parentNode.id);
    const form = mainContainer.querySelector('.main');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNpQzs7QUFFbEI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGlEQUFPO0FBQzNDOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCb0Q7O0FBRXJDO0FBQ2YsMkJBQTJCLDZEQUFtQjtBQUM5Qzs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7O0FBRTdDLDJEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYWRkX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2FkZF90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jcmVhdGVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2NyZWF0ZV90b2RvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RlbGV0ZV9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kZWxldGVfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZWRpdF90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9maW5pc2hfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX2J0bi5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvX2Zvcm1fcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX3NpbWlsYXJfcHJvcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3VwZGF0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy91cGRhdGVfdG9kb19jb3VudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vY3JlYXRlX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgIGlucHV0LnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdFwiLFxuICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICB9KTtcblxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsIFwic3VibWl0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0X2Zvcm0nKTtcbiAgICBcbiAgICBmb3JtLmFwcGVuZChpbnB1dCwgYnRuKTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNyZWF0ZVRvZG8pO1xufSIsImltcG9ydCBkZWxldGVUb2RvIGZyb20gJy4vZGVsZXRlX3RvZG8nO1xuaW1wb3J0IGZpbmlzaFRvZG8gZnJvbSAnLi9maW5pc2hfdG9kbyc7XG5pbXBvcnQgZWRpdFRvZG8gZnJvbSAnLi9lZGl0X3RvZG8nO1xuaW1wb3J0IHVwZGF0ZVRvZG9Db3VudCBmcm9tICcuL3VwZGF0ZV90b2RvX2NvdW50JztcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRldGFpbHMsIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG8oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgbGV0IG5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcbiAgbGV0IGRldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKS52YWx1ZTtcbiAgbGV0IGR1ZWRhdGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUsIGRldGFpbHMsIGR1ZWRhdGUsIHByaW9yaXR5KTtcblxuICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHVwZGF0ZVRvZG9Db3VudCh0aGlzLnBhcmVudE5vZGUuaWQpKTtcbiAgY29uc3QgdG9kb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b2RvQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9kby5uYW1lO1xuICB0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hbWUnKTtcbiAgY29uc3QgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvRGV0YWlscy50ZXh0Q29udGVudCA9IG5ld1RvZG8uZGV0YWlscztcbiAgdG9kb0RldGFpbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxzJyk7XG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBuZXdUb2RvLmR1ZWRhdGU7XG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlZGF0ZScpO1xuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBuZXdUb2RvLnByaW9yaXR5O1xuICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eScpO1xuICBjb25zdCBkZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBjb25zdCBlZGl0VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICBcbiAgdG9kb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbmlzaFRvZG8pO1xuICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbyk7XG4gIGVkaXRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG8pO1xuICAgIFxuICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb0NoZWNrYm94LCB0b2RvTmFtZSwgdG9kb0RldGFpbHMsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGRlbGV0ZVRvZG9CdG4sIGVkaXRUb2RvQnRuKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG5cbiAgdGhpcy5yZXNldCgpO1xufSIsImltcG9ydCBhZGRQcm9qZWN0IGZyb20gXCIuL2FkZF9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG5cbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGJ0bik7XG59IiwiaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gJy4vY3JlYXRlX3RvZG9fZm9ybS5qcyc7XG5pbXBvcnQgYWRkVG9kbyBmcm9tICcuL2FkZF90b2RvLmpzJztcbmltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gJy4vZGVsZXRlX3Byb2plY3QuanMnO1xuXG5leHBvcnQgbGV0IHByb2plY3RDb3VudFN0b3JhZ2UgPSBbXTtcbmxldCBwcm9qZWN0Q291bnQgPSAwO1xuXG5jbGFzcyBwcm9qZWN0VG9kb0NvdW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIGNvdW50KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC52YWx1ZTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHByb2plY3RfJHtwcm9qZWN0Q291bnR9YCk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIFxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3RfJHtwcm9qZWN0Q291bnR9YCk7XG4gICAgbGV0IG5ld1Byb2plY3RUb2RvQ291bnRlciA9IG5ldyBwcm9qZWN0VG9kb0NvdW50ZXIoYHByb2plY3RfJHtwcm9qZWN0Q291bnR9YCwgMCk7XG4gICAgcHJvamVjdENvdW50U3RvcmFnZS5wdXNoKG5ld1Byb2plY3RUb2RvQ291bnRlcik7XG4gICAgcHJvamVjdENvdW50Kys7XG5cbiAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KTtcbiAgICBcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVG9kb0Zvcm0oXG4gICAgICBcIm1haW5cIixcbiAgICAgIHByb2plY3QudmFsdWUsXG4gICAgICBcIlwiLFxuICAgICAgXCJcIixcbiAgICAgIFwiXCIsXG4gICAgICBcIlwiLFxuICAgICAgXCJzdWJtaXRcIlxuICAgICk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUb2RvKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGRlbGV0ZVByb2plY3RCdG4sIGZvcm0pO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgICBzaWRlQmFyLnJlbW92ZUNoaWxkKHRoaXMpO1xufSIsImltcG9ydCBjcmVhdGVQcm9qZWN0TmFtZSBmcm9tIFwiLi90b2RvX2Zvcm1fcHJvamVjdFwiO1xuaW1wb3J0IGNyZWF0ZVNpbWlsYXJQcm9wZXJ0aWVzIGZyb20gXCIuL3RvZG9fZm9ybV9zaW1pbGFyX3Byb3BzXCI7XG5pbXBvcnQgY3JlYXRlUHJpb3JpdHlQcm9wZXJ0eSBmcm9tIFwiLi90b2RvX2Zvcm1fcHJpb3JpdHlcIjtcbmltcG9ydCBjcmVhdGVUb2RvRm9ybUJ0biBmcm9tIFwiLi90b2RvX2Zvcm1fYnRuXCI7XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAob2JqKSB7IFxuICAgIGZvcih2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvcCwgb2JqW3Byb3BdKTsgXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm0oZm9ybV9jbGFzcywgcHJvamVjdF92YWx1ZSwgbmFtZV92YWx1ZSwgZGV0YWlsc192YWx1ZSwgZHVlZGF0ZV92YWx1ZSwgcHJpb3JpdHlfdmFsdWUsIGJ0bl92YWx1ZSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmb3JtX2NsYXNzKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0X3ZhbHVlKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlU2ltaWxhclByb3BlcnRpZXMobmFtZV92YWx1ZSwgZGV0YWlsc192YWx1ZSwgZHVlZGF0ZV92YWx1ZSlcbiAgICApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVQcmlvcml0eVByb3BlcnR5KHByaW9yaXR5X3ZhbHVlKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Gb3JtQnRuKGJ0bl92YWx1ZSkpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIFxuICAgIHJldHVybiBmb3JtO1xufSIsImltcG9ydCB7IHByb2plY3RDb3VudFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RUb0JlRGVsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgXG4gICAgcHJvamVjdFRvQmVEZWxldGVkLnJlbW92ZSgpO1xuXG4gICAgcHJvamVjdENvdW50U3RvcmFnZS5zcGxpY2UocHJvamVjdENvdW50U3RvcmFnZS5maW5kSW5kZXgoZWwgPT4gZWwucHJvamVjdCA9PT0gcHJvamVjdFRvQmVEZWxldGVkLmlkKSwgMSk7XG59ICIsImltcG9ydCB7IHByb2plY3RDb3VudFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIGNvbnN0IHByb2plY3RUaGF0SGFzVG9kb0RlbGV0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG5cbiAgICBwcm9qZWN0Q291bnRTdG9yYWdlLmZpbHRlcihlbCA9PiBlbC5wcm9qZWN0ID09PSBwcm9qZWN0VGhhdEhhc1RvZG9EZWxldGVkLmlkKVswXS5jb3VudC0tO1xuXG4gICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZSgpO1xufSIsImltcG9ydCB1cGRhdGVUb2RvIGZyb20gXCIuL3VwZGF0ZV90b2RvXCI7XG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGRfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0VG9kbygpIHtcbiAgICBjb25zdCB0b2RvSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgY29uc3QgZm9ybSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBsZXQgbmFtZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuICAgIGxldCBkZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbHNcIik7XG4gICAgbGV0IGR1ZWRhdGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG5cbiAgICBuYW1lLnZhbHVlID0gdG9kb0lkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hbWUnKVswXS50ZXh0Q29udGVudDtcbiAgICBkZXRhaWxzLnZhbHVlID0gdG9kb0lkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RldGFpbHMnKVswXS50ZXh0Q29udGVudDtcbiAgICBkdWVkYXRlLnZhbHVlID0gdG9kb0lkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2R1ZWRhdGUnKVswXS50ZXh0Q29udGVudDtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRvZG9JZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmlvcml0eScpWzBdLnRleHRDb250ZW50O1xuICAgIFxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVG9kbyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB1cGRhdGVUb2RvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5pc2hUb2RvKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcIm5vbmVcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtQnRuKGJ0bl92YWx1ZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0bl92YWx1ZTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBidG5fdmFsdWUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eVByb3BlcnR5KHByaW9yaXR5X3ZhbHVlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAncHJpb3JpdHknO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknLCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25zW2ldKTtcbiAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gcHJpb3JpdHlfdmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGRpdi5hcHBlbmQodGl0bGUsIHNlbGVjdCk7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROYW1lKHByb2plY3RfdmFsdWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0X3ZhbHVlO1xuXG4gICAgcmV0dXJuIGRpdjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaW1pbGFyUHJvcGVydGllcyhuYW1lX3ZhbHVlLCBkZXRhaWxzX3ZhbHVlLCBkdWVkYXRlX3ZhbHVlKSB7XG4gICAgY29uc3Qgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvU2ltaWxhclByb3BlcnRpZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJuYW1lXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpZDogXCJuYW1lXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogbmFtZV92YWx1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJkZXRhaWxzXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpZDogXCJkZXRhaWxzXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogZGV0YWlsc192YWx1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcjogXCJkdWVkYXRlXCIsXG4gICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICBpZDogXCJkdWVkYXRlXCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICB2YWx1ZTogZHVlZGF0ZV92YWx1ZSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1NpbWlsYXJQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcImZvclwiXTtcbiAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJmb3JcIl0pO1xuXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgdHlwZTogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1widHlwZVwiXSxcbiAgICAgICAgaWQ6IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcImlkXCJdLFxuICAgICAgICByZXF1aXJlZDogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1wicmVxdWlyZWRcIl0sXG4gICAgICAgIHZhbHVlOiB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJ2YWx1ZVwiXSxcbiAgICAgIH0pO1xuXG4gICAgICBpbm5lckRpdi5hcHBlbmQodGl0bGUsIGlucHV0KTtcbiAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0ZXJEaXY7XG59IiwiaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vYWRkX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVG9kbyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgICBjb25zdCBmb3JtID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IHRvZG9JZCA9IGZvcm0uY2xhc3NMaXN0WzFdO1xuICAgIGxldCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0lkKTtcbiAgICBsZXQgbmFtZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlO1xuICAgIGxldCBkZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbHNcIikudmFsdWU7XG4gICAgbGV0IGR1ZWRhdGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICB0b2RvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYW1lXCIpWzBdLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0b2RvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZXRhaWxzXCIpWzBdLnRleHRDb250ZW50ID1cbiAgICAgIGRldGFpbHM7XG4gICAgdG9kby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHVlZGF0ZVwiKVswXS50ZXh0Q29udGVudCA9XG4gICAgICBkdWVkYXRlO1xuICAgIHRvZG8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByaW9yaXR5XCIpWzBdLnRleHRDb250ZW50ID1cbiAgICAgIHByaW9yaXR5O1xuXG4gICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB1cGRhdGVUb2RvKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRvZG8pO1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSh0b2RvSWQpO1xuXG4gICAgZm9ybS5yZXNldCgpO1xufSIsImltcG9ydCB7IHByb2plY3RDb3VudFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVUb2RvQ291bnQocHJvamVjdCkge1xuICAgIHJldHVybiBwcm9qZWN0ICsgJ18nICsocHJvamVjdENvdW50U3RvcmFnZS5maW5kKChlbCkgPT4gZWwucHJvamVjdCA9PT0gcHJvamVjdClbJ2NvdW50J10pKys7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZV9wcm9qZWN0XCI7XG5cbmNyZWF0ZVByb2plY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=