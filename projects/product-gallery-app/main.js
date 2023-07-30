const switch1 = document.querySelector('.switch-1');
const switch2 = document.querySelector('.swtich-2');
const switch3 = document.querySelector('.swtich-3');
const image1 = document.querySelector('.image-1');
const image2 = document.querySelector('.image-2');
const image3 = document.querySelector('.image-3');

switch1.addEventListener('click', () => {
    image1.setAttribute('data-visible', 'true');
    image2.setAttribute('data-visible', 'false');
    image3.setAttribute('data-visible', 'false');
    switch1.setAttribute('data-enabled', 'true');
    switch2.setAttribute('data-enabled', 'false');
    switch3.setAttribute('data-enabled', 'false');
});

switch2.addEventListener('click', () => {
    image1.setAttribute('data-visible', 'false');
    image2.setAttribute('data-visible', 'true');
    image3.setAttribute('data-visible', 'false');
    switch1.setAttribute('data-enabled', 'false');
    switch2.setAttribute('data-enabled', 'true');
    switch3.setAttribute('data-enabled', 'false');
});

switch3.addEventListener('click', () => {
    image1.setAttribute('data-visible', 'false');
    image2.setAttribute('data-visible', 'false');
    image3.setAttribute('data-visible', 'true');
    switch1.setAttribute('data-enabled', 'false');
    switch2.setAttribute('data-enabled', 'false');
    switch3.setAttribute('data-enabled', 'true');
});