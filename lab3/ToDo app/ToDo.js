let todos = [{
    name: 'first task',
    id: 'id1'
}];
reset();
const addButoon = document.getElementById('add-todo');

function addToDo(){
    const Elemid = '' + Date.now();
    const text = document.getElementById('todoName');
    const toName = text.value;
    todos.push({
        name: toName,
        id: Elemid
    });
    reset();
}
addButoon.addEventListener('click', addToDo);

function deleteTask(event){
    const deleteButton = event.target;
    const idDel = deleteButton.id;

    todos = todos.filter(function(todo){
        if(todo.id === idDel){
            return false;
        }else{
            return true;
        }
    });
    reset();
}

function checkTask(e){
    const checked = e.target;
    document.getElementById(`${checked.id}`).style.textDecoration = 'line-through';
}

function reset(){
    document.getElementById('tasks').innerHTML = '';

    todos.forEach(function (todoName){
        const todoList = document.getElementById('tasks');
        const element = document.createElement('div');
        element.setAttribute('id', `${todoName.id}`)
        element.className = "tasksStyle"; 
        element.innerText = todoName.name;

        const checkElem = document.createElement('input');
        checkElem.setAttribute('type', 'checkbox');
        checkElem.className = "checkTask";
        checkElem.id = todoName.id;
        checkElem.onclick = checkTask;
        element.appendChild(checkElem);

        const deleteElem = document.createElement('button');
        deleteElem.className = "deleteButton";
        deleteElem.id = todoName.id;
        deleteElem.innerText = 'Delete';
        deleteElem.onclick = deleteTask;
        element.appendChild(deleteElem);

        todoList.appendChild(element);
    });
}