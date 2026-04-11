const URL_GOOGLE_SCRIPT = "SUA_URL_DA_IMPLANTACAO_AQUI";

document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.getElementById('btnEnviar');
    btn.innerText = "Sending...";
    btn.disabled = true;

    const payload = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        assunto: document.getElementById('assunto').value,
        mensagem: document.getElementById('mensagem').value
    };

    fetch(URL_GOOGLE_SCRIPT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        alert("Obrigado! Sua mensagem foi enviada com sucesso.");
        document.getElementById('formContato').reset();
    })
    .catch(err => {
        console.error(err);
        alert("Ocorreu um erro ao enviar. Tente novamente.");
    })
    .finally(() => {
        btn.innerText = "Send Now";
        btn.disabled = false;
    });
});