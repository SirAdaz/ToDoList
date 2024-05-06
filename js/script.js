// Selector
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")


// Event
document.addEventListener("DOMContentLoaded", getTodos)
todoButton.addEventListener("click", addToDo)
todoList.addEventListener("click", btnClick)

//Function
function addToDo(event){
    // no action default
    event.preventDefault()
    // new div "todo"
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    // new li et p
    const newTodo = document.createElement("li");
    const newTodoText = document.createElement("p")
    newTodoText.innerText = todoInput.value
    newTodoText.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    newTodo.appendChild(newTodoText)
    //save in localestorage
    saveLocalTodos(todoInput.value.trim())
    // div for btn
    const btnDiv = document.createElement("div")
    btnDiv.classList.add("Div-Btn")
    todoDiv.appendChild(btnDiv)
    // btn modify
    const modifyBtn = document.createElement("button")
    modifyBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    modifyBtn.classList.add("modify-btn")
    btnDiv.appendChild(modifyBtn)
    // btn delete
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    deleteBtn.classList.add("delete-btn")
    btnDiv.appendChild(deleteBtn)
    // Add new ToDo to ToDo list
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

function btnClick(event){
    // no action default
    event.preventDefault()
    console.log("btnClick called")
    const item = event.target
    // delete todo
    if (item.classList.contains("delete-btn")) {
        const todo = item.parentElement.parentElement
        removeLocalTodos(todo)
        todo.remove()
    } else if // modify todo
        (item.classList.contains("modify-btn")) {
        const todo = item.parentElement.parentElement
        const newToDoText = prompt("Modifier la ToDo :", todo.querySelector(".todo-item").innerText)
        if(newToDoText !== null) {
            todo.querySelector(".todo-item").innerText = newToDoText
        }
    }
}

function saveLocalTodos(todo) {
    //Check item in localstorage
    let todos
    if (localStorage.getItem("todos") === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
    let todos
    if (localStorage.getItem("todos") === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function (todo) {  // new div "todo"
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")
        // new li et p
        const newTodo = document.createElement("li")
        const newTodoText = document.createElement("p")
        newTodoText.innerText = todo
        newTodoText.classList.add("todo-item")
        todoDiv.appendChild(newTodo)
        newTodo.appendChild(newTodoText)
        // div for btn
        const btnDiv = document.createElement("div")
        btnDiv.classList.add("Div-Btn")
        todoDiv.appendChild(btnDiv)
        // btn modify
        const modifyBtn = document.createElement("button")
        modifyBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
        modifyBtn.classList.add("modify-btn")
        btnDiv.appendChild(modifyBtn)
        // btn delete
        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
        deleteBtn.classList.add("delete-btn")
        btnDiv.appendChild(deleteBtn)
        // Add new ToDo to ToDo list
        todoList.appendChild(todoDiv)
    })
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem("todos"))
    }
    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))
} 


  
