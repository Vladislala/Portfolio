const reviews = [
  "Cake Sort - Color Puzzle Game is a delightful treat for puzzle lovers. The game offers a refreshing twist on merge-sorting with colorful 3D cake and pie slices. The goal is to sort and combine slices to create delicious cakes, making it both fun and relaxing. With over 100 recipes and no time limits, it's easy to play at your own pace. The one-finger controls and offline play add to its convenience. A perfect game for unwinding and exercising your brain while enjoying virtual desserts!",
  "This is of my favourite games it keeps me thinking about how to get a high score by selecting and placing cakes on the right spot, Would definetly recommend this game",
  "I've had this game for quite a while and I must give them a hand for the great improvements and updates to the game! It's been great to watch this game get better and better. Thanks y'all!",
  "A fun matching game that requires a bit more thinking before you make a move. I love the challenge as you get to higher levels. My fave booster is the Tongs that allows you to pick up a cake and move that cake to a better/different spot.",
];

const spans = document.querySelectorAll(".typed-text");
const cards = document.querySelectorAll(".reviews__item");

function initializeTyped(span, index) {
  new Typed(span, {
    strings: [reviews[index]],
    startDelay: 1000,
    typeSpeed: 10,
    showCursor: true,
    cursorChar: "|",
    onComplete: function (self) {
      self.cursor.remove();

      const parentLi = span.closest(".reviews__item");
      const starsContainer = parentLi.querySelector(".stars");

      for (let i = 0; i < 5; i++) {
        const img = document.createElement("img");
        img.classList.add("reviews__img");
        img.src = "assets/img/star.png";
        img.style.opacity = 0;
        starsContainer.appendChild(img);
      }

      anime({
        targets: starsContainer.querySelectorAll(".reviews__img"),
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: "easeOutBounce",
      });
    },
  });
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const span = entry.target;
        const index = [...spans].indexOf(span);

        initializeTyped(span, index);

        observer.unobserve(span);
      }
    });
  },
  { threshold: 0.5 }
); // Запускаем, когда 50% элемента в зоне видимости

// Добавляем наблюдение за каждым span с классом .typed-text
spans.forEach((span) => {
  observer.observe(span);
});
