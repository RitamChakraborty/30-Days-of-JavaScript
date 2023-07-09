function $(selector) {
    return document.querySelector(selector);
}

class RequestBody {
    #count;
    #category;
    #difficulty;
    #type;

    constructor(count, category, difficulty, type) {
        this.#count = count;
        this.#category = category;
        this.#difficulty = difficulty;
        this.#type = type;
    }

    get count() {
        return this.#count;
    }

    get category() {
        return this.#category;
    }

    get difficulty() {
        return this.#difficulty;
    }

    get type() {
        return this.#type;
    }
}

class Question {
    #question;
    #options;
    #correctAnswer;
    #type;

    constructor(question, options, correctAnswer, type) {
        this.#question = question;
        this.#options = options;
        this.#correctAnswer = correctAnswer;
        this.#type = type;
    }

    get question() {
        return this.#question;
    }

    get options() {
        return this.#options;
    }

    get correctAnswer() {
        return this.#correctAnswer;
    }

    get type() {
        return this.#type;
    }
}

const quizForm = $('#quiz-form');

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    main();
});

async function main() {
    const formData = quizForm.elements;
    const count = parseInt(formData['count'].value);
    const category = formData['category'].value;
    const difficulty = formData['difficulty'].value;
    const type = formData['type'].value;
    const requestBody = new RequestBody(count, category, difficulty, type);
    const loadingElm = $('.loading');
    quizForm.toggleAttribute('hidden');
    loadingElm.toggleAttribute('hidden');
    const url = createRequestUrl(requestBody);
    const responseData = await getResponseData(url);
    loadingElm.toggleAttribute('hidden');
    startGame(responseData);
};

function startGame(questions) {
    const questionsPlaceholder = $('#questions-placeholder');
    questionsPlaceholder.toggleAttribute('hidden');
    questionsPlaceholder.innerHtml = '';
    const questionList = new Array();
    const currentIndex = 0;
    const maxIndex = questions.length;

    for (const question of questions) {
        const questionTitle = atob(question['question']);
        const correctAnswer = atob(question['correct_answer']);
        const options = [question['correct_answer'], ...question['incorrect_answers']].map(atob);
        options.sort(() => Math.random() - 0.5);
        const type = atob(question['type']);
        const newQuestion = new Question(questionTitle, options, correctAnswer, type);
        questionList.push(newQuestion);
    }

    const newQuestionElm = getQuestionElement(questionList[currentIndex], currentIndex);
    questionsPlaceholder.innerHTML = newQuestionElm.outerHTML;
}

function createRequestUrl(requestBody) {
    const url = new URL('https://opentdb.com/api.php');
    url.searchParams.append('amount', requestBody.count);
    if (requestBody.category !== 'any') url.searchParams.append('category', requestBody.category);
    if (requestBody.difficulty !== 'any') url.searchParams.append('difficulty', requestBody.difficulty);
    if (requestBody.type !== 'any') url.searchParams.append('type', requestBody.type);
    url.searchParams.append('encode', 'base64');
    return url.href;
}

async function getResponseData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

function getQuestionElement(question, index) {
    const questionElm = document.createElement('article');
    const questionHeader = document.createElement('h3');
    questionHeader.textContent = `Q${index + 1}. ${question.question}`;
    const optionsElm = document.createElement('div');
    optionsElm.classList.add('options');

    for (const option of question.options) {
        const optionBtn = document.createElement('button');
        optionBtn.classList.add('option');
        optionBtn.textContent = option;
        optionsElm.appendChild(optionBtn);
    }

    const navElm = document.createElement('nav');
    navElm.innerHTML = `<button class="btn">Next</button><button class="btn">Finish</button>`;

    questionElm.append(questionHeader, optionsElm, navElm);
    return questionElm;
}