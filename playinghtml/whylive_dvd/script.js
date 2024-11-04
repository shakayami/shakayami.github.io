// script.js
const chars = document.querySelectorAll('.char');

// ソース見た人へ
// 大部分はchatGPTに頑張ってもらいました
// ただ，chatGPTは画面の左上を座標(0,0)と思い込んだコードを書いたため
// 画面の真ん中を(0,0)であるようなコードに人力で書き換えました
// そのほか人力での加筆訂正があります

// 各文字の初期位置と移動速度をランダムに設定
chars.forEach(char => {
  char.style.left = (Math.random() * (window.innerWidth - char.clientWidth) - window.innerWidth / 2) + 'px';
  char.style.top = (Math.random() * (window.innerHeight - char.clientHeight) - window.innerHeight / 2) + 'px';
  var theta = Math.random() * 2 * 3.1415926535897932384626433832795;
  char.dataset.dx = Math.cos(theta)*5; // 横移動速度
  char.dataset.dy = Math.sin(theta)*5; // 縦移動速度
});

function animate() {
  chars.forEach(char => {
    // 現在位置と移動速度の取得
    let x = parseFloat(char.style.left);
    let y = parseFloat(char.style.top);
    let dx = parseFloat(char.dataset.dx);
    let dy = parseFloat(char.dataset.dy);

    // 画面端に到達したときのみ反転
    if (x + char.clientWidth > window.innerWidth / 2) {
      dx = -Math.abs(dx);
    } 
    if (x < -window.innerWidth / 2) {
      dx = Math.abs(dx);
    }
    if (y + char.clientHeight > window.innerHeight / 2){
      dy = -Math.abs(dy);
    }
    if (y < -window.innerHeight / 2) {
      dy = Math.abs(dy);
    }

    // 位置と速度の更新
    char.style.left = x + dx + 'px';
    char.style.top = y + dy + 'px';
    char.dataset.dx = dx;
    char.dataset.dy = dy;
  });
  requestAnimationFrame(animate);
}

animate();
