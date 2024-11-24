
// Selecionar todos os botões de leitura
const readButtons = document.querySelectorAll('.read-button');

// Variável para controlar o estado da leitura
let isSpeaking = false;

// Adicionar evento de clique a cada botão
readButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Interromper leitura se estiver falando
        if (isSpeaking) {
            speechSynthesis.cancel(); // Para a leitura em andamento
            isSpeaking = false; // Atualiza o estado
            return;
        }

        // Obter o conteúdo da div associada ao botão
        const divContent = button.previousElementSibling.textContent;

        if (!divContent.trim()) {
            alert('Não há texto nesta div para leitura.');
            return;
        }

        // Criar uma instância da API de síntese de voz
        const utterance = new SpeechSynthesisUtterance(divContent);

        // Configurar o idioma (Português do Brasil)
        utterance.lang = 'pt-BR';

        // Configurar a velocidade (opcional)
        utterance.rate = 2.5;

        // Atualizar o estado para indicar que está falando
        utterance.onstart = () => {
            isSpeaking = true;
        };

        // Resetar o estado ao terminar a leitura
        utterance.onend = () => {
            isSpeaking = false;
        };

        // Iniciar a leitura
        speechSynthesis.speak(utterance);
    });
});