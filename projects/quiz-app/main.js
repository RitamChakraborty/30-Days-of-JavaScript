function $(selector) {
    return document.querySelector(selector);
}

const quizForm = $('#quiz-form');

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

quizForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = quizForm.elements;
    const count = parseInt(formData['count'].value);
    const category = formData['category'].value;
    const difficulty = formData['difficulty'].value;
    const type = formData['type'].value;
    const requestBody = new RequestBody(count, category, difficulty, type);
    const url = createRequestUrl(requestBody);
    const responseData = await getResponseData(url);
    console.log(responseData);

});

function createRequestUrl(requestBody) {
    const url = new URL('https://opentdb.com/api.php');
    url.searchParams.append('amount', requestBody.count);
    if (requestBody.category !== 'any') url.searchParams.append('category', requestBody.category);
    if (requestBody.difficulty !== 'any') url.searchParams.append('difficulty', requestBody.difficulty);
    if (requestBody.type !== 'any') url.searchParams.append('type', requestBody.type);
    return url.href;
}

async function getResponseData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}