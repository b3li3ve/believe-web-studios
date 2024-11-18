// JavaScript for toggling the dropdown menu on mobile
const burger = document.getElementById('burger');
const dropdownMenu = document.querySelector('.dropdown-menu');

burger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});
