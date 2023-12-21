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

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.main__tresh-slider', {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: '.main__tresh-slider-arrow--next',
      prevEl: '.main__tresh-slider-arrow--prev',
    },

    pagination: {
      el: '.main__tresh-slider-pagination',
      type: 'bullets',
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.main__longrid-slider', {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: '.main__longrid-slider-arrow--next',
      prevEl: '.main__longrid-slider-arrow--prev',
    },

    pagination: {
      el: '.main__longrid-slider-pagination',
      type: 'bullets',
    },
  });
});