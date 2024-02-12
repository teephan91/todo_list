export default function createTodoFormBtn(btn_value) {
    const div = document.createElement('div');
    const submitBtn = document.createElement('button');
    const closeBtn = document.createElement('button');
    
    submitBtn.textContent = btn_value;
    submitBtn.setAttribute('type', btn_value);

    closeBtn.textContent = 'X';
    closeBtn.setAttribute('type', 'button');
    closeBtn.style.backgroundColor = 'maroon';
    closeBtn.addEventListener('click', removeAddTodoForm);

    div.append(submitBtn, closeBtn);

    return div;
}

function removeAddTodoForm() {
    this.parentNode.parentNode.remove();
}