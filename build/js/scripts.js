// Custom Scripts
// Custom scripts
document.addEventListener("DOMContentLoaded", function () {
  const line1 = document.querySelector('[data-line-1]');
  const line2 = document.querySelector('[data-line-2]');

  // Параллакс при движении мыши
  document.addEventListener('mousemove', function (e) {
    const offsetX = e.clientX / window.innerWidth - 0.5;
    const offsetY = e.clientY / window.innerHeight - 0.5;
    moveLines(offsetX * 20, offsetY * 20);
  });

  // Параллакс при прокрутке
  document.addEventListener('scroll', function () {
    const scrollTop = window.scrollY / window.innerHeight;
    moveLines(0, scrollTop * 20);
  });

  function moveLines(offsetX, offsetY) {
    line1.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    line2.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});
