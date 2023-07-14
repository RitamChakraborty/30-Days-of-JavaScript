const audio = document.querySelector('#audio');
const playPauseBtn = document.querySelector('#play-pause')
const slider = document.querySelector('#slider');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

    togglePlayPauseBtn();
});

audio.addEventListener('timeupdate', (event) => {
    const target = event.target;
    const duration = target.duration;
    const currentTime = target.currentTime;
    const progress = Math.ceil(currentTime * 100 / duration);
    slider.value = progress;
});

audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    togglePlayPauseBtn();
});

slider.addEventListener('change', (event) => {
    const value = event.target.value;
    audio.currentTime = audio.duration * value / 100;
});

function togglePlayPauseBtn() {
    playPauseBtn.classList.toggle('play');
    playPauseBtn.classList.toggle('pause');
}