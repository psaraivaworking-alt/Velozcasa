/* ============================================================
   COLOR VELOZ STUDIO — simulador.js
   Paleta oficial agrupada por família de cor + geração de prompt
   + abertura direta no ChatGPT com o prompt já preenchido.
   ============================================================ */

const velozPalette = [
  {
    category: "Brancos e Neutros",
    colors: [
      { name: "Algodão Egípcio", hex: "#efeff0" },
      { name: "Branco Neve", hex: "#ebebeb" },
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
      { name: "Preto", hex: "#2e2e2d" }
    ]
  },
  {
    category: "Beges e Marrons",
    colors: [
      { name: "Cipó Seco", hex: "#bab1a3" },
      { name: "Castanha", hex: "#c9c0ae" },
      { name: "Camurça", hex: "#a69a85" },
      { name: "Palhoça do Norte", hex: "#856e43" },
      { name: "Cerrado", hex: "#87755d" },
      { name: "Casca de Amendoim", hex: "#92804b" },
      { name: "Amêndoa", hex: "#9e7e49" },
      { name: "Ocre Escuro", hex: "#b5965f" },
      { name: "Concreto", hex: "#80795c" },
      { name: "Meio Amargo", hex: "#7e5e50" },
      { name: "Marbom Absoluto", hex: "#434d32" }
    ]
  },
  {
    category: "Amarelos",
    colors: [
      { name: "Marfim", hex: "#f0ebc3" },
      { name: "Ipê Amarelo", hex: "#fef19c" },
      { name: "Amarelo Canário", hex: "#f0e372" },
      { name: "Margarida", hex: "#eccf5a" },
      { name: "Amarelo Ouro", hex: "#eec439" },
      { name: "El Royale", hex: "#f2ce5c" }
    ]
  },
  {
    category: "Laranjas",
    colors: [
      { name: "Damasco", hex: "#eabd81" },
      { name: "Pêssego", hex: "#e3b794" },
      { name: "Salmão", hex: "#dfb59a" },
      { name: "Tijolo Queimado", hex: "#986846" },
      { name: "Cerâmica Natural", hex: "#e3682b" },
      { name: "Fortaleza de Pedra", hex: "#a65d39" },
      { name: "Cerâmica", hex: "#692b1d" }
    ]
  },
  {
    category: "Vermelhos e Rosas",
    colors: [
      { name: "Rosa Bebê", hex: "#e89ba4" },
      { name: "Rosa Pálido", hex: "#eed1df" },
      { name: "Leveza", hex: "#df8dae" },
      { name: "Amora", hex: "#dfa097" },
      { name: "Vermelho Veneza", hex: "#d2786f" },
      { name: "Vermelho Rubi", hex: "#b4535e" },
      { name: "Licor Framboesa", hex: "#a54a4f" },
      { name: "Peroba", hex: "#cc9e9d" },
      { name: "Rosa Plissê", hex: "#bd93b2" }
    ]
  },
  {
    category: "Lilases",
    colors: [
      { name: "Azaléia", hex: "#cca1ba" },
      { name: "Lilás", hex: "#dcb7c7" },
      { name: "Lavanda", hex: "#967d93" },
      { name: "Rosa Açai", hex: "#806675" },
      { name: "Licor de Alfazema", hex: "#8aaef2" },
      { name: "Lilás Plenitude", hex: "#7899d6" }
    ]
  },
  {
    category: "Verdes",
    colors: [
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
      { name: "Verde Norte", hex: "#cde7dc" }
    ]
  },
  {
    category: "Azuis",
    colors: [
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
    ]
  }
];

let selectedColor = velozPalette[0].colors[0];
let currentGeneratedPrompt = "";

const container = document.getElementById("colorsContainer");
const totalColors = velozPalette.reduce((sum, group) => sum + group.colors.length, 0);


/* ---------- Renderização da paleta agrupada ---------- */
velozPalette.forEach((group, groupIndex) => {
  const groupTitle = document.createElement("div");
  groupTitle.className = "color-group-title";
  groupTitle.innerText = group.category;
  container.appendChild(groupTitle);

  const groupGrid = document.createElement("div");
  groupGrid.className = "color-group-grid";

  group.colors.forEach((color, colorIndex) => {
    const card = document.createElement("div");
    card.className = "color-item-modern";
    card.title = color.name;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.onclick = () => setColor(color, card);
    card.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setColor(color, card);
      }
    };

    const swatch = document.createElement("div");
    swatch.className = "color-swatch";
    swatch.style.backgroundColor = color.hex;

    const check = document.createElement("div");
    check.className = "color-check";
    check.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    swatch.appendChild(check);

    const metaName = document.createElement("span");
    metaName.className = "color-meta-name";
    metaName.innerText = color.name;

    card.appendChild(swatch);
    card.appendChild(metaName);
    groupGrid.appendChild(card);

    if (groupIndex === 0 && colorIndex === 0) {
      card.classList.add("selected");
    }
  });

  container.appendChild(groupGrid);
});

/* ---------- Seleção de cor ---------- */
function setColor(color, el) {
  selectedColor = color;

  document.querySelectorAll(".color-item-modern").forEach((c) => c.classList.remove("selected"));
  el.classList.add("selected");

  const canvasPanel = document.getElementById("canvasPanel");
  canvasPanel.style.backgroundColor = color.hex;
  canvasPanel.classList.remove("pulse");
  void canvasPanel.offsetWidth; // reinicia a animação
  canvasPanel.classList.add("pulse");

  const isLight = getLuminance(color.hex) > 0.6;
  canvasPanel.classList.toggle("on-light", isLight);

  document.getElementById("statusColorIndicator").style.backgroundColor = color.hex;
  document.getElementById("displayColorName").innerText = color.name;
  document.getElementById("displayColorHex").innerText = color.hex.toUpperCase();

  updatePromptText();

  // Em telas empilhadas (mobile/tablet), desce automaticamente até o painel de ação
  if (window.innerWidth <= 960) {
    document.getElementById("actionPanelAnchor").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

/* ---------- Geração do prompt ---------- */
function updatePromptText() {
  const rgb = hexToRgb(selectedColor.hex);

  currentGeneratedPrompt = `Aja como um especialista em visualização arquitetônica e edição fotorealista.
Na imagem que vou enviar a seguir, identifique exclusivamente as superfícies de parede principais e aplique a cor oficial da marca Tintas Veloz (Nome: ${selectedColor.name}, HEX: ${selectedColor.hex}, RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}).

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

/* ---------- Ações ---------- */
function copyPrompt() {
  navigator.clipboard.writeText(currentGeneratedPrompt);
  showToast("Instruções copiadas! Agora é só colar na IA.");
}

function openChatGPT() {
  navigator.clipboard.writeText(currentGeneratedPrompt);
  const url = "https://chatgpt.com/?q=" + encodeURIComponent(currentGeneratedPrompt);
  window.open(url, "_blank");
  showToast("ChatGPT aberto com a cor pronta. Agora anexe a foto da sua parede e envie.");
}

function openGemini() {
  navigator.clipboard.writeText(currentGeneratedPrompt);
  window.open("https://gemini.google.com/app", "_blank");
  showToast("Instruções copiadas. Cole no Gemini junto com a foto da sua parede.");
}

/* ---------- Aviso flutuante (toast) ---------- */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById("velozToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "velozToast";
    toast.className = "veloz-toast";
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ---------- Inicialização ---------- */
window.addEventListener("DOMContentLoaded", () => {
  const firstCard = document.querySelector(".color-item-modern");
  if (firstCard) setColor(velozPalette[0].colors[0], firstCard);
});