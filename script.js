// "use strict";
const mainContainer = document.querySelector(".app");
const items = document.getElementById('items');
const input = document.getElementById('input');
const edit = document.querySelectorAll(".edit");
const remove = document.querySelectorAll(".remove");
const add = document.getElementById('send');
const clock = document.querySelector(".clock");
const counterCont = document.querySelector(".timer");
let pomodoro = document.querySelector(".pomodoro");
let sBreak = document.querySelector(".s-break");
let lBreak = document.querySelector(".l-break");


let n = 0;



const addTask = () =>{
    const tasks = document.createElement("DIV");
    tasks.classList.add('item');
    tasks.setAttribute("id", n);
    
    const taskName = document.createElement("SPAN");
    taskName.classList.add('task-n');
    localStorage.setItem(`task #${n+1}`, input.value);
    input.value='';
    let infoT = localStorage.getItem(`task #${n+1}`);
    taskName.textContent = infoT;
    
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

send.addEventListener("click",()=>{
    console.log(input.placeholder);
    if(input.value == ''){
        input.style.color=`blue`;
        input.placeholder='The field can not be empty 😁';
        return false;
    }else{
        addTask();
        input.placeholder = 'Add more tasks!';
        return true;
    }
});

clock.addEventListener("click",counter);

items.addEventListener('click',(e)=>{
    console.log(e.target.classList[0]);
    // Two ways to get a specific class when the element has more than one class.
    if(e.target && e.target.classList[0] === 'btn-pomo')reverseCount(25, pomodoro);
    if(e.target && e.target.classList[0] === 'btn-short')reverseCount(1, sBreak);
    if(e.target && e.target.classList[0] === 'btn-long') reverseCount(10, lBreak);
    if(e.target && e.target.classList[0] === "edit") editTask(e);
    if(e.target && e.target.className.split(' ')[0] === "remove") removeTask(e);
});

const editable = (e,boolean)=>{
    e.setAttribute("contenteditable", boolean);
   
}

function editTask(e){
    let element = e.target;
    let parent = element.parentElement;
    let itemContainer = parent.parentElement;
    let span = itemContainer.firstChild;
    // const span = document.querySelectorAll(".task-n");
    if(element.getAttribute("name") == "create"){
        element.setAttribute("name","repeat");
        editable(span, "true");
    }else{
        element.setAttribute("name","create");
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


function counter(){
    counterCont.classList.toggle("d-block");
}

let isWorking = false, interval;

function reverseCount(e, object) {
    let s = 0;

    if (e == 25) {
        object.classList.remove("d-none");
        object.classList.toggle("d-block");
        lBreak.classList.remove("d-block");
        sBreak.classList.remove("d-block");
        mainContainer.style.background = `#008552`;
    } else if (e == 1) {
        object.classList.toggle("d-block");
        pomodoro.classList.add("d-none");
        lBreak.classList.remove("d-block");
        mainContainer.style.background = `#3F2B96`;
    } else {
        object.classList.toggle("d-block");
        pomodoro.classList.add("d-none");
        sBreak.classList.remove("d-block");
        mainContainer.style.background =  `#daae51`;
    }
    isWorking = true;

    if(isWorking == true){
        stopCounter();
    }

    object.style.color = `#404145`;
    interval = setInterval(() => {
        if (s <= 0) {
            s = 60;
            e -= 1;
        }
        s -= 1;
        object.textContent = `${e<1 ? "0" + e : e }:${s < 10 ? "0" + s : s}`;
        if(s == 0 && e == 0){
            stopCounter();
            object.style.color = `red`;
        }
        console.log(e, s);
    }, 1000);

}

function stopCounter(){
    clearInterval(interval);
}

