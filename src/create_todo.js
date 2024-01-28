import createTodoForm from './create_todo_form.js';
import addTodo from './add_todo.js';

let projectCounter = 1;

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
    const container = document.createElement('div');
    const project = document.querySelector('#project');
    
    container.setAttribute('id', `project_${projectCounter}`);
    projectCounter++;
    
    const form = createTodoForm(
      "main",
      project.value,
      "",
      "",
      "",
      "",
      "submit"
    );
    form.addEventListener('submit', addTodo);
    container.appendChild(form);
    body.appendChild(container);

    this.reset();
    body.removeChild(this);
}