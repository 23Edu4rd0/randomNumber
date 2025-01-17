let listaNumerosSort = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let quantidadeDeElementosNaLista = listaNumerosSort.length;
let tentativas = 0;

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * numeroLimite) + 1;
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

console.log(numeroSecreto);

function mensagemInicial() {
    exibirTextoNaTela("H1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero de 1 a 100");
}

mensagemInicial();


function verificarChute() {
    let chute = document.querySelector("input").value;
    tentativas++;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mgsTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Parabéns!");
        exibirTextoNaTela("p", mgsTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("h1", "Errou!");
        exibirTextoNaTela("p", "O numero secreto é menor");
    } else {
        exibirTextoNaTela("h1", "Errou!");
        exibirTextoNaTela("p", "O numero secreto é maior");
    }
    limparCampo();
}

if (quantidadeDeElementosNaLista == 3) {
    listaNumerosSort = [];
}

function gerarNumeroAleatorio() {
    let numeroEslhido = Math.floor(Math.random() * numeroLimite) + 1;
    if (listaNumerosSort.includes(numeroEslhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSort.push(numeroEslhido);
        return numeroEslhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

