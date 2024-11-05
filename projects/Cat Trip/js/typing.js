const reviews = [
  "I've been looking for a good game to kill some time for a long time and I'm glad that I found this one. The cats are so cute, they do all human stuff in the scene. And the in-house puzzle is so tricky, you really need to think before you can find these things out. So far so good, waiting for the next update.",
  "Enjoyable game with excellent format, keeping you thinking where to find hidden objects. In my opinion, it's worth playing some downtime while you are still actively using your brain. Also good for your mental health and emotional well-being.",
  "I absolutely adore this cat-themed hidden object game! It's an enchanting and delightful experience for cat lovers like myself. The game's vibrant and cute graphics immerse you in a world filled with adorable feline friends.The gameplay is both challenging and entertaining！",
  "I love this game so much it's cute and have a great graphics, and the most thing I like about it that it's offline game. good work guys keep it up ❤😘",
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
