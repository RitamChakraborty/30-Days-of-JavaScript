function $(selector) {
    return document.querySelector(selector);
}

class Todo {
    #key;
    #title;
    #done;

    constructor(title) {
        this.#key = +Math.random();
        this.#title = title;
        this.#done = false;
    }

    set done(isDone) {
        this.#done = isDone;
    }

    get key() {
        return this.#key;
    }

    get title() {
        return this.#title;
    }

    get done() {
        return this.#done;
    }
}

const todoForm = $('#todo-form');
const todoInput = $('#todo-input');
const todoListElm = $('#todo-list');
const todoList = {};

window.addEventListener('load', () => {
    
}, false);

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    if (!inputValue) return;
    const newTodo = new Todo(inputValue);
    todoList[newTodo.key] = newTodo;
    renderTodos();
    e.target.reset();
});

function createTodoElement(todo) {
    const todoArticle = document.createElement('article');
    todoArticle.classList.add('todo');
    todoArticle.setAttribute('data-checked', todo.done ? 'checked' : 'unchecked');
    todoArticle.setAttribute('data-key', todo.key);

    const checkButton = document.createElement('button');
    checkButton.addEventListener('click', () => handleCheckTodo(todo.key));
    checkButton.innerHTML = `<i class="fa-regular fa-circle unchecked"></i>
    <i class="fa-solid fa-circle-check delete-todo checked"></i>`;

    const todoTitle = document.createElement('span');
    todoTitle.textContent = todo.title;
    todoTitle.setAttribute('title', todo.title);

    const deleteButton = document.createElement('button');  
    deleteButton.addEventListener('click', () => handleDeleteTodo(todo.key));
    deleteButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    todoArticle.appendChild(checkButton);
    todoArticle.appendChild(todoTitle);
    todoArticle.appendChild(deleteButton);

    return todoArticle;
}

function renderTodos() {
    todoListElm.innerHTML = '';

    for (const key of Object.keys(todoList)) {
        const todo = todoList[key];
        const todoElm = createTodoElement(todo);
        todoListElm.appendChild(todoElm);
    }
}

function handleCheckTodo(key) {
    todoList[key].done = !todoList[key].done;
    renderTodos();
}

function handleDeleteTodo(key) {
    delete todoList[key];
    renderTodos();
}