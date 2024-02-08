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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNpQzs7QUFFbEI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGlEQUFPO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJvRDs7QUFFckM7QUFDZiwyQkFBMkIsNkRBQW1CO0FBQzlDOzs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042Qzs7QUFFN0MsMkRBQWEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9hZGRfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYWRkX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2NyZWF0ZV9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jcmVhdGVfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY3JlYXRlX3RvZG9fZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZGVsZXRlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RlbGV0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kaXNwbGF5X3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2VkaXRfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZmluaXNoX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9fZm9ybV9idG4uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZG9fZm9ybV9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kb19mb3JtX3NpbWlsYXJfcHJvcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3VwZGF0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy91cGRhdGVfdG9kb19jb3VudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vY3JlYXRlX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpZDogXCJwcm9qZWN0XCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgIH0pO1xuXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgXCJzdWJtaXRcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RfZm9ybScpO1xuXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlQWRkUHJvamVjdEZvcm0pO1xuICAgIFxuICAgIGZvcm0uYXBwZW5kKGlucHV0LCBzdWJtaXRCdG4pO1xuICAgIG91dGVyRGl2LmFwcGVuZChmb3JtLCBkZWxldGVCdG4pO1xuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNyZWF0ZVRvZG8pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlKCk7XG59IiwiaW1wb3J0IGRlbGV0ZVRvZG8gZnJvbSAnLi9kZWxldGVfdG9kbyc7XG5pbXBvcnQgZmluaXNoVG9kbyBmcm9tICcuL2ZpbmlzaF90b2RvJztcbmltcG9ydCBlZGl0VG9kbyBmcm9tICcuL2VkaXRfdG9kbyc7XG5pbXBvcnQgdXBkYXRlVG9kb0NvdW50IGZyb20gJy4vdXBkYXRlX3RvZG9fY291bnQnO1xuaW1wb3J0IGNyZWF0ZVRvZG9Gb3JtIGZyb20gJy4vY3JlYXRlX3RvZG9fZm9ybSc7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXRhaWxzLCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgXG4gIGNvbnN0IGZvcm0gPSBjcmVhdGVUb2RvRm9ybShcIm1haW5cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJzdWJtaXRcIik7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFkZFRvZG8pO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gIGxldCBuYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWU7XG4gIGxldCBkZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbHNcIikudmFsdWU7XG4gIGxldCBkdWVkYXRlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyhuYW1lLCBkZXRhaWxzLCBkdWVkYXRlLCBwcmlvcml0eSk7XG5cbiAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB1cGRhdGVUb2RvQ291bnQodGhpcy5wYXJlbnROb2RlLmlkKSk7XG4gIGNvbnN0IHRvZG9DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdG9kb0NoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IG5ld1RvZG8ubmFtZTtcbiAgdG9kb05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYW1lJyk7XG4gIGNvbnN0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0RldGFpbHMudGV4dENvbnRlbnQgPSBuZXdUb2RvLmRldGFpbHM7XG4gIHRvZG9EZXRhaWxzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGV0YWlscycpO1xuICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gbmV3VG9kby5kdWVkYXRlO1xuICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZWRhdGUnKTtcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gbmV3VG9kby5wcmlvcml0eTtcbiAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHknKTtcbiAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgY29uc3QgZWRpdFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0VG9kb0J0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgXG4gIHRvZG9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaW5pc2hUb2RvKTtcbiAgZGVsZXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8pO1xuICBlZGl0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvKTtcbiAgICBcbiAgdG9kb0VsZW1lbnQuYXBwZW5kKHRvZG9DaGVja2JveCwgdG9kb05hbWUsIHRvZG9EZXRhaWxzLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCBkZWxldGVUb2RvQnRuLCBlZGl0VG9kb0J0bik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuXG4gIHRoaXMucmVzZXQoKTtcbiAgdGhpcy5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRfcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBidG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChidG4pO1xufSIsImltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gJy4vZGVsZXRlX3Byb2plY3QuanMnO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0IGZyb20gJy4vZGlzcGxheV9wcm9qZWN0LmpzJztcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vYWRkX3RvZG8uanMnO1xuXG5leHBvcnQgbGV0IHByb2plY3RDb3VudFN0b3JhZ2UgPSBbXTtcbmxldCBwcm9qZWN0Q291bnQgPSAwO1xuXG5leHBvcnQgY2xhc3MgcHJvamVjdFRvZG9Db3VudGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCBjb3VudCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSBzaWRlYmFyXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lclNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVByb2plY3QpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgXG5cbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXJTaWRlYmFyKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QudmFsdWU7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyU2lkZWJhci5hcHBlbmQocHJvamVjdE5hbWUsIGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIHByb2plY3RDb250YWluZXJTaWRlYmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGBwcm9qZWN0XyR7cHJvamVjdENvdW50fWApO1xuXG5cbiAgICAvLyBUaGlzIGlzIGZvciB0aGUgdG9kbyBjb250YWluZXJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvX2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lclRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2plY3RfJHtwcm9qZWN0Q291bnR9YCk7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC52YWx1ZTtcbiAgICBhZGRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9kb1wiO1xuICAgIHByb2plY3RDb250YWluZXJUb2RvQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvZG9CdG4pO1xuICAgIHByb2plY3RDb250YWluZXJUb2RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyVG9kb0NvbnRhaW5lcik7XG4gICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUZvcm0pO1xuXG4gICAgLy8gVGhpcyBpcyB0byBrZWVwIHRyYWNrIG9mIHByb2plY3QgY291bnRcbiAgICBwcm9qZWN0Q291bnQrKztcblxuICAgIGxldCBuZXdQcm9qZWN0VG9kb0NvdW50ZXIgPSBuZXcgcHJvamVjdFRvZG9Db3VudGVyKFxuICAgICAgIHByb2plY3RDb250YWluZXJTaWRlYmFyLmNsYXNzTmFtZSxcbiAgICAgICAwXG4gICAgKTtcbiAgICBwcm9qZWN0Q291bnRTdG9yYWdlLnB1c2gobmV3UHJvamVjdFRvZG9Db3VudGVyKTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgICBzaWRlQmFyLnJlbW92ZUNoaWxkKHRoaXMucGFyZW50Tm9kZSk7XG59IiwiaW1wb3J0IGNyZWF0ZVNpbWlsYXJQcm9wZXJ0aWVzIGZyb20gXCIuL3RvZG9fZm9ybV9zaW1pbGFyX3Byb3BzXCI7XG5pbXBvcnQgY3JlYXRlUHJpb3JpdHlQcm9wZXJ0eSBmcm9tIFwiLi90b2RvX2Zvcm1fcHJpb3JpdHlcIjtcbmltcG9ydCBjcmVhdGVUb2RvRm9ybUJ0biBmcm9tIFwiLi90b2RvX2Zvcm1fYnRuXCI7XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAob2JqKSB7IFxuICAgIGZvcih2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvcCwgb2JqW3Byb3BdKTsgXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm0oZm9ybV9jbGFzcywgbmFtZV92YWx1ZSwgZGV0YWlsc192YWx1ZSwgZHVlZGF0ZV92YWx1ZSwgcHJpb3JpdHlfdmFsdWUsIGJ0bl92YWx1ZSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmb3JtX2NsYXNzKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVTaW1pbGFyUHJvcGVydGllcyhuYW1lX3ZhbHVlLCBkZXRhaWxzX3ZhbHVlLCBkdWVkYXRlX3ZhbHVlKVxuICAgICk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVQcmlvcml0eVByb3BlcnR5KHByaW9yaXR5X3ZhbHVlKSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvRm9ybUJ0bihidG5fdmFsdWUpKTtcbiAgICBcbiAgICByZXR1cm4gZm9ybTtcbn0iLCJpbXBvcnQgeyBwcm9qZWN0Q291bnRTdG9yYWdlIH0gZnJvbSBcIi4vY3JlYXRlX3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlZFNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUpWzBdO1xuICAgIGNvbnN0IHByb2plY3REZWxldGVkVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3REZWxldGVkU2lkZWJhci5jbGFzc05hbWUpO1xuICAgIFxuICAgIHByb2plY3REZWxldGVkU2lkZWJhci5yZW1vdmUoKTtcbiAgICBwcm9qZWN0RGVsZXRlZFRvZG9Db250YWluZXIucmVtb3ZlKCk7XG5cbiAgICBwcm9qZWN0Q291bnRTdG9yYWdlLnNwbGljZShwcm9qZWN0Q291bnRTdG9yYWdlLmZpbmRJbmRleChlbCA9PiBlbC5wcm9qZWN0ID09PSBwcm9qZWN0RGVsZXRlZFRvZG9Db250YWluZXIuaWQpLCAxKTtcbn0gIiwiaW1wb3J0IHsgcHJvamVjdENvdW50U3RvcmFnZSB9IGZyb20gXCIuL2NyZWF0ZV90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgY29uc3QgcHJvamVjdFRoYXRIYXNUb2RvRGVsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcblxuICAgIHByb2plY3RDb3VudFN0b3JhZ2UuZmlsdGVyKGVsID0+IGVsLnByb2plY3QgPT09IHByb2plY3RUaGF0SGFzVG9kb0RlbGV0ZWQuaWQpWzBdLmNvdW50LS07XG5cbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3REaXNwbGF5aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdERpc3BsYXlpbmcpO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHRvZG9Db250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBwcm9qZWN0RGlzcGxheWluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0iLCJpbXBvcnQgdXBkYXRlVG9kbyBmcm9tIFwiLi91cGRhdGVfdG9kb1wiO1xuaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vYWRkX3RvZG9cIjtcbmltcG9ydCBjcmVhdGVUb2RvRm9ybSBmcm9tIFwiLi9jcmVhdGVfdG9kb19mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVUb2RvRm9ybShcIm1haW5cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJzdWJtaXRcIik7XG4gICAgY29uc3QgdG9kb0lkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgICB0b2RvSWQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcblxuICAgIGxldCBuYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG4gICAgbGV0IGRldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKTtcbiAgICBsZXQgZHVlZGF0ZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpO1xuICAgIGxldCBwcmlvcml0eSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcblxuICAgIG5hbWUudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdLnRleHRDb250ZW50O1xuICAgIGRldGFpbHMudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlscycpWzBdLnRleHRDb250ZW50O1xuICAgIGR1ZWRhdGUudmFsdWUgPSB0b2RvSWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHVlZGF0ZScpWzBdLnRleHRDb250ZW50O1xuICAgIHByaW9yaXR5LnZhbHVlID0gdG9kb0lkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByaW9yaXR5JylbMF0udGV4dENvbnRlbnQ7XG4gICAgXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUb2RvKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHVwZGF0ZVRvZG8pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmlzaFRvZG8oKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibm9uZVwiKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm1CdG4oYnRuX3ZhbHVlKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gYnRuX3ZhbHVlO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGJ0bl92YWx1ZSk7XG5cbiAgICByZXR1cm4gYnRuO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5UHJvcGVydHkocHJpb3JpdHlfdmFsdWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdwcmlvcml0eSc7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScsKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbnNbaV0pO1xuICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBwcmlvcml0eV92YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgZGl2LmFwcGVuZCh0aXRsZSwgc2VsZWN0KTtcblxuICAgIHJldHVybiBkaXY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2ltaWxhclByb3BlcnRpZXMobmFtZV92YWx1ZSwgZGV0YWlsc192YWx1ZSwgZHVlZGF0ZV92YWx1ZSkge1xuICAgIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb1NpbWlsYXJQcm9wZXJ0aWVzID0gW1xuICAgICAge1xuICAgICAgICBmb3I6IFwibmFtZVwiLFxuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgaWQ6IFwibmFtZVwiLFxuICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgdmFsdWU6IG5hbWVfdmFsdWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmb3I6IFwiZGV0YWlsc1wiLFxuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgaWQ6IFwiZGV0YWlsc1wiLFxuICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgdmFsdWU6IGRldGFpbHNfdmFsdWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmb3I6IFwiZHVlZGF0ZVwiLFxuICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgaWQ6IFwiZHVlZGF0ZVwiLFxuICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgdmFsdWU6IGR1ZWRhdGVfdmFsdWUsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9TaW1pbGFyUHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJmb3JcIl07XG4gICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1wiZm9yXCJdKTtcblxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHR5cGU6IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcInR5cGVcIl0sXG4gICAgICAgIGlkOiB0b2RvU2ltaWxhclByb3BlcnRpZXNbaV1bXCJpZFwiXSxcbiAgICAgICAgcmVxdWlyZWQ6IHRvZG9TaW1pbGFyUHJvcGVydGllc1tpXVtcInJlcXVpcmVkXCJdLFxuICAgICAgICB2YWx1ZTogdG9kb1NpbWlsYXJQcm9wZXJ0aWVzW2ldW1widmFsdWVcIl0sXG4gICAgICB9KTtcblxuICAgICAgaW5uZXJEaXYuYXBwZW5kKHRpdGxlLCBpbnB1dCk7XG4gICAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChpbm5lckRpdik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dGVyRGl2O1xufSIsImltcG9ydCBhZGRUb2RvIGZyb20gXCIuL2FkZF90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVRvZG8oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgY29uc3QgZm9ybSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCB0b2RvSWQgPSBmb3JtLmNsYXNzTGlzdFsxXTtcbiAgICBsZXQgdG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9JZCk7XG4gICAgbGV0IG5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcbiAgICBsZXQgZGV0YWlscyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxzXCIpLnZhbHVlO1xuICAgIGxldCBkdWVkYXRlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIikudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgdG9kby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmFtZVwiKVswXS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdG9kby5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGV0YWlsc1wiKVswXS50ZXh0Q29udGVudCA9XG4gICAgICBkZXRhaWxzO1xuICAgIHRvZG8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImR1ZWRhdGVcIilbMF0udGV4dENvbnRlbnQgPVxuICAgICAgZHVlZGF0ZTtcbiAgICB0b2RvLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmlvcml0eVwiKVswXS50ZXh0Q29udGVudCA9XG4gICAgICBwcmlvcml0eTtcblxuICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdXBkYXRlVG9kbyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUb2RvKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUodG9kb0lkKTtcblxuICBmb3JtLnJlc2V0KCk7XG4gIGZvcm0ucmVtb3ZlKCk7XG59IiwiaW1wb3J0IHsgcHJvamVjdENvdW50U3RvcmFnZSB9IGZyb20gXCIuL2NyZWF0ZV90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVRvZG9Db3VudChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3QgKyAnXycgKyhwcm9qZWN0Q291bnRTdG9yYWdlLmZpbmQoKGVsKSA9PiBlbC5wcm9qZWN0ID09PSBwcm9qZWN0KVsnY291bnQnXSkrKztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlX3Byb2plY3RcIjtcblxuY3JlYXRlUHJvamVjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==