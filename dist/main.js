/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDetails)
/* harmony export */ });
function createDetails() {
    let details = prompt('Details?');
    return details;
}

/***/ }),

/***/ "./src/duedate.js":
/*!************************!*\
  !*** ./src/duedate.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDueDate)
/* harmony export */ });
function createDueDate() {
    let dueDate = prompt('Due Date?');
    return dueDate;
}

/***/ }),

/***/ "./src/priority.js":
/*!*************************!*\
  !*** ./src/priority.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPriority)
/* harmony export */ });
function createPriority() {
    let priority = prompt('Priority?');
    return priority;
}

/***/ }),

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTitle)
/* harmony export */ });
function createTitle() {
    let title = prompt('Title?');
    return title;
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.js */ "./src/title.js");
/* harmony import */ var _details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.js */ "./src/details.js");
/* harmony import */ var _duedate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duedate.js */ "./src/duedate.js");
/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priority.js */ "./src/priority.js");





class ToDo {
    constructor(title, details, duedate, priority) {
        this.title = title;
        this.details = details;
        this.duedate = duedate;
        this.priority = priority;
    }
}

function createTodo() {
    const mainContainer = document.getElementById('container');
    const toDoElement = document.createElement('div');
    const toDo = new ToDo((0,_title_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), (0,_details_js__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_duedate_js__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_priority_js__WEBPACK_IMPORTED_MODULE_3__["default"])());

    const toDoTitle = document.createElement('div');
    toDoTitle.textContent = toDo.title;
    const toDoDetails = document.createElement('div');
    toDoDetails.textContent = toDo.details;
    const toDoDueDate = document.createElement('div');
    toDoDueDate.textContent = toDo.duedate;
    const toDoPriority = document.createElement('div');
    toDoPriority.textContent = toDo.priority;

    toDoElement.append(toDoTitle, toDoDetails, toDoDueDate, toDoPriority);

    mainContainer.appendChild(toDoElement);
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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


(0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIcUM7QUFDSTtBQUNBO0FBQ0U7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFXLElBQUksdURBQWEsSUFBSSx1REFBYSxJQUFJLHdEQUFjOztBQUV6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQyxvREFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2R1ZWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90aXRsZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGV0YWlscygpIHtcbiAgICBsZXQgZGV0YWlscyA9IHByb21wdCgnRGV0YWlscz8nKTtcbiAgICByZXR1cm4gZGV0YWlscztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEdWVEYXRlKCkge1xuICAgIGxldCBkdWVEYXRlID0gcHJvbXB0KCdEdWUgRGF0ZT8nKTtcbiAgICByZXR1cm4gZHVlRGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eSgpIHtcbiAgICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoJ1ByaW9yaXR5PycpO1xuICAgIHJldHVybiBwcmlvcml0eTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSBwcm9tcHQoJ1RpdGxlPycpO1xuICAgIHJldHVybiB0aXRsZTtcbn0iLCJpbXBvcnQgY3JlYXRlVGl0bGUgZnJvbSAnLi90aXRsZS5qcyc7XG5pbXBvcnQgY3JlYXRlRGV0YWlscyBmcm9tICcuL2RldGFpbHMuanMnO1xuaW1wb3J0IGNyZWF0ZUR1ZURhdGUgZnJvbSAnLi9kdWVkYXRlLmpzJztcbmltcG9ydCBjcmVhdGVQcmlvcml0eSBmcm9tICcuL3ByaW9yaXR5LmpzJztcblxuY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbygpIHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRvRG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9EbyA9IG5ldyBUb0RvKGNyZWF0ZVRpdGxlKCksIGNyZWF0ZURldGFpbHMoKSwgY3JlYXRlRHVlRGF0ZSgpLCBjcmVhdGVQcmlvcml0eSgpKTtcblxuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGU7XG4gICAgY29uc3QgdG9Eb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvRGV0YWlscy50ZXh0Q29udGVudCA9IHRvRG8uZGV0YWlscztcbiAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID0gdG9Eby5kdWVkYXRlO1xuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IHRvRG8ucHJpb3JpdHk7XG5cbiAgICB0b0RvRWxlbWVudC5hcHBlbmQodG9Eb1RpdGxlLCB0b0RvRGV0YWlscywgdG9Eb0R1ZURhdGUsIHRvRG9Qcmlvcml0eSk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9FbGVtZW50KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5cbmNyZWF0ZVRvZG8oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=