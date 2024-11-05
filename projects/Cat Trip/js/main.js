window.addEventListener("load", function () {
  slide(".slider__list", ".slider__item");
});

function slide(list, item) {
  const sliderList = document.querySelector(list);
  const sliderItems = document.querySelectorAll(item);
  const totalSlides = sliderItems.length;
  let slideWidth = sliderItems[0].offsetWidth;
  let currentIndex = 0;
  let slidesToShow = getSlidesToShow();

  function getSlidesToShow() {
    if (window.innerWidth <= 425) {
      return 1;
    } else if (window.innerWidth <= 1020) {
      return 2;
    } else {
      return 3;
    }
  }

  function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides - slidesToShow + 1) {
      currentIndex = 0;
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    sliderList.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function adjustCurrentIndex() {
    currentIndex = Math.floor(currentIndex / slidesToShow) * slidesToShow;
    updateSliderPosition();
  }

  setInterval(goToNextSlide, 3000);

  window.addEventListener("resize", function () {
    slideWidth = sliderItems[0].offsetWidth;
    slidesToShow = getSlidesToShow();
    updateSliderPosition();
  });
}
