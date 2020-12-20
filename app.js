// DOM selectors
const todoInput = document.getElementById('todoInput');
const todos = document.querySelectorAll('li');

// Event listeners
todoInput.addEventListener('change', addTodo);

// Functions
function addTodo() {
    const newTodo = document.createElement('li');
    newTodo.innerHTML = `<i class="fas fa-check"></i>` + todoInput.value + `<i class="fas fa-minus"></i>`;
    todoList.appendChild(newTodo);
    todoInput.value = '';
}