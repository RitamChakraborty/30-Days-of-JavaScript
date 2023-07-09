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
const questionList = new Array();
const currentIndex = 0;

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
    quizForm.hidden = true;
    loadingElm.hidden = false;
    const url = createRequestUrl(requestBody);
    const responseData = await getResponseData(url);
    loadingElm.hidden = true;
    startGame(responseData);
};

function startGame(questions) {
    const questionList = new Array();
    let currentIndex = 0;
    let correctCount = 0;

    for (const question of questions) {
        const questionTitle = atob(question['question']);
        const correctAnswer = atob(question['correct_answer']);
        const options = [question['correct_answer'], ...question['incorrect_answers']].map(atob);
        options.sort(() => Math.random() - 0.5);
        const type = atob(question['type']);
        const newQuestion = new Question(questionTitle, options, correctAnswer, type);
        questionList.push(newQuestion);
    }

    console.log(questionList);

    setupQuestions(questionList[currentIndex], currentIndex, null);

    function setupQuestions(question, index, answer) {
        const questionsPlaceholder = $('#questions-placeholder');
        questionsPlaceholder.innerHTML = '';
        questionsPlaceholder.hidden = false;
        const newQuestionElm = getQuestionElement(question, index, answer);
        questionsPlaceholder.appendChild(newQuestionElm);
    }

    function getQuestionElement(question, index, answer) {
        const questionElm = document.createElement('article');
        const questionHeader = document.createElement('h3');
        questionHeader.textContent = `${index + 1}/${questionList.length}. ${question.question}`;
        const optionsElm = document.createElement('div');
        optionsElm.classList.add('options');
        let isAnswered = answer;
        let isCorrect = answer == question.correctAnswer;
        const isLastQuestion = currentIndex === questions.length - 1;

        for (const option of question.options) {
            const optionBtn = document.createElement('button');
            optionBtn.classList.add('option');

            if (isAnswered && option == question.correctAnswer) {
                optionBtn.classList.add('correct');
            }

            if (isAnswered && !isCorrect && option == answer) {
                optionBtn.classList.add('wrong');
            }

            if (isAnswered) optionBtn.disabled = true;

            optionBtn.textContent = option;
            optionBtn.onclick = (e) => handleAnswer(option, option == question.correctAnswer);
            optionsElm.appendChild(optionBtn);
        }

        const navElm = document.createElement('nav');
        const finishBtn = document.createElement('button');
        finishBtn.classList.add('btn');
        finishBtn.textContent = 'Finish';
        finishBtn.addEventListener('click', handleFinishQuiz);
        navElm.appendChild(finishBtn);

        if (isAnswered && !isLastQuestion) {
            const nextBtn = document.createElement('button');
            nextBtn.classList.add('btn');
            nextBtn.textContent = 'Next';
            nextBtn.addEventListener('click', handleNextQuestion);
            navElm.appendChild(nextBtn);
        }

        questionElm.append(questionHeader, optionsElm, navElm);
        return questionElm;
    }

    function handleAnswer(option, isCorrect) {
        setupQuestions(questionList[currentIndex], currentIndex, option);
        if (isCorrect) ++correctCount;
    }

    function handleNextQuestion() {
        ++currentIndex;
        setupQuestions(questionList[currentIndex], currentIndex, null, currentIndex === questions.length - 2);
    }

    function handleFinishQuiz() {
        const questionsPlaceholderElm = $('#questions-placeholder');
        const playAgainElm = $('#play-again');
        questionsPlaceholderElm.hidden = true;
        playAgainElm.hidden = false;
        const playAgainBtn = $('#play-again-btn');
        playAgainBtn.addEventListener('click', handlePlayAgain);
        $('#score').textContent = `You scored ${correctCount} out of ${questionList.length}`;
    }

    function handlePlayAgain() {
        const playAgainElm = $('#play-again');
        playAgainElm.hidden = true;
        $('#quiz-form').hidden = false;
    }
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