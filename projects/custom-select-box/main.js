const select = document.querySelector('.select');
const dropdown = document.querySelector('#dropdown');
const tiles = document.querySelectorAll('.tile');
const value = document.querySelector('#value');
let isOepn = false;

select.addEventListener('click', () => {
    if (!isOepn) {
        select.classList.toggle('selecting');
        dropdown.show();
        isOepn = true;
    } else {
        dropdown.close();
    }
});

dropdown.addEventListener('close', () => {
    select.classList.toggle('selecting');
    isOepn = false;
});

for (const tile of tiles) {
    tile.addEventListener('click', () => {
        value.textContent = tile.getAttribute('data-value');
        dropdown.close();
    });
}