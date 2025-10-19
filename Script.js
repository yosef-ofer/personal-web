// JavaScript source code
const avatar = document.querySelector('.avatar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 20) {
        avatar.classList.add('small');
        avatar.classList.add();
    } else {
        avatar.classList.remove('small');
    }
});

const customList = document.querySelector('.wrapper');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        customList.classList.add('scrolled');
    } else {
        customList.classList.remove('scrolled');
    }
});

// Add an event listener to the avatar element
avatar.addEventListener('click', function () {
    // Animate scrolling to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', function () {
    const section = document.querySelector('.section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('show');
    }
});
