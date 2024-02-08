import createTodo from "./create_todo";

export default function addProject() {
    const sideBar = document.querySelector(".sidebar");
    const outerDiv = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submitBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    
    input.setAttributes({
        type: "text",
        id: "project",
        required: "",
    });

    submitBtn.textContent = "Submit";
    submitBtn.setAttribute('type', "submit");
    form.setAttribute('id', 'project_form');

    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click', removeAddProjectForm);
    
    form.append(input, submitBtn);
    outerDiv.append(form, deleteBtn);
    sideBar.appendChild(outerDiv);

    form.addEventListener("submit", createTodo);
}

function removeAddProjectForm() {
    this.parentNode.remove();
}