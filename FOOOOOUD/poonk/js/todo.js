const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("todo-list");
const toDoInput=document.querySelector("#todo-form input");


const TODOS_KEY="todos";

let toDos=[];


function saveToDos(event){

    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteToDo(event){
    
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    saveToDos();
    
}


function paintToDo(newToDo){
    const li=document.createElement("li");
    li.id=newToDo.id;
    const SPAN=document.createElement("span");
    SPAN.innerText=newToDo.text;
    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(SPAN);
    li.appendChild(button);
    
    todoList.appendChild(li);
}

function handleToDoSubmit(event){

    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";

    const newTodoObject={
        text:newToDo,
        id:Date.now(),
    }

    toDos.push(newTodoObject);
    
    paintToDo(newTodoObject);
    saveToDos();
}




todoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos=localStorage.getItem(TODOS_KEY);


if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);

}

