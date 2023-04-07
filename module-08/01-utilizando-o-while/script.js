alert("Bem-vindo ao sistema de navegação!");

let spaceshipName = prompt("Insira o nome da nave:");

let chosenOption = prompt("Deseja entrar na dobra espacial?\n\n1 - Sim\n2 - Não");

let counter = 0;

while (option === "1") {
	++counter;
	chosenOption = prompt("Deseja realizar a próxima dobra?\n\n1 - Sim\n2 - Não");
}

alert(`Dados de navegação atualizados:\n\nNome da nave: ${spaceshipName}\nQuantidade de dobras realizadas: ${counter}`);