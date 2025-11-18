const button = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-sp');

button.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
