import createTodoForm from "./create_todo_form";

export default function editTodo() {
    const todoId = document.getElementById(this.parentNode.id);
    createTodoForm(
        todoId.getElementsByClassName('name')[0].textContent,
        todoId.getElementsByClassName('details')[0].textContent,
        todoId.getElementsByClassName('duedate')[0].textContent, 
        todoId.getElementsByClassName('priority')[0].textContent, 
        'submit'
    );
}