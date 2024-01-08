/* This JavaScript code was originally sourced from Beyond Fireship on Youtube: https://www.youtube.com/watch?v=T33NN_pPeNI&list=LL&index=15 */
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

gsap.to(".bg", {
    rotation: 360,
    repeat: -1,
    ease: 'none',
    duration: 25
    });


