Element.prototype.setAttributes = function(obj){ 
    for(var prop in obj) {
        this.setAttribute(prop, obj[prop]); 
    }
};

export default function createTodo() {
    const body = document.querySelector('body');
    const form = document.createElement('form');
    const ul = document.createElement('ul');
    const todoSimilarProperties = [
      {
        for: "name",
        type: "text",
        id: "name",
        required: "",
      },
      {
        for: "details",
        type: "text",
        id: "details",
        required: "",
      },
      {
        for: "priority",
        type: "text",
        id: "priority",
        required: "",
      },
      {
        for: "duedate",
        type: "date",
        id: "duedate",
        required: "",
      },
    ];

    for (let i = 0; i < todoSimilarProperties.length; i++) {
        const li = document.createElement('li');
        const title = document.createElement('label');
        const input = document.createElement('input');

        title.textContent = todoSimilarProperties[i]['for'];
        title.setAttribute('for', todoSimilarProperties[i]['for']);

        input.setAttributes({
            type: todoSimilarProperties[i]["type"],
            id: todoSimilarProperties[i]["id"],
            required: todoSimilarProperties[i]["required"],
        });

        li.append(title, input);
        ul.appendChild(li);
    }

    const submitLi = document.createElement("li");
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("type", "submit");
    submitLi.appendChild(submitBtn);

    ul.append(submitLi);
    form.appendChild(ul);
    body.appendChild(form);
}