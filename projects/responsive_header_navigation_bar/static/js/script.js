const navEl = document.querySelector('.header_nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("header_nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
});

navEl.addEventListener("click", () => {
    navEl.classList.remove("header_nav--open");
    hamburgerEl.classList.remove("hamburger--open");
});