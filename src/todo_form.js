Element.prototype.setAttributes = function(obj){ 
    for(var prop in obj) {
        this.setAttribute(prop, obj[prop]); 
    }
};

export default function createToDo() {
    const body = document.querySelector('body');
    const form = document.createElement('form');
    const ul = document.createElement('ul');

    const firstLi = document.createElement('li');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    titleLabel.setAttribute('for', 'title');
    const title = document.createElement('input');
    title.setAttributes({
        'type': 'text',
        'id': 'title',
        'autocomplete': 'off',
        'required': ''
    });
    firstLi.append(titleLabel, title);

    const secondLi = document.createElement('li');
    const detailsLabel = document.createElement('label');
    detailsLabel.textContent = 'Details';
    detailsLabel.setAttribute('for', 'details');
    const details = document.createElement('input');
    details.setAttributes({
        'type': 'text',
        'id': 'details',
        'autocomplete': 'off',
        'required': ''
    });
    secondLi.append(detailsLabel, details);

    const thirdLi = document.createElement('li');
    const duedateTitle = document.createElement('label');
    duedateTitle.textContent = 'Due Date';
    duedateTitle.setAttribute('for', 'duedate');
    const duedate = document.createElement('input');
    duedate.setAttributes({
        'type': 'date',
        'id': 'duedate',
        'required': ''
    });
    thirdLi.append(duedateTitle, duedate);

    const fourthLi = document.createElement('li');
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    const priority = document.createElement('input');
    priority.setAttributes({
        'type': 'text',
        'id': 'priority',
        'autocomplete': 'off',
        'required': ''
    });
    fourthLi.append(priorityLabel, priority);

    const fifthLi = document.createElement('li');
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.setAttribute('type', 'submit');
    fifthLi.appendChild(submitBtn);

    ul.append(firstLi, secondLi, thirdLi, fourthLi, fifthLi);
    form.appendChild(ul);
    body.appendChild(form);
}