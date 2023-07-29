const MAX_VALUE = 472;
const value = document.querySelector('#value');
const circle = document.querySelector('circle');

window.addEventListener('load', () => {
    let current = MAX_VALUE;
    const limit = 165;
    const interval = setInterval(() => {
        circle.style.strokeDashoffset = current--;
        const percentage = Math.floor((MAX_VALUE - current) * 100 / MAX_VALUE);
        value.textContent = percentage;
        if (current == limit) clearInterval(interval);
    }, 10);
});