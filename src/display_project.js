import createForm from "./add_todo";

export default function displayProject() {
    const todoContainer = document.querySelector('.todo_container');
    todoContainer.innerHTML = '';

    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const btn = document.createElement('button');

    projectContainer.setAttribute('id', this.parentNode.className);
    projectTitle.textContent = this.textContent;
    btn.textContent = 'Add Todo';
    projectContainer.append(projectTitle, btn);
    todoContainer.appendChild(projectContainer);

    btn.addEventListener('click', createForm);
}