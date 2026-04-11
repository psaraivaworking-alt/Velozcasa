// --- MENU MOBILE ---
const btnAbrir = document.getElementById("openMenu");
const btnFechar = document.getElementById("closeMenu");
const menu = document.getElementById("menuMobile");
const fundoEscuro = document.getElementById("overlay");

const abrirMenu = () => {
  if (menu) menu.classList.add("active");
  if (fundoEscuro) fundoEscuro.classList.add("active");
};

const fecharMenu = () => {
  if (menu) menu.classList.remove("active");
  if (fundoEscuro) fundoEscuro.classList.remove("active");
};

if (btnAbrir) btnAbrir.addEventListener("click", abrirMenu);
if (btnFechar) btnFechar.addEventListener("click", fecharMenu);
if (fundoEscuro) fundoEscuro.addEventListener("click", fecharMenu);

// --- TROCA DE CONTEÚDO (C2 / C3 / C4) ---
const botoes = document.querySelectorAll(".opcoes button");
const conteudos = document.querySelectorAll(".conteudo");

botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    const alvo = btn.dataset.target;
    if (!alvo) return;

    botoes.forEach(b => b.classList.remove("ativo"));
    conteudos.forEach(c => c.classList.remove("ativo"));

    btn.classList.add("ativo");
    const conteudoAtivo = document.getElementById(alvo);
    if (conteudoAtivo) conteudoAtivo.classList.add("ativo");
  });
});