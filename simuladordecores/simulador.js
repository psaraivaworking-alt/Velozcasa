const canvasFundo = document.getElementById('canvasFundo');
const canvasTinta = document.getElementById('canvasTinta');
const ctxFundo = canvasFundo.getContext('2d', { willReadFrequently: true });
const ctxTinta = canvasTinta.getContext('2d');
const upload = document.getElementById('upload');
const instrucao = document.getElementById('instrucao');

let imgOriginal = new Image();
let corAtual = '#6e0a78';
let modo = 'pintar'; 
let desenhando = false;

// 1. Carregar Foto
upload.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        imgOriginal.onload = () => {
            configurarCanvas();
            if (instrucao) instrucao.style.display = 'none';
        };
        imgOriginal.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

function configurarCanvas() {
    const wrapper = canvasFundo.parentElement;
    const prop = imgOriginal.width / imgOriginal.height;
    let largura = wrapper.clientWidth;
    let altura = largura / prop;

    canvasFundo.width = canvasTinta.width = largura;
    canvasFundo.height = canvasTinta.height = altura;
    ctxFundo.drawImage(imgOriginal, 0, 0, largura, altura);
}

// 2. Varinha Mágica (Detecção de Similaridade)
canvasTinta.addEventListener('click', (e) => {
    if (modo !== 'pintar' || !imgOriginal.src) return;

    const rect = canvasTinta.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left) * (canvasFundo.width / rect.width));
    const y = Math.round((e.clientY - rect.top) * (canvasFundo.height / rect.height));

    const imgData = ctxFundo.getImageData(0, 0, canvasFundo.width, canvasFundo.height);
    
    // IA: Preencher área com cores semelhantes
    executarVarinha(x, y, imgData);
});

function executarVarinha(startX, startY, imgData) {
    const w = imgData.width;
    const h = imgData.height;
    const pix = imgData.data;     
    const pos = (startY * w + startX) * 4;
    
    const targetColor = [pix[pos], pix[pos+1], pix[pos+2]];
    const tol = parseInt(document.getElementById('toleranciaIA').value);
    
    const stack = [[startX, startY]];
    const visitados = new Uint8Array(w * h);
    ctxTinta.fillStyle = corAtual;

    while (stack.length) {
        const [currX, currY] = stack.pop();
        const p = currY * w + currX;
        if (currX < 0 || currX >= w || currY < 0 || currY >= h || visitados[p]) continue;

        const i = p * 4;
        const diff = Math.sqrt(
            Math.pow(pix[i] - targetColor[0], 2) +
            Math.pow(pix[i+1] - targetColor[1], 2) + 
            Math.pow(pix[i+2] - targetColor[2], 2)
        );

        if (diff < tol) {
            visitados[p] = 1;
            ctxTinta.fillRect(currX, currY, 1, 1);
            stack.push([currX+1, currY], [currX-1, currY], [currX, currY+1], [currX, currY-1]);
        }
    }
}

// 3. Pincel Manual
canvasTinta.onmousedown = () => desenhando = true;
window.onmouseup = () => desenhando = false;
canvasTinta.onmousemove = (e) => {
    if (!desenhando) return;
    const rect = canvasTinta.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvasFundo.width / rect.width);
    const y = (e.clientY - rect.top) * (canvasFundo.height / rect.height);
    const tam = document.getElementById('sizePincel').value;

    ctxTinta.globalCompositeOperation = modo === 'pintar' ? 'source-over' : 'destination-out';
    ctxTinta.beginPath();
    ctxTinta.arc(x, y, tam / 2, 0, Math.PI * 2);
    ctxTinta.fillStyle = corAtual;
    ctxTinta.fill();
};

// 4. Troca Global de Cor
document.querySelectorAll('.cor-item').forEach(item => {
    item.addEventListener('click', (e) => {
        corAtual = e.target.dataset.color;
        ctxTinta.globalCompositeOperation = 'source-in';
        ctxTinta.fillStyle = corAtual;
        ctxTinta.fillRect(0, 0, canvasTinta.width, canvasTinta.height);
        ctxTinta.globalCompositeOperation = 'source-over';
        
        document.querySelectorAll('.cor-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
    });
});

function setModo(m) {
    modo = m;
    document.getElementById('btnPintar').classList.toggle('active', m === 'pintar');
    document.getElementById('btnApagar').classList.toggle('active', m === 'apagar');
}

function limparTudo() { ctxTinta.clearRect(0, 0, canvasTinta.width, canvasTinta.height); }

function salvarProjeto() {
    const final = document.createElement('canvas');
    final.width = canvasFundo.width; final.height = canvasFundo.height;
    const fCtx = final.getContext('2d');
    fCtx.drawImage(canvasFundo, 0, 0);
    fCtx.globalAlpha = 0.8;
    fCtx.globalCompositeOperation = 'multiply';
    fCtx.drawImage(canvasTinta, 0, 0);
    
    const link = document.createElement('a');
    link.download = 'meu-projeto-veloz.png';
    link.href = final.toDataURL();
    link.click();
}