import createTodoForm from './create_todo_form.js';
import addTodo from './add_todo.js';

createTodoForm('main','','','','','submit');

export class Todo {
    constructor(name, details, duedate, priority) {
        this.name = name;
        this.details = details;
        this.duedate = duedate;
        this.priority = priority;
    }
}

export default function createTodo() {
    const form = document.querySelector('form');
    form.addEventListener('submit', addTodo);
}