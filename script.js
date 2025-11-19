// ハンバーガーボタン取得
const button = document.querySelector('.hamburger');

// スマホ用ナビメニュー取得
const nav = document.querySelector('.nav-sp');

// × ボタン取得
const cross = document.querySelector('.cross');


// ハンバーガーが押されたとき
button.addEventListener('click', () => {
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    // 開いたとき
    button.textContent = '✕';              // ハンバーガーを × に変更
    document.body.classList.add('no-scroll'); // 背景スクロール禁止
  } else {
    // 閉じたとき
    button.textContent = '≡';              // 元に戻す
    document.body.classList.remove('no-scroll'); // 背景スクロール解除
  }
});


// × ボタン（メニュー内のやつ）が押されたとき
cross.addEventListener('click', () => {
  nav.classList.remove('open');            // ナビ閉じる
  button.textContent = '≡';                // ハンバーガーに戻す
  document.body.classList.remove('no-scroll'); // 背景スクロール解除
});
