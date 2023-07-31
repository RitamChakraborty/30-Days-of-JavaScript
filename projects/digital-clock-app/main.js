function setTime() {
    const date = new Date();
    document.querySelector('#hour').textContent = date.getHours().toString().padStart(2, '0');
    document.querySelector('#minute').textContent = date.getMinutes().toString().padStart(2, '0');
    document.querySelector('#second').textContent = date.getSeconds().toString().padStart(2, '0');
}

setTime();

setInterval(setTime, 1000);