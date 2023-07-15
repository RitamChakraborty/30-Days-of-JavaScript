function $(selector) {
    return document.querySelector(selector);
}

const ac = $('#ac');
const de = $('#de');
const period = $('#period');
const plus = $('#plus');
const minus = $('#minus');
const multiply = $('#multiply');
const divide = $('#divide');
const one = $('#one');
const two = $('#two');
const three = $('#three');
const four = $('#four');
const five = $('#five');
const six = $('#six');
const seven = $('#seven');
const eight = $('#eight');
const nine = $('#nine');
const zeros = $('#zeros');
const zero = $('#zero');
const equal = $('#equal');
const screen = $('.screen');

let input = '';
const inputs = [one, two, three, four, five, six, seven, eight, nine, zero, zeros, period, plus, minus, multiply, divide];

for (const inputBtn of inputs) {
    inputBtn.addEventListener('click', (e) => {
        input += e.target.textContent;
        setInput(input);
    });
}

ac.addEventListener('click', () => (setInput('')));

de.addEventListener('click', () => {
    if (input.length > 0) setInput(input.substring(0, input.length - 1));
});

equal.addEventListener('click', evalulate);

function evalulate() {
    try {
        const result = eval(input);
        setInput(result);
    } catch (ignore) { }
}

function setInput(value) {
    input = value;
    screen.textContent = input;
}