const swiper = new Swiper('.slider-materials', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  window.scrollY > 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
});
