document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!items.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item, i) => {
      item.classList.add("revealed");
      if (i === 0) item.classList.add("active");
    });
    return;
  }

  // --- Revelação (fade + sobe), uma vez por item ---
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach(item => revealObserver.observe(item));

  // --- Foto em destaque: só o item que cruza a faixa central da tela fica em foco ---
  const activeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    },
    { threshold: 0, rootMargin: "-42% 0px -42% 0px" }
  );
  items.forEach(item => activeObserver.observe(item));

  // primeiro item começa em destaque antes de rolar
  items[0].classList.add("active");
});