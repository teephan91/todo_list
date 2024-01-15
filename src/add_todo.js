import { Todo } from './create_todo';
import deleteTodo from './delete_todo';

export default function addTodo(event) {
  event.preventDefault();

  const mainContainer = document.getElementById("container");
  let name = document.querySelector("#name").value;
  let details = document.querySelector("#details").value;
  let priority = document.querySelector("#priority").value;
  let duedate = document.querySelector("#duedate").value;

  let newTodo = new Todo(name, details, duedate, priority);

  const todoElement = document.createElement("div");
  const todoName = document.createElement("div");
  todoName.textContent = newTodo.name;
  const todoDetails = document.createElement("div");
  todoDetails.textContent = newTodo.details;
  const todoDueDate = document.createElement("div");
  todoDueDate.textContent = newTodo.duedate;
  const todoPriority = document.createElement("div");
  todoPriority.textContent = newTodo.priority;
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.textContent = "X";
    
  deleteTodoBtn.addEventListener('click', deleteTodo);
    
  todoElement.append(todoName, todoDetails, todoDueDate, todoPriority, deleteTodoBtn);
  mainContainer.appendChild(todoElement);

  this.reset();
}
