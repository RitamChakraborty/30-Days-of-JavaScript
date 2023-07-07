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

    get json() {
        return {
            key: this.#key,
            title: this.#title,
            done: this.#done
        };
    }
}

const todoForm = $('#todo-form');
const todoInput = $('#todo-input');
const todoListElm = $('#todo-list');
let todoList = {};

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('todo-list');
    if (savedData) {
        todoList = JSON.parse(savedData);
        renderTodos();
    }
}, false);

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const inputValue = todoInput.value;
    if (!inputValue) return;
    const newTodo = new Todo(inputValue);
    todoList[newTodo.key] = newTodo.json;
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

    localStorage.setItem('todo-list', JSON.stringify(todoList));
}

function handleCheckTodo(key) {
    todoList[key].done = !todoList[key].done;
    renderTodos();
}

function handleDeleteTodo(key) {
    delete todoList[key];
    renderTodos();
}