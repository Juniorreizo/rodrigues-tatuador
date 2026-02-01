// Função para alternar entre as tabs
function showTab(id, event) {
    // Remove classe active de todas as tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    
    // Remove classe active de todos os botões
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    
    // Adiciona classe active na tab selecionada
    document.getElementById(id).classList.add('active');
    
    // Adiciona classe active no botão clicado
    event.target.classList.add('active');
}

// Função para abrir o modal
function openModal() {
    document.getElementById('modal').classList.add('active');
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Fecha o modal ao clicar fora dele
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Previne o envio padrão do formulário
    const form = document.querySelector('.modal-box form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica de envio
            alert('Formulário enviado! Em breve entraremos em contato.');
            closeModal();
            form.reset();
        });
    }
});

// Adiciona animação suave ao scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
