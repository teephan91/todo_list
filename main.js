/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createToDo)
/* harmony export */ });
/* harmony import */ var _todo_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_form.js */ "./src/todo_form.js");


(0,_todo_form_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

class ToDo {
    constructor(title, details, duedate, priority) {
        this.title = title;
        this.details = details;
        this.duedate = duedate;
        this.priority = priority;
    }
}

function createToDo() {
    const form = document.querySelector('form');
    form.addEventListener('submit', addToDo);
}

function addToDo(event) {
    event.preventDefault();

    const mainContainer = document.getElementById('container');
    let title = document.querySelector('#title').value;
    let details = document.querySelector('#details').value;
    let duedate = document.querySelector('#duedate').value;
    let priority = document.querySelector('#priority').value;

    let newToDo = new ToDo(title, details, duedate, priority);

    const toDoElement = document.createElement('div');
    const toDoTitle = document.createElement('div');
    toDoTitle.textContent = newToDo.title;
    const toDoDetails = document.createElement('div');
    toDoDetails.textContent = newToDo.details;
    const toDoDueDate = document.createElement('div');
    toDoDueDate.textContent = newToDo.duedate;
    const toDoPriority = document.createElement('div');
    toDoPriority.textContent = newToDo.priority;

    toDoElement.append(toDoTitle, toDoDetails, toDoDueDate, toDoPriority);

    mainContainer.appendChild(toDoElement);

    this.reset();
}

/***/ }),

/***/ "./src/todo_form.js":
/*!**************************!*\
  !*** ./src/todo_form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createToDo)
/* harmony export */ });
Element.prototype.setAttributes = function(obj){ 
    for(var prop in obj) {
        this.setAttribute(prop, obj[prop]); 
    }
};

function createToDo() {
    const body = document.querySelector('body');
    const form = document.createElement('form');
    const ul = document.createElement('ul');

    const firstLi = document.createElement('li');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    titleLabel.setAttribute('for', 'title');
    const title = document.createElement('input');
    title.setAttributes({
        'type': 'text',
        'id': 'title',
        'autocomplete': 'off',
        'required': ''
    });
    firstLi.append(titleLabel, title);

    const secondLi = document.createElement('li');
    const detailsLabel = document.createElement('label');
    detailsLabel.textContent = 'Details';
    detailsLabel.setAttribute('for', 'details');
    const details = document.createElement('input');
    details.setAttributes({
        'type': 'text',
        'id': 'details',
        'autocomplete': 'off',
        'required': ''
    });
    secondLi.append(detailsLabel, details);

    const thirdLi = document.createElement('li');
    const duedateTitle = document.createElement('label');
    duedateTitle.textContent = 'Due Date';
    duedateTitle.setAttribute('for', 'duedate');
    const duedate = document.createElement('input');
    duedate.setAttributes({
        'type': 'date',
        'id': 'duedate',
        'required': ''
    });
    thirdLi.append(duedateTitle, duedate);

    const fourthLi = document.createElement('li');
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    const priority = document.createElement('input');
    priority.setAttributes({
        'type': 'text',
        'id': 'priority',
        'autocomplete': 'off',
        'required': ''
    });
    fourthLi.append(priorityLabel, priority);

    const fifthLi = document.createElement('li');
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.setAttribute('type', 'submit');
    fifthLi.appendChild(submitBtn);

    ul.append(firstLi, secondLi, thirdLi, fourthLi, fifthLi);
    form.appendChild(ul);
    body.appendChild(form);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7O0FBRW5ELHlEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN2RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsb0RBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVmYXVsdCBhcyB0b0RvRm9ybX0gZnJvbSAnLi90b2RvX2Zvcm0uanMnO1xuXG50b0RvRm9ybSgpO1xuXG5jbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZHVlZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb0RvKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRUb0RvKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9EbyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xuICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKS52YWx1ZTtcbiAgICBsZXQgZHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJykudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG5cbiAgICBsZXQgbmV3VG9EbyA9IG5ldyBUb0RvKHRpdGxlLCBkZXRhaWxzLCBkdWVkYXRlLCBwcmlvcml0eSk7XG5cbiAgICBjb25zdCB0b0RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IG5ld1RvRG8udGl0bGU7XG4gICAgY29uc3QgdG9Eb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b0RvRGV0YWlscy50ZXh0Q29udGVudCA9IG5ld1RvRG8uZGV0YWlscztcbiAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID0gbmV3VG9Eby5kdWVkYXRlO1xuICAgIGNvbnN0IHRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IG5ld1RvRG8ucHJpb3JpdHk7XG5cbiAgICB0b0RvRWxlbWVudC5hcHBlbmQodG9Eb1RpdGxlLCB0b0RvRGV0YWlscywgdG9Eb0R1ZURhdGUsIHRvRG9Qcmlvcml0eSk7XG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXQoKTtcbn0iLCJFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24ob2JqKXsgXG4gICAgZm9yKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShwcm9wLCBvYmpbcHJvcF0pOyBcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb0RvKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBmaXJzdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ2lkJzogJ3RpdGxlJyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLFxuICAgICAgICAncmVxdWlyZWQnOiAnJ1xuICAgIH0pO1xuICAgIGZpcnN0TGkuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlKTtcblxuICAgIGNvbnN0IHNlY29uZExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBkZXRhaWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRldGFpbHNMYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzJztcbiAgICBkZXRhaWxzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGV0YWlscycpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAnaWQnOiAnZGV0YWlscycsXG4gICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJyxcbiAgICAgICAgJ3JlcXVpcmVkJzogJydcbiAgICB9KTtcbiAgICBzZWNvbmRMaS5hcHBlbmQoZGV0YWlsc0xhYmVsLCBkZXRhaWxzKTtcblxuICAgIGNvbnN0IHRoaXJkTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGR1ZWRhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlZGF0ZVRpdGxlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICBkdWVkYXRlVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlZGF0ZScpO1xuICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZWRhdGUuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICd0eXBlJzogJ2RhdGUnLFxuICAgICAgICAnaWQnOiAnZHVlZGF0ZScsXG4gICAgICAgICdyZXF1aXJlZCc6ICcnXG4gICAgfSk7XG4gICAgdGhpcmRMaS5hcHBlbmQoZHVlZGF0ZVRpdGxlLCBkdWVkYXRlKTtcblxuICAgIGNvbnN0IGZvdXJ0aExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ2lkJzogJ3ByaW9yaXR5JyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLFxuICAgICAgICAncmVxdWlyZWQnOiAnJ1xuICAgIH0pO1xuICAgIGZvdXJ0aExpLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eSk7XG5cbiAgICBjb25zdCBmaWZ0aExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGZpZnRoTGkuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIHVsLmFwcGVuZChmaXJzdExpLCBzZWNvbmRMaSwgdGhpcmRMaSwgZm91cnRoTGksIGZpZnRoTGkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodWwpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tICcuL3RvZG8uanMnO1xuXG5jcmVhdGVUb0RvKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9