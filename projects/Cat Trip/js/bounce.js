const items = document.querySelectorAll(".features__item");

items.forEach((item) => {
  const icon = item.querySelector(".features__icon");

  item.addEventListener("mouseenter", () => {
    icon.classList.add("bounce");
  });

  item.addEventListener("touchstart", () => {
    icon.classList.add("bounce");
  });

  icon.addEventListener("animationend", () => {
    icon.classList.remove("bounce");
  });
});
