function $(selector) {
    return document.querySelector(selector);
}

const daysElm = $('#days');
const hoursElm = $('#hours');
const minutesElm = $('#minutes');
const secondsElm = $('#seconds'); 
const currentDate = new Date();
const targetDate = new Date(currentDate.getTime() + (12 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000 + 15 * 60 * 1000));

const interval = setInterval(countDown, 1000);

countDown();

function countDown()  {
    const difference = targetDate - new Date();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference - (days * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference - (days * 1000 * 60 * 60 * 24) - (hours * 1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference - (days * 1000 * 60 * 60 * 24) - (hours * 1000 * 60 * 60) - (minutes * 1000 * 60)) / 1000);

    daysElm.textContent = days;
    hoursElm.textContent = hours;
    minutesElm.textContent = minutes;
    secondsElm.textContent = seconds;

    if (difference <= 0) {
        clearInterval(interval);
    }
}