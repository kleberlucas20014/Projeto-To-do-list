// seleçao de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-form");
const editForm = document.querySelector("#todo-form");
const editInput = document.querySelector("#todo-form");
const cancelEditBtn = document.querySelector("#todo-form");

let oldInputValue;

// funçoes
const savetodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle);
    
    const doneBtn = document.createElement("buttom")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("buttom")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("buttom")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)
    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();
    
}
const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}




//eventos
todoForm.addEventListener("submit",(e) => {
    e.preventDefault()
    console.log("Enviou form")
    const inputValue = todoInput.value
    if (inputValue) {
        console.log(inputValue)
          
     
    }
});

document.addEventListener("click", (e) =>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;
    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }


    if (targetEl.classList.contains("finish-todo")) {
       parentEl.classList.toggle("done")

    }
    if (targetEl.classList.contains("remove-todo")){
        parentEl.remove();
        
    }
    if (targetEl.classList.contains("edit-todo")) {        t
     toggleForms()
        
     editInput.value = todoTitle
     oldInputValue.value = todoTitle
    }

})
cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    toggleForms();
})

editForm.addEventListener("submit",(e) => {
   e.preventDefault()
   
   const editInputvalue = editInput.value

   if(editInputvalue) {
    // atualizar
   }
   toggleForms()
})
