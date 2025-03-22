console.clear();
Splitting();
const dataReferencia = new Date("2025-10-14T14:11:00"); // Data no formato YYYY-MM-DDTHH:MM:SS

function atualizarContador() {
    const agora = new Date();
    const tempoRestante = dataReferencia - agora; // Tempo restante em milissegundos

    if (tempoRestante <= 0) {
        document.getElementById('tempo').innerText = "A data já chegou!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24)); // Calcular dias
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calcular horas
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60)); // Calcular minutos
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000); // Calcular segundos

    // Exibir no HTML
    document.getElementById('tempo').innerText = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Atualizar o contador a cada segundo
const intervalo = setInterval(atualizarContador, 1000);

// Iniciar a contagem imediata
atualizarContador();
