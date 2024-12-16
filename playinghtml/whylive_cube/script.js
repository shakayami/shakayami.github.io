const cube = document.querySelector('.cube');

function randomRotate() {
  const randomX = Math.floor(Math.random() * 360);
  const randomY = Math.floor(Math.random() * 360);
  const randomZ = Math.floor(Math.random() * 360);

  cube.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`;
}

setInterval(randomRotate, 2000);
