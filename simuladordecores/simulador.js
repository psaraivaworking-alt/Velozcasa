const velozColors = [
    // Brancos e Neutros
    { name: "Algodão Egípcio", hex: "#efeff0" },
    { name: "Branco Neve", hex: "#ebeae4" },
    { name: "Branco Neve", hex: "#ebebeb" },
    { name: "Branco Gelo", hex: "#bebebe" },
    { name: "Branco Gelo", hex: "#bebebe" },
    { name: "Gelo Seco", hex: "#dcdad7" },
    { name: "Pérola", hex: "#eee7d4" },
    { name: "Cinza Prata", hex: "#e0ddd3" },
    { name: "Palha", hex: "#d9d4c6" },
    { name: "Areia", hex: "#d7cbbd" },
    { name: "Areia do Araguaia", hex: "#ded6c0" },
    { name: "Cinza Neutro", hex: "#94918a" },
    { name: "Cinza Médio", hex: "#8b8b96" },
    { name: "Cinza Bronze", hex: "#b8b6b1" },
    { name: "Cinza Histórico", hex: "#7e807f" },
    { name: "Cinza Iluminado", hex: "#8cadc2" },
    { name: "Chuvisco", hex: "#a4aea7" },
    { name: "Aroma de Orvalho", hex: "#b8b5bb" },
    { name: "Viúva Negra", hex: "#bab9ba" },
    { name: "Renda Sicília", hex: "#969192" },
    { name: "Preto", hex: "#2e2e2d" },

    // Beges e Marrons
    { name: "Cipó Seco", hex: "#bab1a3" },
    { name: "Cipó Seco", hex: "#a39c94" },
    { name: "Castanha", hex: "#c9c0ae" },
    { name: "Camurça", hex: "#a69a85" },
    { name: "Palhoça do Norte", hex: "#856e43" },
    { name: "Cerrado", hex: "#87755d" },
    { name: "Casca de Amendoim", hex: "#cfbb70" },
    { name: "Casca de Amendoim", hex: "#92804b" },
    { name: "Amêndoa", hex: "#9e7e49" },
    { name: "Ocre Escuro", hex: "#b5965f" },
    { name: "Concreto", hex: "#80795c" },
    { name: "Meio Amargo", hex: "#7e5e50" },
    { name: "Marbom Absoluto", hex: "#434d32" },

    // Amarelos
    { name: "Marfim", hex: "#f0ebc3" },
    { name: "Ipê Amarelo", hex: "#fef19c" },
    { name: "Amarelo Canário", hex: "#f0e372" },
    { name: "Margarida", hex: "#eccf5a" },
    { name: "Amarelo Ouro", hex: "#f2ce30" },
    { name: "Amarelo Ouro", hex: "#eec439" },
    { name: "El Royale", hex: "#f2ce5c" },

    // Laranjas
    { name: "Damasco", hex: "#eabd81" },
    { name: "Pêssego", hex: "#e3b794" },
    { name: "Salmão", hex: "#dfb59a" },
    { name: "Tijolo Queimado", hex: "#ba985c" },
    { name: "Tijolo Queimado", hex: "#986846" },
    { name: "Cerâmica Natural", hex: "#e3682b" },
    { name: "Fortaleza de Pedra", hex: "#a65d39" },
    { name: "Cerâmica", hex: "#692b1d" },

    // Vermelhos e Rosas
    { name: "Rosa Bebê", hex: "#e89ba4" },
    { name: "Rosa Pálido", hex: "#eed1df" },
    { name: "Leveza", hex: "#df8dae" },
    { name: "Amora", hex: "#dfa097" },
    { name: "Vermelho Veneza", hex: "#d2786f" },
    { name: "Vermelho Rubi", hex: "#b4535e" },
    { name: "Licor Framboesa", hex: "#a54a4f" },
    { name: "Peroba", hex: "#cc9e9d" },
    { name: "Rosa Plissê", hex: "#bd93b2" },

    // Lilases
    { name: "Azaléia", hex: "#cca1ba" },
    { name: "Lilás", hex: "#dcb7c7" },
    { name: "Lavanda", hex: "#967d93" },
    { name: "Rosa Açai", hex: "#806675" },
    { name: "Licor de Alfazema", hex: "#8aaef2" },
    { name: "Lilás Plenitude", hex: "#7899d6" },

    // Verdes
    { name: "Cristal", hex: "#b1c3b2" },
    { name: "Chuva de Granizo", hex: "#c1d1ba" },
    { name: "Hortelã Selvagem", hex: "#b4d0a9" },
    { name: "Verde Limão", hex: "#b0d588" },
    { name: "Verde Angra", hex: "#99ad6e" },
    { name: "Verde Malva", hex: "#c3dcca" },
    { name: "Verde Malva", hex: "#5e8d98" },
    { name: "Verde Floresta", hex: "#3e7e60" },
    { name: "Verde Astral", hex: "#709ba6" },
    { name: "Verde Paisagem", hex: "#739ea8" },
    { name: "Verde Piscina", hex: "#a8c4bf" },
    { name: "Verde Aruana", hex: "#77aba8" },
    { name: "Lago Pesqueiro", hex: "#cde7dc" },
    { name: "Verde Norte", hex: "#cde7dc" },

    // Azuis
    { name: "Safira", hex: "#c4dfe2" },
    { name: "Azul Fofura", hex: "#94d9f8" },
    { name: "Azul Céu", hex: "#c0d6e6" },
    { name: "Azul Celeste", hex: "#5092c2" },
    { name: "Azul Jeans", hex: "#80b1db" },
    { name: "Jeans Novo", hex: "#b1bdc9" },
    { name: "Jeans Novo", hex: "#8f9cbb" },
    { name: "Azul Tritom", hex: "#6b8391" },
    { name: "Superfície Lunar", hex: "#738c8c" },
    { name: "Azul Oceano", hex: "#466290" },
    { name: "Azul Oceano", hex: "#0986b1" },
    { name: "Azul Leal", hex: "#214182" },
    { name: "Verde Costeiro", hex: "#45bedf" },
    { name: "Chuva de Granizo", hex: "#6d769d" }
];

let selectedColor = velozColors[0];
let currentGeneratedPrompt = "";

const container = document.getElementById('colorsContainer');
document.getElementById('colorsCounterTotal').innerText = `${velozColors.length} Cores`;

// Inicialização estruturada dos cards de cores
velozColors.forEach((color, index) => {
    const card = document.createElement('div');
    card.className = 'color-item-modern';
    card.title = color.name;
    card.onclick = () => setColor(color, card);
    
    // Elemento interno da cor
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.backgroundColor = color.hex;
    
    // Texto descritivo
    const metaName = document.createElement('span');
    metaName.className = 'color-meta-name';
    metaName.innerText = color.name;
    
    card.appendChild(swatch);
    card.appendChild(metaName);
    container.appendChild(card);
    
    if(index === 0) {
        card.classList.add('selected');
    }
});

function setColor(color, el) {
    selectedColor = color;
    document.querySelectorAll('.color-item-modern').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    
    // Atualização dos status informativos superiores
    document.getElementById('statusColorIndicator').style.backgroundColor = color.hex;
    document.getElementById('displayColorName').innerText = color.name;
    document.getElementById('displayColorHex').innerText = color.hex.toUpperCase();
    
    updatePromptText();
}

function updatePromptText() {
    const rgb = hexToRgb(selectedColor.hex);
    
    currentGeneratedPrompt = `Aja como um especialista em visualização arquitetônica e edição fotorealista.
Na imagem fornecida, identifique exclusivamente as superfícies de parede principais e aplique a cor oficial da marca Tintas Veloz (Nome: ${selectedColor.name}, HEX: ${selectedColor.hex}, RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}).

Utilize exatamente os valores informados, sem qualquer ajuste, interpretação ou variação de tonalidade.

Preserve integralmente:
- iluminação natural e artificial
- sombras e oclusão de luz
- textura da alvenaria ou acabamento existente

A aplicação deve respeitar limites físicos reais da parede (quinas, portas, janelas), sem invadir móveis ou objetos.
Mantenha a imagem original como base absoluta e altere apenas a cor da parede com acabamento acetinado realista.`;
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function copyPrompt() {
    navigator.clipboard.writeText(currentGeneratedPrompt);
    const btn = document.querySelector('.btn-copy');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Instruções Copiadas!`;
    btn.style.background = "#dcfce7";
    btn.style.color = "#14532d";
    btn.style.borderColor = "#bbf7d0";
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = "";
        btn.style.color = "";
        btn.style.borderColor = "";
    }, 1800);
}

function openGemini() {
    window.open("https://gemini.google.com/app", "_blank");
}

// Inicia no primeiro carregamento
window.addEventListener('DOMContentLoaded', () => {
    setColor(velozColors[0], document.querySelector('.color-item-modern'));
});