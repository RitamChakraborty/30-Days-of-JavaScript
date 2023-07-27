const slider = document.querySelector('.slider');
const layer1 = document.querySelector('.layer1');
const overlay = document.querySelector('.overlay');
const totalWidth = overlay.clientWidth;

overlay.addEventListener('mousemove', (e) => {
    const offsetX = e.offsetX;
    const offset = offsetX / totalWidth * 100;
    slider.style.width = `${offset}%`;
    layer1.style.clipPath = `polygon(0 0, ${offset}% 0, ${offset}% 100%, 0 100%)`;
});