const dialog = document.querySelector('#dialog');
const submitBtn = document.querySelector('#submit');
const okBtn = document.querySelector('#ok');

submitBtn.addEventListener('click', () => {
    dialog.showModal();
});

okBtn.addEventListener('click', () => {
    dialog.close();
})