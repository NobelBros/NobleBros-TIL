// 1. 모든 data-carousel-button 선택
// 2. 모든 버튼을 순회하면서 버튼의 dataset의 carouselButton 이 next면 1 아니면(prev) -1
// 3. 버튼의 가장 가까운 data-carousel의 data-slides 선택 -> slides 이름으로 할당

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
