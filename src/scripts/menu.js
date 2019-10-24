const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseButton =  document.querySelector('.mobile-menu__btn-close');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active');
};

menuButton.addEventListener('click',toggleMobileMenu);
menuCloseButton.addEventListener('click',toggleMobileMenu);



