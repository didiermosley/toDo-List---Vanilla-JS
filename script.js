// "use strict";
const items = document.getElementById('items');
const input = document.getElementById('input');
const edit = document.querySelectorAll(".edit");
const remove = document.querySelectorAll(".remove");
const add = document.getElementById('send');


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

    const pomodoro = document.createElement("ion-icon");
    pomodoro.setAttribute("name", "timer");
    pomodoro.classList.add("clock");

    const create = document.createElement("ion-icon");
    create.setAttribute("name", "create");
    create.setAttribute("class","edit");

    const trash = document.createElement("ion-icon");
    trash.setAttribute("name", "trash");
    trash.setAttribute("class","remove");
    trash.setAttribute("id", n);

    btnContainer.appendChild(pomodoro);
    btnContainer.appendChild(create);
    btnContainer.appendChild(trash);
    tasks.appendChild(taskName);
    tasks.appendChild(btnContainer);
    items.appendChild(tasks);
    n++;
}

send.addEventListener("click",()=>{
    console.log(input.placeholder);
    if(input.value == ''){
        input.style.color=`#blue`;
        input.placeholder='The field can not be empty 😁';
        return false;
    }else{
        addTask();
        input.placeholder = 'Add more tasks!';
        return true;
    }
});

items.addEventListener('click',(e)=>{
    console.log(e.target.classList[0]);
    // Two ways to get a specific class when the element has more than one class.
    if(e.target && e.target.classList[0] === "clock") counter(e);
    if(e.target && e.target.classList == "count-info")count(e);
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
    grandparent.style.animation = `disappear .3s`;
    // grandparent.style.display = `none`;
    setTimeout(()=>{
        grandparent.remove();
    },300);
}

let min = 25;
let seconds = 00;

function counter(e){
    let container = e.target.parentElement.parentElement.parentElement;
    let code = `<div class="counter">
    <div class="btns">
        <button type="submit" class="btn-pomo">Pomodoro</button>
        <button type="submit" class="btn-short">Short Break</button>
        <button type="submit" class="btn-long">Long Break</button>
    </div>
    <div class="count-info">
        <h2 class="pomodoro">${min}:${seconds}</h2>
        <h2 class="s-break">${min}:${seconds}</h2>
        <h2 class="l-break">${min}:${seconds}</h2>
        <span>min sec</span>
    </div>
    </div>`;

    container.innerHTML += code;
    console.log(container);
}

function count(e){
    console.log(e.target);
    let mode = e.target;
    if(mode == 'btn-pomo');
    if(mode == 'btn-short');
    if(mode == 'btn-long');
}
