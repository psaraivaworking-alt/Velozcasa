// Seletores
const inputBusca = document.getElementById('inputBusca');
const filtrosApp = document.querySelectorAll('.filtro-btn');
const filtrosAcab = document.querySelectorAll('.acab-btn');
const limparBtn = document.querySelector('.limpar');
const areaAcabamento = document.getElementById('area-acabamento');
const produtos = document.querySelectorAll('.produto-card');
const linhas = document.querySelectorAll('.linha');

// Função Unificada de Filtro (Botões + Busca)  
function aplicarFiltros() {
    const termo = inputBusca.value.toLowerCase();
    const appAtiva = document.querySelector('.filtro-btn.active')?.dataset.filter || 'todos';
    const acabAtivo = document.querySelector('.acab-btn.active')?.dataset.filter || 'todos';

    produtos.forEach(card => {
        // Dados do card para busca
        const nomeProd = card.querySelector('h3').innerText.toLowerCase();
        const topicos = card.querySelector('ul').innerText.toLowerCase();
        
        // Verificações
        const matchBusca = nomeProd.includes(termo) || topicos.includes(termo);
        const matchApp = appAtiva === 'todos' || card.classList.contains(appAtiva);
        const matchAcab = acabAtivo === 'todos' || card.classList.contains(acabAtivo);

        // Exibição Final
        if (matchBusca && matchApp && matchAcab) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    // Ocultar Linhas (Premium, Standard etc) se vazias
    linhas.forEach(linha => {
        const cardsVisiveis = Array.from(linha.querySelectorAll('.produto-card'))
                                   .filter(c => c.style.display === 'flex');
        linha.style.display = cardsVisiveis.length > 0 ? 'block' : 'none';
    });

    // Regra específica para Metal (Fosco e Brilho apenas)
    if (appAtiva === 'metal') {
        filtrosAcab.forEach(btn => {
            const f = btn.dataset.filter;
            btn.style.display = (f === 'fosco' || f === 'brilho') ? 'block' : 'none';
        });
    } else {
        filtrosAcab.forEach(btn => btn.style.display = 'block');
    }
     if (appAtiva === 'piso') {
        filtrosAcab.forEach(btn => {
            const f = btn.dataset.filter;
            btn.style.display = (f === 'fosco') ? 'block' : 'none';
        });
    } else {
        filtrosAcab.forEach(btn => btn.style.display = 'block');
    }
}

// Evento de Digitação (Busca)
inputBusca.addEventListener('input', aplicarFiltros);

// Eventos de Clique nos Filtros
filtrosApp.forEach(btn => {
    btn.addEventListener('click', () => {
        filtrosApp.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filtrosAcab.forEach(b => b.classList.remove('active')); // Reset acabamento
        areaAcabamento.style.display = 'block';
        aplicarFiltros();
    });
});

filtrosAcab.forEach(btn => {
    btn.addEventListener('click', () => {
        filtrosAcab.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        aplicarFiltros();
    });
});

limparBtn.addEventListener('click', () => {
    inputBusca.value = ''; // Limpa a busca também
    filtrosApp.forEach(b => b.classList.remove('active'));
    filtrosAcab.forEach(b => b.classList.remove('active'));
    areaAcabamento.style.display = 'none';
    aplicarFiltros();
});

// Lógica do Menu Mobile (Hamburger)
// --- LÓGICA DO MENU MOBILE ---
const btnAbrir = document.getElementById("openMenu");
const btnFechar = document.getElementById("closeMenu");
const menu = document.getElementById("menuMobile");
const fundoEscuro = document.getElementById("overlay");

// Função para abrir
if (btnAbrir) {
    btnAbrir.addEventListener("click", () => {
        menu.classList.add("active");
        if (fundoEscuro) fundoEscuro.classList.add("active");
    });
}

// Função para fechar
const fecharTudo = () => {
    if (menu) menu.classList.remove("active");
    if (fundoEscuro) fundoEscuro.classList.remove("active");
};

if (btnFechar) btnFechar.addEventListener("click", fecharTudo);
if (fundoEscuro) fundoEscuro.addEventListener("click", fecharTudo);