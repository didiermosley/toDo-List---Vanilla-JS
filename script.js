"use strict";
const items = document.getElementById('items');
const input = document.getElementById('input');
const edit = document.querySelectorAll(".edit");
const remove = document.querySelectorAll(".remove");


let n = 0;

const addTask = () =>{
    const tasks = document.createElement("DIV");
    tasks.classList.add('item');
    tasks.setAttribute("id", n);
    
    const taskName = document.createElement("SPAN");
    taskName.classList.add('task-n');
    taskName.textContent = input.value;
    input.value='';
    
    const btnContainer = document.createElement("DIV");
    btnContainer.classList.add('btn');

    const create = document.createElement("ion-icon");
    create.setAttribute("name", "create");
    create.setAttribute("class","edit");

    const trash = document.createElement("ion-icon");
    trash.setAttribute("name", "trash");
    trash.setAttribute("class","remove");
    trash.setAttribute("id", n);

    btnContainer.appendChild(create);
    btnContainer.appendChild(trash);
    tasks.appendChild(taskName);
    tasks.appendChild(btnContainer);
    items.appendChild(tasks);
    n++;
}

items.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target && e.target.classList[0] === "edit") editTask(e);
    if(e.target && e.target.className.split(' ')[0] === "remove") removeTask(e);
});

const editable = (e,boolean)=>{
    e.forEach(element => {
        element.setAttribute("contenteditable", boolean);
    });
}

function editTask(e){
    const span = document.querySelectorAll(".task-n");
    if(e.target.getAttribute("name") == "create"){
        e.target.setAttribute("name","repeat");
        editable(span, "true");
    }else{
        e.target.setAttribute("name","create");
        editable(span, "false")
    }
}

function removeTask(e){
    let it = e.target;
    let parent = it.parentElement;
    let grandparent = parent.parentElement;
    console.log(grandparent);
    grandparent.remove();
}