import {default as toDoForm} from './todo_form.js';

toDoForm();

class ToDo {
    constructor(name, details, duedate, priority) {
        this.name = name;
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
    let name = document.querySelector('#name').value;
    let details = document.querySelector('#details').value;
    let priority = document.querySelector('#priority').value;
    let duedate = document.querySelector("#duedate").value;

    let newToDo = new ToDo(name, details, duedate, priority);

    const toDoElement = document.createElement('div');
    const toDoName = document.createElement('div');
    toDoName.textContent = newToDo.name;
    const toDoDetails = document.createElement('div');
    toDoDetails.textContent = newToDo.details;
    const toDoDueDate = document.createElement('div');
    toDoDueDate.textContent = newToDo.duedate;
    const toDoPriority = document.createElement('div');
    toDoPriority.textContent = newToDo.priority;

    toDoElement.append(toDoName, toDoDetails, toDoDueDate, toDoPriority);

    mainContainer.appendChild(toDoElement);

    this.reset();
}