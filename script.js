const items = document.getElementById('items');
const input = document.getElementById('input');
const edit = document.getElementById('edit');
const remove = document.getElementById('remove');

let n = 0;

const addTask = () =>{
    const tasks = document.createElement("DIV");
    tasks.classList.add('item');

    const taskName = document.createElement("SPAN");
    taskName.classList.add('task-n');
    taskName.textContent = input.value;
    input.value='';

    const btnContainer = document.createElement("DIV");
    btnContainer.classList.add('btn');

    const create = document.createElement("ion-icon");
    create.setAttribute("name", "create");
    create.setAttribute("id","edit");
    create.setAttribute("id","edit");

    const trash = document.createElement("ion-icon");
    trash.setAttribute("name", "trash");
    trash.setAttribute("id","remove");

    btnContainer.appendChild(create);
    btnContainer.appendChild(trash);
    tasks.appendChild(taskName);
    tasks.appendChild(btnContainer);
    items.appendChild(tasks);
}

edit.addEventListener("click",e=>{
    if (e.target.getAttribute("name") == "create") {
        document.querySelector('.task-n').setAttribute("contenteditable", "true");
        e.target.setAttribute("name", "repeat");
    } else {
        e.target.setAttribute("name", "create");
        document.querySelector('.task-n').setAttribute("contenteditable", "false");
    }
})