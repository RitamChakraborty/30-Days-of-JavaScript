const form = document.forms['subscribe'];
const sheetUrl = 'https://script.google.com/macros/s/AKfycbzarwN1Km-Ce6PCs7JWTlS-yK9kLE-Ko2SP1Yk8HKemj7ABGmHpSIi4o3bqMTMkebWX/exec';
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.classList.toggle('loading');

    try {
        const response = await fetch(
            sheetUrl,
            {
                method: 'POST',
                body: new FormData(form)
            }
        );
    } catch (e) {
        console.error('Error submitting form', e);
    } finally {
        submitBtn.classList.toggle('loading');
    }
});