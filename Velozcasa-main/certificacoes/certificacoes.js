document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.flip-card-container');

    containers.forEach(container => {
        container.addEventListener('click', function(e) {
            // Se o clique for no botão de download, não vira o card
            if (e.target.closest('.btn-download')) return;

            // Se este card já está aberto, ele fecha
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                // Fecha todos os outros antes de abrir este
                containers.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            }
            
            // Impede que o clique no card suba para o 'document'
            e.stopPropagation();
        });
    });

    // Ao clicar em qualquer lugar fora dos cards, fecha todos
    document.addEventListener('click', () => {
        containers.forEach(c => c.classList.remove('active'));
    });
});