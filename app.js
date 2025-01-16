alert("Boas Vindas ao jogo do número secreto!");


let quantidade = 100;
let numeroSecreto = Math.floor(Math.random() * quantidade) + 1;
let numero;
let tentativas = 0;

console.log('Numero Secreto:', numeroSecreto);

// cria um loop para o usuario continuar tentandonm  ate descobrir o numero secreto
while (numero != numeroSecreto) {
    numero = parseInt(prompt(`Escolha um número entre 1 e ${quantidade}`));
    //incrementa 1 a cada loop
    tentativas++;

    if (numero == numeroSecreto) {
        break; 
    } else {
        if (numero > numeroSecreto) {
            alert(`O numero secreto é menor que ${numero}`);
        } else {
            alert(`O numero secreto é maior que ${numero}`);
        }
    }
}

let mensagem = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Você Acertou o número secreto ${numeroSecreto} com ${tentativas} ${mensagem}`);
