document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const frames = [...document.querySelectorAll(".reel .frame")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (frames.length > 1 && !reduceMotion) {
  const indexEl = document.querySelector(".reel-index");
  const titleEl = document.querySelector(".reel-title");
  let current = 0;
  setInterval(() => {
    frames[current].classList.remove("is-on");
    current = (current + 1) % frames.length;
    frames[current].classList.add("is-on");
    indexEl.textContent = String(current + 1).padStart(2, "0");
    titleEl.textContent = frames[current].dataset.title;
  }, 5500);
}
