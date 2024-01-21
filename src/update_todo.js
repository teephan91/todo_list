import addTodo from "./add_todo";

export default function updateTodo(event) {
    event.preventDefault();

    const form = document.getElementById("main");
    const todoId = form.className;
    let todo = document.getElementById(todoId);
    let name = document.querySelector("#name").value;
    let details = document.querySelector("#details").value;
    let duedate = document.querySelector("#duedate").value;
    let priority = document.querySelector("#priority").value;

    todo.getElementsByClassName("name")[0].textContent = name;
    todo.getElementsByClassName("details")[0].textContent =
      details;
    todo.getElementsByClassName("duedate")[0].textContent =
      duedate;
    todo.getElementsByClassName("priority")[0].textContent =
      priority;

    form.removeEventListener('submit', updateTodo);
    form.addEventListener('submit', addTodo);
    form.removeAttribute('class');

    form.reset();
}