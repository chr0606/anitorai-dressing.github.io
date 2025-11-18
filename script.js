const button = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-sp');

button.addEventListener('click', () => {
  nav.classList.toggle('open');
});
