let nsecreto = 6;
let contador = 0;
let resposta;

do {
    resposta = Number(prompt("Tente adivinhar o Número secreto (1 a 10)"));
    contador ++;
} while (resposta !== 6);

if (contador <= 5) {
    alert(`Você é bom nisso, Parabéns! Você acertou em ${contador} tentativas!`);
} else {
    alert(`Tentou bastante e finalmente conseguiu. Você acertou em ${contador} tenativas.`);
}
