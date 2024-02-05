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

    const sideBar = document.querySelector('.sidebar');
    const projectContainer = document.createElement('div');
    const projectName = document.createElement("p");
    const deleteProjectBtn = document.createElement("button");
    const todoContainer = document.querySelector('.todo_container');
    const container = document.createElement('div');
    const project = document.querySelector('#project');

    sideBar.appendChild(projectContainer);
    projectName.textContent = project.value;
    deleteProjectBtn.textContent = 'X';
    deleteProjectBtn.addEventListener("click", deleteProject);
    projectContainer.append(projectName, deleteProjectBtn);
    projectContainer.setAttribute("class", `project_${projectCount}`);
    
    container.setAttribute('id', `project_${projectCount}`);
    let newProjectTodoCounter = new projectTodoCounter(`project_${projectCount}`, 0);
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
    todoContainer.appendChild(container);

    this.reset();
    sideBar.removeChild(this);
}