function $(selector) {
    return document.querySelector(selector);
}

const todoForm = $('#todo-form');
const todoInput = $('#todo-input');
const todoList = $('#todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    if (!inputValue) return;
    const newTodo = createTodoElement(inputValue);
    todoList.appendChild(newTodo);
});

function createTodoElement(todo) {
    const todoArticle = document.createElement('article');
    todoArticle.classList.add('todo');
    todoArticle.setAttribute('data-checked', 'unchecked');
    todoArticle.innerHTML = (`
        <button>
            <i class="fa-regular fa-circle unchecked"></i>
            <i class="fa-solid fa-circle-check delete-todo checked"></i>
        </button>
        <span>${todo}</span>
        <button>
            <i class="fa-solid fa-xmark"></i>
        </button>
    `);
    return todoArticle;
}