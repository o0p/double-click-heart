const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clikTime = 0;

loveMe.addEventListener('click', (e) => {
    if (clikTime === 0) {
        clikTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clikTime) < 800) {
            createHeart(e);
            clikTime = 0;
        } else {
            clikTime = new Date().getTime();
        }
    }
});