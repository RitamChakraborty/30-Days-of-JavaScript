document.querySelector('#success').addEventListener('click', handleSuccesBtnClick);
document.querySelector('#error').addEventListener('click', handleErrorBtnClick);
document.querySelector('#invalid').addEventListener('click', handleInvalidBtnClick);
const toastContainerElm = document.querySelector('.toast-container');

function handleSuccesBtnClick() {
    const toastElm = document.createElement('div');
    toastElm.classList.add('toast', 'success-toast');
    toastElm.innerHTML = `
    <div class="wrapper">
        <div class="tile">
            <div class="icon">
                <span class="material-icons">
                    check
                </span>
            </div>
            <p>Successfully submitted</p>
        </div>
        <div class="progress-bar"></div>
    </div>`;
    toastContainerElm.append(toastElm);
    setInterval(() => {
        toastContainerElm.removeChild(toastElm);
    }, 3500);
}

function handleErrorBtnClick() {
    const toastElm = document.createElement('div');
    toastElm.classList.add('toast', 'error-toast');
    toastElm.innerHTML = `
    <div class="wrapper">
        <div class="tile">
            <div class="icon">
                <span class="material-icons">
                    clear
                </span>
            </div>
            <p>Please fix the error!</p>
        </div>
        <div class="progress-bar"></div>
    </div>`;
    toastContainerElm.append(toastElm);
    setInterval(() => {
        toastContainerElm.removeChild(toastElm);
    }, 3500);
}

function handleInvalidBtnClick() {
    const toastElm = document.createElement('div');
    toastElm.classList.add('toast', 'success-toast');
    toastElm.innerHTML = `
    <div class="wrapper">
        <div class="tile">
            <div class="icon">
                <span class="material-icons">
                    priority_high
                </span>
            </div>
            <p>Invalid input, check again</p>
        </div>
        <div class="progress-bar"></div>
    </div>`;
    toastContainerElm.append(toastElm);
    setInterval(() => {
        toastContainerElm.removeChild(toastElm);
    }, 3500);
}