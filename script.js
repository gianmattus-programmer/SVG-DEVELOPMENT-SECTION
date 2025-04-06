const steps = document.querySelectorAll('.step'); 
const path = document.querySelector('path'); 
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

let activatedSteps = new Set();

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = scrollTop / scrollHeight;
    let drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;


    steps.forEach((step, index) => {
        if (scrollPercentage >= index * 0.25 && scrollPercentage < (index + 1) * 0.25) {
            step.classList.add('active');
            activatedSteps.add(index);
        } else {
            step.classList.remove('active');
        }
    });

    activatedSteps.forEach((index) => {
        if (scrollPercentage >= index * 0.25) {
            steps[index].classList.add('active');
        } else {
            steps[index].classList.remove('active');
        }
    });
});