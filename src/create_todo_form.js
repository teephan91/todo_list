import createSimilarProperties from "./todo_form_similar_props";
import createPriorityProperty from "./todo_form_priority";
import createTodoFormBtn from "./todo_form_btn";

Element.prototype.setAttributes = function (obj) { 
    for(var prop in obj) {
        this.setAttribute(prop, obj[prop]); 
    }
};

export default function createTodoForm(btn_value) {
    const body = document.querySelector('body');
    const form = document.createElement('form');
    const div = document.createElement('div');
  
    div.appendChild(createSimilarProperties());
    div.appendChild(createPriorityProperty());
    div.appendChild(createTodoFormBtn(btn_value));

    form.appendChild(div);
    body.appendChild(form);
}