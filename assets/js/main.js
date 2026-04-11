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

/* ==========================================
   ADICIONE NOVAS FUNÇÕES ABAIXO DESTA LINHA


    function _0x3f2a(a){return a*2}
document.addEventListener("contextmenu", e => e.preventDefault());

   ========================================== */

  