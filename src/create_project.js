import addProject from "./add_project";

export default function createProject() {
    const body = document.querySelector("body");
    const btn = document.createElement('button');

    btn.textContent = 'Add Project';
    btn.addEventListener('click', addProject);

    body.appendChild(btn);
}