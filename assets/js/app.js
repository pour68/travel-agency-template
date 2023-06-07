/* toggle menu */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav__active');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('nav__active');
    });
}

/* close mobile menu after clicking on link */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('nav__active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* change header bg */
const blurHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('nav__blur')
        : header.classList.remove('nav__blur');
}
window.addEventListener('scroll', blurHeader);

// active links
const sections = document.querySelectorAll('div[id]');


const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        if (current) {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if (sectionsClass) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link');
                } else {
                    sectionsClass.classList.remove('active-link');
                }
            }
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* scroll up */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* scroll reveal configs */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
});

sr.reveal(`.home__container, .popular__card, .explore__content`, {
    origin: 'top',
    interval: 100,
});

sr.reveal(`.popular__cards, .footer`, {
    origin: 'bottom',
    interval: 100,
});

sr.reveal(`.about__figure, .join__data`, {
    origin: 'left',
    interval: 100,
});

sr.reveal(`.about__data, .join__figure`, {
    origin: 'right',
    interval: 100,
});