const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseButton = document.querySelector('.mobile-menu__btn-close');
const menuMobileItem = document.querySelector('.mobile-menu__nav .nav__list');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active');
};

const closeMenuAfterClick = (e) => {
    if (e.target.classList.contains('nav__link')) {
        toggleMobileMenu();
    }
};

menuButton.addEventListener('click', toggleMobileMenu);
menuCloseButton.addEventListener('click', toggleMobileMenu);
menuMobileItem.addEventListener('click', closeMenuAfterClick);



