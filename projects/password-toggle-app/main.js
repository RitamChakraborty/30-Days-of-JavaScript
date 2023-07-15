const input = document.querySelector('#input');
const showHideBtn = document.querySelector('.show-hide');

showHideBtn.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
    showHideBtn.classList.toggle('show');
    showHideBtn.classList.toggle('hide');
});