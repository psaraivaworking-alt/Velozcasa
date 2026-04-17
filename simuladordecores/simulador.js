const velozColors = [
    { name: "Branco Polar", hex: "#efeff0", code: "201" },
    { name: "Branco Gelo", hex: "#ccccc7", code: "202" },
    { name: "Pérola", hex: "#ede8c8", code: "203" },
    { name: "Palha", hex: "#e0dbbc", code: "204" },
    { name: "Marfim", hex: "#d4d0b6", code: "205" },
    { name: "Areia", hex: "#c7b097", code: "206" },
    { name: "Azul Leal", hex: "#214182", code: "207" },
    { name: "Rosa Plissê", hex: "#bd93b2", code: "208" },
    { name: "Cerâmica", hex: "#e3682b", code: "209" },
    { name: "Verde Norte", hex: "#cde7dc", code: "210" }
];

let selectedArea = "Parede";
let selectedColor = velozColors[0];

// Inicializar Grade de Cores
const container = document.getElementById('colorsContainer');
velozColors.forEach(color => {
    const div = document.createElement('div');
    div.className = 'color-item-modern';
    div.style.backgroundColor = color.hex;
    div.title = color.name;
    div.onclick = () => setColor(color, div);
    container.appendChild(div);
});

function setArea(area, el, imgUrl) {
    selectedArea = area;
    document.querySelectorAll('.area-card').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    
    document.getElementById('dynamicImage').style.backgroundImage = `url('${imgUrl}')`;
    document.getElementById('displayAreaName').innerText = area;
    updatePrompt();
}

function setColor(color, el) {
    selectedColor = color;
    document.querySelectorAll('.color-item-modern').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    
    document.getElementById('colorOverlay').style.backgroundColor = color.hex;
    document.getElementById('displayColorName').innerText = color.name;
    updatePrompt();
}

function updatePrompt() {
    const promptText = document.getElementById('promptText');
    const rgb = hexToRgb(selectedColor.hex);
    let specificInstruction = "";

    switch(selectedArea) {
        case "Parede":
            specificInstruction = `
Aja como um especialista em visualização arquitetônica e edição fotorealista.
Na imagem fornecida, identifique exclusivamente as superfícies de parede principais e aplique a cor oficial da marca Tintas Veloz (Nome: ${selectedColor.name}, Código: ${selectedColor.code}, HEX: ${selectedColor.hex}, RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}).

Utilize exatamente os valores informados, sem qualquer ajuste, interpretação ou variação de tonalidade.

Preserve integralmente:
- iluminação natural e artificial
- sombras e oclusão de luz
- textura da alvenaria ou acabamento existente
- reflexos sutis e profundidade do ambiente

A aplicação deve respeitar limites físicos reais da parede (quinas, portas, janelas), sem invadir móveis ou objetos.

Mantenha a imagem original como base absoluta e altere apenas a cor da parede com acabamento acetinado realista.

Evite vazamento de cor para outras áreas.
`;
            break;

        case "Piso":
            specificInstruction = `
Aja como um especialista em renderização realista de ambientes internos.
Na imagem fornecida, identifique exclusivamente a superfície do piso e aplique a cor oficial da marca Tintas Veloz (Nome: ${selectedColor.name}, Código: ${selectedColor.code}, HEX: ${selectedColor.hex}, RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}).

Utilize estritamente os valores fornecidos, sem alteração de cor, contraste ou saturação.

Preserve com precisão:
- perspectiva e profundidade do piso
- brilho e reflexo do material
- textura (cerâmica, madeira, cimento, etc.)
- juntas, rejuntes e divisões
- interação da luz com a superfície

A aplicação deve seguir corretamente o plano do chão e o ângulo da câmera.

Não altere paredes, móveis ou outros elementos.

Evite vazamento de cor para outras áreas.
`;
            break;

        case "Telhado":
            specificInstruction = `
Aja como um especialista em simulação de superfícies externas e materiais.
Na imagem fornecida, identifique exclusivamente o telhado e aplique a cor oficial da marca Tintas Veloz (Nome: ${selectedColor.name}, Código: ${selectedColor.code}, HEX: ${selectedColor.hex}, RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}).

Utilize exatamente os valores fornecidos, sem qualquer ajuste ou interpretação de cor.

Preserve fielmente:
- relevo e geometria das telhas
- sombras entre as peças
- iluminação natural e reflexos
- textura e rugosidade do material

A aplicação deve respeitar a separação entre telhas e manter o efeito tridimensional.

Não altere céu, paredes ou qualquer outro elemento da imagem.

Evite vazamento de cor para outras áreas.
`;
            break;

        default:
            specificInstruction = `
Aplique a cor na área indicada preservando todos os detalhes realistas, sem alterar outros elementos da imagem.
`;
    }

    const prompt = specificInstruction.trim();
    promptText.innerText = prompt;
}
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function copyPrompt() {
    navigator.clipboard.writeText(document.getElementById('promptText').innerText);
    const btn = document.querySelector('.btn-copy');
    btn.innerText = "Copiado!";
    setTimeout(() => btn.innerText = "Copiar Prompt", 2000);
}

function openGemini() {
    window.open("https://gemini.google.com/app", "_blank");
}

// Inicia com a primeira cor selecionada
window.onload = () => {
    const firstColorEl = document.querySelector('.color-item-modern');
    if(firstColorEl) setColor(velozColors[0], firstColorEl);
};