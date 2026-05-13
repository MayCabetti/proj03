let senha = "1234";
let tentativa 

do {
    tentativa = prompt("Digite a senha (4 dígitos):");

    if (tentativa !== senha) {
        alert("Senha incorreta. Tente novamente:");
    }

} while (tentativa !== senha);

alert("Acesso permitido");