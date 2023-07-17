const navDialog = document.querySelector('.nav-dialog');
let navOpenState = false;

document.querySelector('.nav-btn button').addEventListener('click', () => {
    if (navOpenState) {
        navDialog.close();
    } else {
        navDialog.show();
    }

    navOpenState = !navOpenState;
});

document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
document.querySelector('.theme-toggle-mobile').addEventListener('click', toggleTheme);

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}