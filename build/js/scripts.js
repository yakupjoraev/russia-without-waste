// Custom Scripts
// Custom scripts
document.addEventListener("DOMContentLoaded", function () {
  const elementsWithParallax = document.querySelectorAll('[data-parallax]');

  // Параллакс при движении мыши
  document.addEventListener('mousemove', function (e) {
    const offsetX = e.clientX / window.innerWidth - 0.5;
    const offsetY = e.clientY / window.innerHeight - 0.5;
    moveElements(elementsWithParallax, offsetX * 20, offsetY * 20);
  });

  // Параллакс при прокрутке
  document.addEventListener('scroll', function () {
    const scrollTop = window.scrollY / window.innerHeight;
    moveElements(elementsWithParallax, 0, scrollTop * 20);
  });

  function moveElements(elements, offsetX, offsetY) {
    elements.forEach(element => {
      const shouldApplyParallax = element.dataset.parallax === "true";
      if (shouldApplyParallax) {
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      } else {
        element.style.transform = 'none';
      }
    });
  }
});
