import createTodoForm from './create_todo_form.js';
import addTodo from './add_todo.js';

export class Todo {
    constructor(name, details, duedate, priority) {
        this.name = name;
        this.details = details;
        this.duedate = duedate;
        this.priority = priority;
    }
}

export default function createTodo(event) {
    event.preventDefault();

    const body = document.querySelector('body');
    const project = document.querySelector('#project');
    createTodoForm('main', project.value, '', '', '', '', 'submit');

    const form = document.getElementById("main");
    form.addEventListener('submit', addTodo);

    this.reset();
    body.removeChild(this);
}