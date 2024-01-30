import updateTodo from "./update_todo";
import addTodo from "./add_todo";

export default function editTodo() {
    const todoId = document.getElementById(this.parentNode.id);
    const mainContainer = document.getElementById(this.parentNode.parentNode.id);
    const form = mainContainer.querySelector('.main');
    let name = mainContainer.querySelector("#name");
    let details = mainContainer.querySelector("#details");
    let duedate = mainContainer.querySelector("#duedate");
    let priority = mainContainer.querySelector("#priority");

    name.value = todoId.getElementsByClassName('name')[0].textContent;
    details.value = todoId.getElementsByClassName('details')[0].textContent;
    duedate.value = todoId.getElementsByClassName('duedate')[0].textContent;
    priority.value = todoId.getElementsByClassName('priority')[0].textContent;
    
    form.classList.add(this.parentNode.id);
    form.removeEventListener('submit', addTodo);
    form.addEventListener('submit', updateTodo);
}