document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const videoSrc = video.getAttribute("data-src");
        video.querySelector("source").setAttribute("src", videoSrc);
        video.load();
        video.muted = true;
        video.play();
        observer.unobserve(video);
      }
    });
  });

  observer.observe(video);
});
