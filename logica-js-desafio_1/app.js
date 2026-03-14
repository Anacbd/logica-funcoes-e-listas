let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarBotaoConsole() {
    console.log('O botão foi clicado!');
}

function verificarBotaoAlert() {
    alert('Eu amo JS');
}

function verificarBotaoPrompt() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function verificarBotaoSoma() {
    let numero1 = parseFloat(prompt('Digite o primeiro número:'));
    let numero2 = parseFloat(prompt('Digite o segundo número:'));
    let resultado = numero1 + numero2;
    alert(`O resultado da soma é: ${resultado}`);
}