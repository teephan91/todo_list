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
  const todoContainer = document.querySelector(".todo_container");
  const container = document.createElement("div");
  const project = document.getElementsByClassName(this.parentNode.className)[0];
  
  const form = (0,_create_todo_form__WEBPACK_IMPORTED_MODULE_4__["default"])("main", this.textContent, "", "", "", "", "submit");

  form.addEventListener("submit", addTodo);
  container.appendChild(form);
  todoContainer.appendChild(container);
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
/* harmony import */ var _create_todo_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_todo_form.js */ "./src/create_todo_form.js");
/* harmony import */ var _add_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_todo.js */ "./src/add_todo.js");
/* harmony import */ var _delete_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_project.js */ "./src/delete_project.js");
/* harmony import */ var _display_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display_project.js */ "./src/display_project.js");





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
    const projectContainer = document.createElement('div');
    const projectName = document.createElement("p");
    projectName.addEventListener('click', _display_project_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const deleteProjectBtn = document.createElement("button");
   

    sideBar.appendChild(projectContainer);
    projectName.textContent = project.value;
    deleteProjectBtn.textContent = 'X';
    deleteProjectBtn.addEventListener("click", _delete_project_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    projectContainer.append(projectName, deleteProjectBtn);
    projectContainer.setAttribute("class", `project_${projectCount}`);
    projectCount++;

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
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_todo */ "./src/add_todo.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_todo */ "./src/create_todo.js");



function displayProject() {
    const todoContainer = document.querySelector('.todo_container');
    todoContainer.innerHTML = '';

    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const btn = document.createElement('button');

    projectContainer.setAttribute('id', this.parentNode.className);
    projectTitle.textContent = this.textContent;
    btn.textContent = 'Add Todo';
    projectContainer.append(projectTitle, btn);
    todoContainer.appendChild(projectContainer);

    let newProjectTodoCounter = new _create_todo__WEBPACK_IMPORTED_MODULE_1__.projectTodoCounter(
      this.parentNode.className,
      0
    );
    _create_todo__WEBPACK_IMPORTED_MODULE_1__.projectCountStorage.push(newProjectTodoCounter);
    console.log(_create_todo__WEBPACK_IMPORTED_MODULE_1__.projectCountStorage);

    btn.addEventListener('click', _add_todo__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNpQzs7QUFFbEI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGlEQUFPO0FBQzNDOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCb0Q7O0FBRXJDO0FBQ2YsMkJBQTJCLDZEQUFtQjtBQUM5Qzs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7O0FBRTdDLDJEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYWRkX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2FkZF90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jcmVhdGVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2NyZWF0ZV90b2RvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RlbGV0ZV9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kZWxldGVfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZGlzcGxheV9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9lZGl0X3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2ZpbmlzaF90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvX2Zvcm1fYnRuLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvX2Zvcm1fcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9fZm9ybV9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvX2Zvcm1fc2ltaWxhcl9wcm9wcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdXBkYXRlX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3VwZGF0ZV90b2RvX2NvdW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpZDogXCJwcm9qZWN0XCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgIH0pO1xuXG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgXCJzdWJtaXRcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RfZm9ybScpO1xuICAgIFxuICAgIGZvcm0uYXBwZW5kKGlucHV0LCBidG4pO1xuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY3JlYXRlVG9kbyk7XG59IiwiaW1wb3J0IGRlbGV0ZVRvZG8gZnJvbSAnLi9kZWxldGVfdG9kbyc7XG5pbXBvcnQgZmluaXNoVG9kbyBmcm9tICcuL2ZpbmlzaF90b2RvJztcbmltcG9ydCBlZGl0VG9kbyBmcm9tICcuL2VkaXRfdG9kbyc7XG5pbXBvcnQgdXBkYXRlVG9kb0NvdW50IGZyb20gJy4vdXBkYXRlX3RvZG9fY291bnQnO1xuaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gJy4vY3JlYXRlX3RvZG9fZm9ybSc7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXRhaWxzLCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvX2NvbnRhaW5lclwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZSlbMF07XG4gIFxuICBjb25zdCBmb3JtID0gY3JlYXRlVG9kb0Zvcm0oXCJtYWluXCIsIHRoaXMudGV4dENvbnRlbnQsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwic3VibWl0XCIpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRUb2RvKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgbGV0IG5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcbiAgbGV0IGRldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKS52YWx1ZTtcbiAgbGV0IGR1ZWRhdGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUsIGRldGFpbHMsIGR1ZWRhdGUsIHByaW9yaXR5KTtcblxuICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHVwZGF0ZVRvZG9Db3VudCh0aGlzLnBhcmVudE5vZGUuaWQpKTtcbiAgY29uc3QgdG9kb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b2RvQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9kby5uYW1lO1xuICB0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hbWUnKTtcbiAgY29uc3QgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvRGV0YWlscy50ZXh0Q29udGVudCA9IG5ld1RvZG8uZGV0YWlscztcbiAgdG9kb0RldGFpbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXRhaWxzJyk7XG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBuZXdUb2RvLmR1ZWRhdGU7XG4gIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlZGF0ZScpO1xuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBuZXdUb2RvLnByaW9yaXR5O1xuICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eScpO1xuICBjb25zdCBkZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBjb25zdCBlZGl0VG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICBcbiAgdG9kb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbmlzaFRvZG8pO1xuICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbyk7XG4gIGVkaXRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG8pO1xuICAgIFxuICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb0NoZWNrYm94LCB0b2RvTmFtZSwgdG9kb0RldGFpbHMsIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGRlbGV0ZVRvZG9CdG4sIGVkaXRUb2RvQnRuKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG5cbiAgdGhpcy5yZXNldCgpO1xuICB0aGlzLnJlbW92ZSgpO1xufSIsImltcG9ydCBhZGRQcm9qZWN0IGZyb20gXCIuL2FkZF9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG5cbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGJ0bik7XG59IiwiaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gJy4vY3JlYXRlX3RvZG9fZm9ybS5qcyc7XG5pbXBvcnQgYWRkVG9kbyBmcm9tICcuL2FkZF90b2RvLmpzJztcbmltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gJy4vZGVsZXRlX3Byb2plY3QuanMnO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0IGZyb20gJy4vZGlzcGxheV9wcm9qZWN0LmpzJztcblxuZXhwb3J0IGxldCBwcm9qZWN0Q291bnRTdG9yYWdlID0gW107XG5sZXQgcHJvamVjdENvdW50ID0gMDtcblxuZXhwb3J0IGNsYXNzIHByb2plY3RUb2RvQ291bnRlciB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgY291bnQpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9qZWN0KTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgIFxuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QudmFsdWU7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZSwgZGVsZXRlUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgcHJvamVjdF8ke3Byb2plY3RDb3VudH1gKTtcbiAgICBwcm9qZWN0Q291bnQrKztcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgICBzaWRlQmFyLnJlbW92ZUNoaWxkKHRoaXMpO1xufSIsImltcG9ydCBjcmVhdGVQcm9qZWN0TmFtZSBmcm9tIFwiLi90b2RvX2Zvcm1fcHJvamVjdFwiO1xuaW1wb3J0IGNyZWF0ZVNpbWlsYXJQcm9wZXJ0aWVzIGZyb20gXCIuL3RvZG9fZm9ybV9zaW1pbGFyX3Byb3BzXCI7XG5pbXBvcnQgY3JlYXRlUHJpb3JpdHlQcm9wZXJ0eSBmcm9tIFwiLi90b2RvX2Zvcm1fcHJpb3JpdHlcIjtcbmltcG9ydCBjcmVhdGVUb2RvRm9ybUJ0biBmcm9tIFwiLi90b2RvX2Zvcm1fYnRuXCI7XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAob2JqKSB7IFxuICAgIGZvcih2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvcCwgb2JqW3Byb3BdKTsgXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm0oZm9ybV9jbGFzcywgcHJvamVjdF92YWx1ZSwgbmFtZV92YWx1ZSwgZGV0YWlsc192YWx1ZSwgZHVlZGF0ZV92YWx1ZSwgcHJpb3JpdHlfdmFsdWUsIGJ0bl92YWx1ZSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmb3JtX2NsYXNzKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0X3ZhbHVlKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlU2ltaWxhclByb3BlcnRpZXMobmFtZV92YWx1ZSwgZGV0YWlsc192YWx1ZSwgZHVlZGF0ZV92YWx1ZSlcbiAgICApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVQcmlvcml0eVByb3BlcnR5KHByaW9yaXR5X3ZhbHVlKSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Gb3JtQnRuKGJ0bl92YWx1ZSkpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIFxuICAgIHJldHVybiBmb3JtO1xufSIsImltcG9ydCB7IHByb2plY3RDb3VudFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGVfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3REZWxldGVkU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZSlbMF07XG4gICAgY29uc3QgcHJvamVjdERlbGV0ZWRUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdERlbGV0ZWRTaWRlYmFyLmNsYXNzTmFtZSk7XG4gICAgXG4gICAgcHJvamVjdERlbGV0ZWRTaWRlYmFyLnJlbW92ZSgpO1xuICAgIHByb2plY3REZWxldGVkVG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIHByb2plY3RDb3VudFN0b3JhZ2Uuc3BsaWNlKHByb2plY3RDb3VudFN0b3JhZ2UuZmluZEluZGV4KGVsID0+IGVsLnByb2plY3QgPT09IHByb2plY3REZWxldGVkVG9kb0NvbnRhaW5lci5pZCksIDEpO1xufSAiLCJpbXBvcnQgeyBwcm9qZWN0Q291bnRTdG9yYWdlIH0gZnJvbSBcIi4vY3JlYXRlX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICBjb25zdCBwcm9qZWN0VGhhdEhhc1RvZG9EZWxldGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuXG4gICAgcHJvamVjdENvdW50U3RvcmFnZS5maWx0ZXIoZWwgPT4gZWwucHJvamVjdCA9PT0gcHJvamVjdFRoYXRIYXNUb2RvRGVsZXRlZC5pZClbMF0uY291bnQtLTtcblxuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgY3JlYXRlRm9ybSBmcm9tIFwiLi9hZGRfdG9kb1wiO1xuaW1wb3J0IHsgcHJvamVjdENvdW50U3RvcmFnZSwgcHJvamVjdFRvZG9Db3VudGVyIH0gZnJvbSBcIi4vY3JlYXRlX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX2NvbnRhaW5lcicpO1xuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGV4dENvbnRlbnQ7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ0FkZCBUb2RvJztcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIGJ0bik7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGxldCBuZXdQcm9qZWN0VG9kb0NvdW50ZXIgPSBuZXcgcHJvamVjdFRvZG9Db3VudGVyKFxuICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZSxcbiAgICAgIDBcbiAgICApO1xuICAgIHByb2plY3RDb3VudFN0b3JhZ2UucHVzaChuZXdQcm9qZWN0VG9kb0NvdW50ZXIpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RDb3VudFN0b3JhZ2UpO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlRm9ybSk7XG59IiwiaW1wb3J0IHVwZGF0ZVRvZG8gZnJvbSBcIi4vdXBkYXRlX3RvZG9cIjtcbmltcG9ydCBhZGRUb2RvIGZyb20gXCIuL2FkZF90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuICAgIGNvbnN0IHRvZG9JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICBjb25zdCBmb3JtID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGxldCBuYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG4gICAgbGV0IGRldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKTtcbiAgICBsZXQgZHVlZGF0ZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpO1xuICAgIGxldCBwcmlvcml0eSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcblxuICAgIG5hbWUudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdLnRleHRDb250ZW50O1xuICAgIGRldGFpbHMudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlscycpWzBdLnRleHRDb250ZW50O1xuICAgIGR1ZWRhdGUudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHVlZGF0ZScpWzBdLnRleHRDb250ZW50O1xuICAgIHByaW9yaXR5LnZhbHVlID0gdG9kb0lkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByaW9yaXR5JylbMF0udGV4dENvbnRlbnQ7XG4gICAgXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUb2RvKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHVwZGF0ZVRvZG8pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmlzaFRvZG8oKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibm9uZVwiKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm1CdG4oYnRuX3ZhbHVlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gYnRuX3ZhbHVlO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGJ0bl92YWx1ZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5UHJvcGVydHkocHJpb3JpdHlfdmFsdWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScsKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbnNbaV0pO1xuICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBwcmlvcml0eV92YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgZGl2LmFwcGVuZCh0aXRsZSwgc2VsZWN0KTtcblxuICAgIHJldHVybiBkaXY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5hbWUocHJvamVjdF92YWx1ZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3RfdmFsdWU7XG5cbiAgICByZXR1cm4gZGl2O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNpbWlsYXJQcm9wZXJ0aWVzKG5hbWVfdmFsdWUsIGRldGFpbHNfdmFsdWUsIGR1ZWRhdGVfdmFsdWUpIHtcbiAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9TaW1pbGFyUHJvcGVydGllcyA9IFtcbiAgICAgIHtcbiAgICAgICAgZm9yOiBcIm5hbWVcIixcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGlkOiBcIm5hbWVcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgIHZhbHVlOiBuYW1lX3ZhbHVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZm9yOiBcImRldGFpbHNcIixcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGlkOiBcImRldGFpbHNcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgIHZhbHVlOiBkZXRhaWxzX3ZhbHVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZm9yOiBcImR1ZWRhdGVcIixcbiAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgIGlkOiBcImR1ZWRhdGVcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgIHZhbHVlOiBkdWVkYXRlX3ZhbHVlLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvU2ltaWxhclByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1wiZm9yXCJdO1xuICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcImZvclwiXSk7XG5cbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICB0eXBlOiB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJ0eXBlXCJdLFxuICAgICAgICBpZDogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1wiaWRcIl0sXG4gICAgICAgIHJlcXVpcmVkOiB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJyZXF1aXJlZFwiXSxcbiAgICAgICAgdmFsdWU6IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcInZhbHVlXCJdLFxuICAgICAgfSk7XG5cbiAgICAgIGlubmVyRGl2LmFwcGVuZCh0aXRsZSwgaW5wdXQpO1xuICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRlckRpdjtcbn0iLCJpbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGRfdG9kb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVUb2RvKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgIGNvbnN0IGZvcm0gPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgdG9kb0lkID0gZm9ybS5jbGFzc0xpc3RbMV07XG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvSWQpO1xuICAgIGxldCBuYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWU7XG4gICAgbGV0IGRldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKS52YWx1ZTtcbiAgICBsZXQgZHVlZGF0ZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcblxuICAgIHRvZG8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hbWVcIilbMF0udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRvZG8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRldGFpbHNcIilbMF0udGV4dENvbnRlbnQgPVxuICAgICAgZGV0YWlscztcbiAgICB0b2RvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkdWVkYXRlXCIpWzBdLnRleHRDb250ZW50ID1cbiAgICAgIGR1ZWRhdGU7XG4gICAgdG9kby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJpb3JpdHlcIilbMF0udGV4dENvbnRlbnQgPVxuICAgICAgcHJpb3JpdHk7XG5cbiAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHVwZGF0ZVRvZG8pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVG9kbyk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKHRvZG9JZCk7XG5cbiAgICBmb3JtLnJlc2V0KCk7XG59IiwiaW1wb3J0IHsgcHJvamVjdENvdW50U3RvcmFnZSB9IGZyb20gXCIuL2NyZWF0ZV90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVRvZG9Db3VudChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3QgKyAnXycgKyhwcm9qZWN0Q291bnRTdG9yYWdlLmZpbmQoKGVsKSA9PiBlbC5wcm9qZWN0ID09PSBwcm9qZWN0KVsnY291bnQnXSkrKztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlX3Byb2plY3RcIjtcblxuY3JlYXRlUHJvamVjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==