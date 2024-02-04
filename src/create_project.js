import addProject from "./add_project";

export default function createProject() {
    const sideBar = document.querySelector(".sidebar");
    const btn = document.createElement('button');

    btn.textContent = 'Add Project';
    btn.addEventListener('click', addProject);

    sideBar.appendChild(btn);
}