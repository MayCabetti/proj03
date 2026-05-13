let cafeE = 5;
let capuccino = 7;
let paoDeQueijo = 4;
let total = 0;
let menu;

do {
    menu = Number(prompt("Escolha seus produtos:\n \n 1- Café expresso (R$ 5,00)\n 2- Capuccino (R$ 7,00)\n 3- Pão de Queijo (R$ 4,00)\n 0- Fim da compra\n "));

    if (menu === 1) {
        total += cafeE;
        alert("Café expresso adicionado!");
    } 
    
    else if (menu === 2) {
        total += capuccino;
        alert("Capuccino adicionado!");
    } 
    
    else if (menu === 3) {
        total += paoDeQueijo;
        alert("Pão de queijo adicionado!");
    } 

    else if (menu !== 0) {
        alert("Opção inválida");
    }

} while (menu !== 0);

alert(`Pedido finalizado.\nO total da sua compra é de ${total}R$`);