function $(selector) {
    return document.querySelector(selector);
}

const quoteElm = $('#quote');
const authorElm = $('#author');
const newQuoteBtn = $('#new-quote');
const shareTweetBtn = $('#share-tweet');

window.addEventListener('load', onLoad);

async function onLoad() {
    showLoadingState();
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {headers: {'X-Api-Key': '3A4ZXkR9XQBprt8eFpkBJg==VRAtii1CrLeI0MbP'}});
    const responseData = await response.json();
    const quoteObj = responseData[0];
    const quote = quoteObj.quote;
    const author = quoteObj.author;
    quoteElm.textContent = quote;
    authorElm.textContent = author;
    hideLoadingState();
}

function showLoadingState() {
    quoteElm.textContent = 'Loading...';
    authorElm.textContent = 'loading';
    newQuoteBtn.toggleAttribute('disabled');
    shareTweetBtn.toggleAttribute('disabled');
}

function hideLoadingState() {
    newQuoteBtn.toggleAttribute('disabled');
    shareTweetBtn.toggleAttribute('disabled');
}