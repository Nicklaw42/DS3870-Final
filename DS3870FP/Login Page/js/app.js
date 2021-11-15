let open = document.querySelector('.itmSignUpButton');
let close = document.querySelector('.exit');
let tl = gsap.timeline();

tl.to('.overlay', {opacity: 1, x:0, scale: 1, PointerEvents: 'auto', duration: 1})
tl.pause();



open.addEventListener('click', () => {
    tl.play();
    console.log(tl);
})

open.addEventListener('click', () => {
    tl.reverse();
}) 