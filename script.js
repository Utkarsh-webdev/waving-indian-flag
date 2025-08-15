// Optional: Add smooth waving effect with JavaScript if needed
const flag = document.querySelector('.flag');
let angle = 0;

function waveFlag() {
  angle += 0.05;
  flag.style.transform = `rotate(${Math.sin(angle) * 2}deg)`;
  requestAnimationFrame(waveFlag);
}

waveFlag();

