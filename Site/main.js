const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOptions = {
    distance: '50px',
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal('.header__image img', {
    ...scrollRevealOptions,
    origin: "right",
});

ScrollReveal().reveal(".header__content h2",{
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".header__content p",{
    ...scrollRevealOptions,
    delay: 1500,
});

ScrollReveal().reveal(".header__btn",{
    ...scrollRevealOptions,
    delay: 2000,
});

ScrollReveal().reveal(".header__socials li",{
    ...scrollRevealOptions,
    delay: 2500,
    interval: 500,
});

ScrollReveal().reveal(".service__card",{
    ...scrollRevealOptions,
    interval: 500,
});

ScrollReveal().reveal(".service__row",{
    distance: '200px',
    origin: "bottom",
    opacity: 0,
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".contact__form",{
    ...scrollRevealOptions,
    delay: 500,
});