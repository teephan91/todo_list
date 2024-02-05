import { projectCountStorage } from "./create_todo";

export default function deleteProject() {
    const projectDeletedSidebar = document.getElementsByClassName(this.parentNode.className)[0];
    const projectDeletedTodoContainer = document.getElementById(projectDeletedSidebar.className);
    
    projectDeletedSidebar.remove();
    projectDeletedTodoContainer.remove();

    projectCountStorage.splice(projectCountStorage.findIndex(el => el.project === projectDeletedTodoContainer.id), 1);
} 