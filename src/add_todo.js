import { Todo } from './create_todo';
import deleteTodo from './delete_todo';
import finishTodo from './finish_todo';

export default function addTodo(event) {
  event.preventDefault();

  const mainContainer = document.getElementById("container");
  let name = document.querySelector("#name").value;
  let details = document.querySelector("#details").value;
  let duedate = document.querySelector("#duedate").value;
  let priority = document.querySelector("#priority").value;

  let newTodo = new Todo(name, details, duedate, priority);

  const todoElement = document.createElement("div");
  const todoCheckbox = document.createElement("input");
  todoCheckbox.setAttribute("type", "checkbox");
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
   
  todoCheckbox.addEventListener('change', finishTodo);
  deleteTodoBtn.addEventListener('click', deleteTodo);
    
  todoElement.append(todoCheckbox, todoName, todoDetails, todoDueDate, todoPriority, deleteTodoBtn);
  mainContainer.appendChild(todoElement);

  this.reset();
}
