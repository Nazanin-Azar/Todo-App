const todos = [];

//selecting

const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const selectFilter = document.querySelector(".todo-filter");


 //events
todoForm.addEventListener("submit", addNewTodo);


//functions
function addNewTodo(e) {
  e.preventDefault();

  if (!todoInput.value) return null;
  const newTodo = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    title: todoInput.value,
    isCompleted: false,
  };
  todos.push(newTodo);
 
  
  //create todos on DOM
  let result = "";
  todos.forEach((todo) => {
    result += `
<li class="todo">
            <p class="todo__title">${todo.title}</p>
            <span class="todo__createdAt">${new Date(
              todo.createdAt
            ).toLocaleDateString("en-GB")}</span>
            <button data-todo-id=${todo.id}><i class="fa-solid fa-square-check"></i></button>
            <button data-todo-id=${todo.id}><i class="fa-solid fa-trash"></i></button>
          </li> 
`;
  });
  
  
  todoList.innerHTML = result;
  todoInput.value =""
}
