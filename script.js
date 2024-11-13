document.getElementById('open-btn').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const invitationMessage = document.getElementById('invitation-message');
    const heartsContainer = document.getElementById('hearts');

    // Abre o envelope
    document.querySelector('.top-flap').style.transform = 'rotateX(180deg)';
    document.querySelector('.bottom-flap').style.transform = 'rotateX(0deg)';
    envelope.style.transform = 'rotateX(0deg)';

    // Exibe a mensagem do convite
    invitationMessage.classList.remove('hidden');
    invitationMessage.style.display = 'block';

    // Gera corações animados
    generateHearts(10);

    // Desabilita o botão para evitar cliques múltiplos
    document.getElementById('open-btn').disabled = true;
});

function generateHearts(num) {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heart.innerHTML = '❤️';
        heartsContainer.appendChild(heart);
    }
}
