import updateTodo from "./update_todo";
import addTodo from "./add_todo";

export default function editTodo() {
    const todoId = document.getElementById(this.parentNode.id);
    const form = document.getElementById('main');
    let name = document.querySelector("#name");
    let details = document.querySelector("#details");
    let duedate = document.querySelector("#duedate");
    let priority = document.querySelector("#priority");

    name.value = todoId.getElementsByClassName('name')[0].textContent;
    details.value = todoId.getElementsByClassName('details')[0].textContent;
    duedate.value = todoId.getElementsByClassName('duedate')[0].textContent;
    priority.value = todoId.getElementsByClassName('priority')[0].textContent;
    
    form.setAttribute('class', this.parentNode.id);
    form.removeEventListener('submit', addTodo);
    form.addEventListener('submit', updateTodo);
}