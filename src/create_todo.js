import createTodoForm from './create_todo_form.js';
import addTodo from './add_todo.js';

export let projectCountStorage = [];
let projectCount = 1;

class projectTodoCounter {
    constructor(project, count) {
        this.project = project;
        this.count = count;
    }
}

export default function createTodo(event) {
    event.preventDefault();

    const body = document.querySelector('body');
    const container = document.createElement('div');
    const project = document.querySelector('#project');
    
    container.setAttribute('id', `project_${projectCount}`);
    let newProjectTodoCounter = new projectTodoCounter(`project_${projectCount}`, 1);
    projectCountStorage.push(newProjectTodoCounter);
    projectCount++;
    
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