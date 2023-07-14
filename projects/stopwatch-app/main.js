function $(selector) {
    return document.querySelector(selector);
}

const hourElm = $('#hour');
const minuteElm = $('#minute');
const secondElm = $('#second');
const stopBtn = $('#stop');
const startBtn = $('#start');
const resetBtn = $('#reset');
let seconds = 0;
let interval;

startBtn.addEventListener('click', () => {
    startBtn.toggleAttribute('disabled');
    startTimer();
});

resetBtn.addEventListener('click', () => {
    if (interval) clearInterval(interval);
    seconds = 0;
    setClock();
    startBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    if (interval) clearInterval(interval);
    startBtn.disabled = false;
});

function startTimer() {
    interval = setInterval(() => {
        ++seconds;
        setClock();
    }, 1000);
}

function setClock() {
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor(seconds / 60) % 60;
    const second = seconds %  60;
    hourElm.textContent= hour.toString().length === 1 ? `0${hour}` : hour;
    minuteElm.textContent = minute.toString().length === 1 ? `0${minute}` : minute;
    secondElm.textContent = second.toString().length === 1 ? `0${second}` : second;
}