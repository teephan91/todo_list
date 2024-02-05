import deleteProject from './delete_project.js';
import displayProject from './display_project.js';

export let projectCountStorage = [];
let projectCount = 0;

export class projectTodoCounter {
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
    projectName.addEventListener('click', displayProject);
    const deleteProjectBtn = document.createElement("button");
   

    sideBar.appendChild(projectContainer);
    projectName.textContent = project.value;
    deleteProjectBtn.textContent = 'X';
    deleteProjectBtn.addEventListener("click", deleteProject);
    projectContainer.append(projectName, deleteProjectBtn);
    projectContainer.setAttribute("class", `project_${projectCount}`);
    projectCount++;

    let newProjectTodoCounter = new projectTodoCounter(
       projectContainer.className,
       0
     );
    projectCountStorage.push(newProjectTodoCounter);
    console.log(projectCountStorage);

    this.reset();
    sideBar.removeChild(this);
}