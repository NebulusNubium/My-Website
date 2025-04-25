//Carroussel
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#portfolio .carroussel-container');
  const slides = Array.from(container.querySelectorAll('.project'));
  const slider = document.getElementById('slide-range');
  const indicators   = Array.from(document.querySelectorAll('.carousel-indicators button'));
  let current = 0;

  slider.max = slides.length - 1;

  function updateSlides(index) {
    // reset all
    slides.forEach(s => s.classList.remove('prev','active','next'));
    indicators.forEach(btn => btn.classList.remove('active'));

    // compute neighbors
    const prevIndex = (index - 1 + slides.length) % slides.length;
    const nextIndex = (index + 1) % slides.length;

    slides[prevIndex].classList.add('prev');
    slides[index].classList.add('active');
    slides[nextIndex].classList.add('next');

    indicators[index].classList.add('active');
    slider.value = index;
  }

  // move via range input
  slider.addEventListener('input', e => {
    current = +e.target.value;
    updateSlides(current);
  });

  // click on a slide
  slides.forEach((slide, idx) => {
    slide.style.cursor = 'pointer';
    slide.addEventListener('click', () => {
      current = idx;
      updateSlides(current);
    });
  });

  // click on an indicator
  indicators.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      current = idx;
      updateSlides(current);
    });
  });

  // show first slide on load
  updateSlides(0);
});
