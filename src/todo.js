import {default as toDoForm} from './todo_form.js';

toDoForm();

class ToDo {
    constructor(title, details, duedate, priority) {
        this.title = title;
        this.details = details;
        this.duedate = duedate;
        this.priority = priority;
    }
}

export default function createToDo() {
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