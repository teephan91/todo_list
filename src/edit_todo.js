import createTodoForm from "./create_todo_form";
import updateTodo from "./update_todo";

export default function editTodo() {
    const todoId = document.getElementById(this.parentNode.id);
    createTodoForm(
        'form_' + this.parentNode.id,
        todoId.getElementsByClassName('name')[0].textContent,
        todoId.getElementsByClassName('details')[0].textContent,
        todoId.getElementsByClassName('duedate')[0].textContent, 
        todoId.getElementsByClassName('priority')[0].textContent, 
        'submit'
    );
}