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
const headerHeight = header.getBoundingClientRect().height;

const readMoreBtn = document.querySelector('.materials__button');
const infoSection = document.querySelector('.page__info');

readMoreBtn.addEventListener('click', () => {
  scrollTo({
    left: 0,
    top: infoSection.offsetTop - headerHeight,
    behavior: 'smooth',
  });

  console.log(infoSection.offsetTop);
});

window.addEventListener('scroll', () => {
  window.scrollY > 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
});
