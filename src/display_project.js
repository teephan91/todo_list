export default function displayProject() {
    const todoContainer = document.querySelector('.todo_container');
    const projectDisplaying = document.getElementById(this.parentNode.className);

    for (const project of todoContainer.children) {
        project.style.display = 'none';
    }
    projectDisplaying.style.display = 'block';
}