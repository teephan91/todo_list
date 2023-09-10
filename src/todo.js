import createTitle from './title.js';
import createDetails from './details.js';
import createDueDate from './duedate.js';
import createPriority from './priority.js';

class ToDo {
    constructor(title, details, duedate, priority) {
        this.title = title;
        this.details = details;
        this.duedate = duedate;
        this.priority = priority;
    }
}

export default function createTodo() {
    const mainContainer = document.getElementById('container');
    const toDoElement = document.createElement('div');
    const toDo = new ToDo(createTitle(), createDetails(), createDueDate(), createPriority());

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