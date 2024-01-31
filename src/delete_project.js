import { projectCountStorage } from "./create_todo";

export default function deleteProject() {
    const projectToBeDeleted = document.getElementById(this.parentNode.id);
    
    projectToBeDeleted.remove();

    projectCountStorage.splice(projectCountStorage.findIndex(el => el.project === projectToBeDeleted.id), 1);

    console.log(projectCountStorage);
} 