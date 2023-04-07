function menu() {
	let chosenOption = prompt("Selecione a opção desejada:\n\n1 - Acelerar a nave em 5km/s\n2 - Desacelerar a nave em 5 km/s\n3 - Imprimir os dados de bordo\n4 - Sair do programa");
	return chosenOption;
}

function speedUp(velocity) {
	return velocity + 5;
}

function speedDown(velocity) {
	if (velocity <= 0) {
		return 0;
	}
	return velocity - 5;
}

function printData(spaceshipName, velocity) {
	alert(`Dados de bordo atualizados:\n\nNome da nave: ${spaceshipName}\nVelocidade atual: ${velocity} km/s`);
}

alert("Bem-vindo ao sistema de navegação!");

let spaceshipName = prompt("Insira o nome da nave:");

let velocity = 0;

let chosenOption;

do {
	chosenOption = menu();

	switch (chosenOption) {
		case "1":
			velocity = speedUp(velocity);
			break;
		case "2":
			velocity = speedDown(velocity);
			break;
		case "3":
			printData(spaceshipName, velocity);
			break;
		case "4":
			alert("Encerrando programa...");
			break;
		default:
			alert("Opção inválida. Tente novamente!")
			break;
	}
} while (chosenOption != "4");