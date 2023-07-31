const items = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

for (const item of items) {
    item.addEventListener('dragstart', () => {
        item.classList.toggle('dragging');
    });
    item.addEventListener('dragend', () => {
        item.classList.toggle('dragging');
    })
}

for (const container of containers) {
    console.log(container);
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const item = document.querySelector('.dragging');
        container.appendChild(item);
    });
}