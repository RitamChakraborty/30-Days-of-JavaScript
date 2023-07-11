function $(selector) {
    return document.querySelector(selector);
}

const quoteElm = $('#quote');
const authorElm = $('#author');
const newQuoteBtn = $('#new-quote');
const shareTweetBtn = $('#share-tweet');

window.addEventListener('load', onLoad);
newQuoteBtn.addEventListener('click', onLoad);
shareTweetBtn.addEventListener('click', shareTweetBtnClick);

async function onLoad() {
    showLoadingState();
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', { headers: { 'X-Api-Key': '3A4ZXkR9XQBprt8eFpkBJg==VRAtii1CrLeI0MbP' } });
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

function shareTweetBtnClick() {
    const quote = quoteElm.textContent;
    const author = "by " + quoteElm.textContent;
    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote) + "&text=" + encodeURIComponent(author);
    const dialog = window.open(tweetUrl, "Tweet", "width=600,height=400");
    if (dialog) {
        dialog.focus();
    }
}