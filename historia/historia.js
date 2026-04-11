// --- LÓGICA DO PRELOADER ---
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0"; // Ajustado para 0 (fade out)
    preloader.style.transition = "opacity 0.5s ease";
    
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});

// --- LÓGICA DO MENU MOBILE ---
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuMobile = document.querySelector(".menu-mobile");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.getElementById("closeMenu");

  const toggleMenu = () => {
    menuMobile.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  if (hamburger) hamburger.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
});



document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const fill = document.querySelector(".progress-fill");
    const currentTxt = document.querySelector(".slide-counter .current");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    
    let index = 0;
    const total = slides.length;

    function updateSlider() {
        slides.forEach(s => s.classList.remove("active"));
        slides[index].classList.add("active");
        
        // Atualiza progresso e contador
        const progress = ((index + 1) / total) * 100;
        fill.style.width = `${progress}%`;
        currentTxt.innerText = `0${index + 1}`;
    }

    function nextSlide() {
        index = (index + 1) % total;
        updateSlider();
    }

    function prevSlide() {
        index = (index - 1 + total) % total;
        updateSlider();
    }

    // Auto-play
    let autoSwap = setInterval(nextSlide, 6000);

    // Controles
    nextBtn.addEventListener("click", () => {
        nextSlide();
        clearInterval(autoSwap);
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        clearInterval(autoSwap);
    });
});