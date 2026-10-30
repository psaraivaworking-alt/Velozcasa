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


(function () {
  const raiz = document.getElementById('c6');
  if (!raiz) return;

  const nav = raiz.querySelector('.gp-nav');
  const indicador = raiz.querySelector('.gp-indicador');
  const itens = Array.from(raiz.querySelectorAll('.gp-item'));
  const paineis = Array.from(raiz.querySelectorAll('.gp-painel'));
  const areaPaineis = raiz.querySelector('.gp-paineis');
  const celular = window.matchMedia('(max-width: 768px)');

  // Move o bloco roxo (com a seta) até o tópico ativo
  function posicionar(semAnimacao) {
    const ativo = nav.querySelector('.gp-item.ativo');
    if (!ativo || !nav.offsetHeight) return; // aba ainda escondida
    if (getComputedStyle(indicador).display === 'none') return; // celular

    const topoNav = nav.getBoundingClientRect().top;
    const caixa = ativo.getBoundingClientRect();

    if (semAnimacao) indicador.style.transition = 'none';
    indicador.style.height = caixa.height + 'px';
    indicador.style.transform = 'translateY(' + (caixa.top - topoNav) + 'px)';

    if (semAnimacao) {
      void indicador.offsetHeight; // força aplicar antes de religar a animação
      indicador.style.transition = '';
    }
    indicador.classList.add('visivel');
  }

  function selecionar(item, veioDoUsuario) {
    itens.forEach(function (b) {
      const ligado = b === item;
      b.classList.toggle('ativo', ligado);
      b.setAttribute('aria-selected', ligado ? 'true' : 'false');
      b.tabIndex = ligado ? 0 : -1;
    });

    paineis.forEach(function (p) {
      p.classList.toggle('ativo', p.id === item.dataset.gp);
    });

    posicionar(false);

    // No celular o texto fica abaixo da lista: leva a tela até ele
    if (veioDoUsuario && celular.matches) {
      areaPaineis.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  itens.forEach(function (item) {
    item.addEventListener('click', function () {
      selecionar(item, true);
    });
  });

  // Setas do teclado: cima/baixo trocam de tópico
  nav.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const atual = itens.findIndex(function (b) { return b.classList.contains('ativo');     });
    const proximo = e.key === 'ArrowDown'
      ? Math.min(atual + 1, itens.length - 1)
      : Math.max(atual - 1, 0);
    selecionar(itens[proximo], false);
    itens[proximo].focus();
  });

  // Botões que levam para outra aba (ex.: "Abrir a FDS")
  raiz.querySelectorAll('[data-ir]').forEach(function (el) {
    el.addEventListener('click', function () {
      const botaoAba = document.querySelector('.opcoes button[data-target="' + el.dataset.ir + '"]');
      if (botaoAba) botaoAba.click();
    });
  });

  // Reposiciona sem animar quando a aba abre, a tela muda de tamanho ou a fonte carrega
  if ('ResizeObserver' in window) {
    new ResizeObserver(function () { posicionar(true); }).observe(nav);
  } else {  
    window.addEventListener('resize', function () { posicionar(true); });
    document.querySelectorAll('.opcoes button').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(function () { posicionar(true); }, 50); });
    });
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { posicionar(true); });
  }

  posicionar(true);
})();
