let soma = 0;
let total;

do {
    let numero = Number(prompt("Insira um número:"));
    soma += numero;
    resposta = prompt("Deseja inserir outro número? (s/n)");
} while (resposta === "s");

alert("A soma é: " + soma);