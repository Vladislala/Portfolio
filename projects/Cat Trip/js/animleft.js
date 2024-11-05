const img = document.querySelector(".hero__img-text");
const p = document.querySelector(".hero__content p");
const a = document.querySelector(".hero__content a");
const aimg = document.querySelector(".hero__content a img");

anime({
  targets: img,
  translateX: ["-100%", "0%"],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: 0,
  complete: function () {
    anime({
      targets: p,
      translateX: ["-100%", "0%"],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
      delay: 0,
      complete: function () {
        anime({
          targets: [a, aimg],
          translateX: ["-100%", "0%"],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: 0,
        });
      },
    });
  },
});
