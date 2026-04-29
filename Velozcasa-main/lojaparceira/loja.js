// 1. IMPORTAÇÕES (Adicionado o 'orderBy')
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAi3ieTVYxgSMw9IZUA40lfWUAiU9VYV7A",
    authDomain: "parceiro-veloz.firebaseapp.com",
    projectId: "parceiro-veloz",
    storageBucket: "parceiro-veloz.firebasestorage.app",
    messagingSenderId: "764705519045",
    appId: "1:764705519045:web:a49258558068734d8887ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const resultsList = document.getElementById('results-list');
const cepInput = document.getElementById('cep-search');

// Normalização para busca por cidade
function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
}

async function buscar(campo, valor) {
    resultsList.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Buscando...</p>";
    
    try {
        // 2. QUERY ATUALIZADA: Agora com orderBy para mostrar os primeiros cadastrados no topo
        const q = query(
            collection(db, "usuarios"), 
            where(campo, "==", valor),
            orderBy("publico.data_cadastro", "asc")
        );
        
        const snap = await getDocs(q);
        resultsList.innerHTML = "";

        if (snap.empty) {
            resultsList.innerHTML = `
                <div class="no-results">
                    <h3>📍 Nenhum parceiro Veloz encontrado</h3>
                    <p>Tente buscar por uma cidade vizinha ou verifique o CEP.</p>
                </div>`;
            return;
        }

        snap.forEach(doc => renderizarCard(doc.data().publico));
    } catch (e) {
        console.error("Erro ao buscar:", e);
        // Lembre-se: se der erro de 'index', clique no link que aparecerá no console do navegador
        resultsList.innerHTML = "<p>Erro ao buscar dados. Verifique o console.</p>";
    }
}

function renderizarCard(emp) {
    const fone = emp.telefone.replace(/\D/g, '');
    
    // Lógica para Número: Se não existir ou for apenas espaços, exibe S/N
    const numero = (emp.endereco.numero && emp.endereco.numero.trim() !== "") 
                   ? emp.endereco.numero 
                   : "S/N";

    const div = document.createElement('div');
    div.className = 'card-empresa';
    div.innerHTML = `
        <span class="selo-parceiro">Parceiro Veloz</span>
        <h3>${emp.nome_fantasia}</h3>
        <p><strong>Cidade:</strong> ${emp.endereco.cidade}</p>
        <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">
            ${emp.endereco.rua}, nº ${numero}<br>
            Bairro: ${emp.endereco.bairro}
        </p>
        <a href="https://wa.me/55${fone}" target="_blank" class="btn-whatsapp">WhatsApp</a>
    `;
    resultsList.appendChild(div);
}

// MÁSCARA DE CEP (00000-000)
cepInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    e.target.value = value;
});

// Eventos de clique
document.getElementById('btn-buscar-cep').addEventListener('click', () => {
    const val = cepInput.value;
    if (val.length < 9) {
        alert("Por favor, digite o CEP completo (00000-000)");
        return;
    }
    buscar("publico.endereco.cep", val);
});

document.getElementById('btn-buscar-cidade').addEventListener('click', () => {
    const val = document.getElementById('cidade-search').value;
    if (val.length < 3) return alert("Digite a cidade");
    buscar("publico.endereco.cidade_normalizada", normalizar(val));
});