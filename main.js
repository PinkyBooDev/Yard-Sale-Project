const navbarEmail = document.querySelector('.navbarEmail');
const desktopMenu = document.querySelector('.desktopMenu');

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
};