const button = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-sp');

button.addEventListener('click', () => {
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    button.textContent = '✕';
     // 背景固定
    document.body.classList.add('no-scroll');
  } else {
    button.textContent = '≡';
    // 背景スクロール解除
    document.body.classList.remove('no-scroll');
  }
});
