const items = document.getElementById('items');
const input = document.getElementById('input');

const addTask = () =>{
    const tasks = document.createElement("DIV");
    tasks.classList.add('item');

    const taskName = document.createElement("SPAN");
    taskName.textContent = input.value;
    input.value='';

    const btnContainer = document.createElement("DIV");
    btnContainer.classList.add('btn');

    const create = document.createElement("ion-icon");
    create.setAttribute("name", "create");
    create.setAttribute("onClick", () => console.log('testing'));

    const trash = document.createElement("ion-icon");
    trash.setAttribute("name", "trash");

    btnContainer.appendChild(create);
    btnContainer.appendChild(trash);
    tasks.appendChild(taskName);
    tasks.appendChild(btnContainer);
    items.appendChild(tasks);
}

const editTask = () =>{
    
}