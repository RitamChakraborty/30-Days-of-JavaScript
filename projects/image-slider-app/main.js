const left = document.querySelector('#left');
const right = document.querySelector('#right');
const section = document.querySelector('section');

window.addEventListener('resize', main);
main();

function main() {
    const width = section.clientWidth;
    let device;
    let currentScroll = 0;
    let maxScroll = 0;
    section.scrollTo(0, 0);

    if (width >= 750) {
        device = 'desktop';
        maxScroll = width;
    } else if (width >= 500) {
        device = 'tablet';
        maxScroll = width * 2
    } else if (width >= 250) {
        device = 'mobile';
        maxScroll =  width * 5;
    }

    left.addEventListener('click', () => {
        currentScroll = Math.max(currentScroll - width, 0);
        section.scrollTo(currentScroll, 0);
    });

    right.addEventListener('click', () => {
        currentScroll = Math.min(currentScroll + width, maxScroll);
        section.scrollTo(currentScroll, 0);
    });

    section.addEventListener('wheel', (event) => {
        const delta = event.deltaY;
        
        if (delta > 0) {
            currentScroll = Math.min(currentScroll + delta, maxScroll);
            section.scrollTo(currentScroll, 0);
        } else {
            currentScroll = Math.max(currentScroll + delta, 0);
            section.scrollTo(currentScroll, 0);
        }
    });
}