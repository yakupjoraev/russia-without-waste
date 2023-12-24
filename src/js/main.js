// Custom scripts
// document.addEventListener("DOMContentLoaded", function () {
//   const elementsWithParallax = document.querySelectorAll('[data-parallax]');
//   let ticking = false;

//   // Параллакс при прокрутке с использованием requestAnimationFrame
//   document.addEventListener('scroll', function () {
//     if (!ticking) {
//       requestAnimationFrame(function () {
//         moveElements(elementsWithParallax);
//         ticking = false;
//       });
//       ticking = true;
//     }
//   });

//   function moveElements(elements) {
//     const viewportHeight = window.innerHeight;
//     const scrollPosition = window.scrollY + viewportHeight / 2; // Половина экрана

//     elements.forEach(element => {
//       const shouldApplyParallax = element.dataset.parallax === "true";
//       const offsetY = parseInt(element.dataset.parallaxOffsetY) || 20; // Значение по умолчанию 20px
//       const elementRect = element.getBoundingClientRect();
//       const elementTop = elementRect.top;
//       const elementBottom = elementRect.bottom;

//       if (shouldApplyParallax) {
//         if (elementTop < scrollPosition && elementBottom > 0) {
//           // Элемент частично виден на экране и ближе к середине экрана
//           const normalizedOffsetY = Math.max(0, Math.min(viewportHeight, elementTop)) / viewportHeight;
//           element.style.transition = 'transform 0.5s ease-out'; // Плавное изменение стилей
//           element.style.transform = `translateY(${(normalizedOffsetY - 1) * offsetY}px)`;
//           element.style.opacity = 'opacity 0.5s ease-out';
//           element.style.opacity = '1';
//         } else {
//           // Элемент полностью за пределами экрана или не ближе к середине экрана
//           element.style.transition = 'transform 0.5s ease-out'; // Плавное изменение стилей
//           element.style.opacity = 'opacity 0.5s ease-out';
//           element.style.transform = 'none';
//           element.style.opacity = '0';
//         }
//       } else {
//         // Если параллакс не применяется, возвращаем элемент в исходное состояние
//         element.style.transition = 'transform 0.5s ease-out'; // Плавное изменение стилей
//         element.style.transform = 'none';
//       }
//     });
//   }
// });

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.top <= window.innerHeight
  );
}

function handleScroll() {
  var parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(function (element) {
    if (isInViewport(element)) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

// Добавляем этот код для обработки видимых элементов при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  handleScroll();
});

document.addEventListener('scroll', handleScroll);


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.swiper')
  if (!container) {
    return null
  }
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
      clickable: true,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.swiper')
  if (!container) {
    return null
  }

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
      clickable: true,
    },
  });
});