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
    const projectList = document.createElement('div');
    const todoContainer = document.querySelector('.todo_container');
    const container = document.createElement('div');
    const deleteProjectBtn = document.createElement('button');
    const project = document.querySelector('#project');

    sideBar.appendChild(projectList);
    let projectName = document.createElement('p');
    projectName.textContent = project.value;
    projectName.setAttribute('class', `project_${projectCount}`);
    projectList.appendChild(projectName);
    
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
    todoContainer.appendChild(container);

    this.reset();
    sideBar.removeChild(this);
}