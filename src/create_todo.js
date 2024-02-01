import createTodoForm from './create_todo_form.js';
import addTodo from './add_todo.js';
import deleteProject from './delete_project.js';

export let projectCountStorage = [];
let projectCount = 0;

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
    const deleteProjectBtn = document.createElement('button');
    const project = document.querySelector('#project');
    
    container.setAttribute('id', `project_${projectCount}`);
    let newProjectTodoCounter = new projectTodoCounter(`project_${projectCount}`, 0);
    projectCountStorage.push(newProjectTodoCounter);
    projectCount++;

    deleteProjectBtn.textContent = 'X';
    deleteProjectBtn.addEventListener('click', deleteProject);
    
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
    container.append(deleteProjectBtn, form);
    body.appendChild(container);

    this.reset();
    body.removeChild(this);
}