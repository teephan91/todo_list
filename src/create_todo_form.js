import createSimilarProperties from "./todo_form_similar_props";
import createPriorityProperty from "./todo_form_priority";

Element.prototype.setAttributes = function (obj) { 
    for(var prop in obj) {
        this.setAttribute(prop, obj[prop]); 
    }
};

export default function createTodoForm() {
    const body = document.querySelector('body');
    const form = document.createElement('form');
    const div = document.createElement('div');
  
    div.appendChild(createSimilarProperties());
    div.appendChild(createPriorityProperty());

    const submitLi = document.createElement("li");
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("type", "submit");
    submitLi.appendChild(submitBtn);

    div.append(submitLi);
    form.appendChild(div);
    body.appendChild(form);
}