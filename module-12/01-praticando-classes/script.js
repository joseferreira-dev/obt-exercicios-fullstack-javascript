class spaceship {
	constructor(name, crew, hitchStatus, doorsStatus) {
    this.name = name;
    this.crew = crew;
    this.hitchStatus = hitchStatus;
    this.doorsStatus = doorsStatus;
  }
}

function registerSpaceship() {
	let name = prompt("Insira o nome da nave:");
	let type = parseInt(prompt("Insira a quantidade de tripulantes:"));
	let newSpaceship = new spaceship(name, type, true, true);

	return newSpaceship;
}

function printerSpaceships(hitchedSpaceships) {
	let message = "Lista de naves engatadas:\n\n";

	hitchedSpaceships.forEach(function(spaceship, pos) {
		message += `${pos + 1} - Nome: ${spaceship.name} | Quant. de Tripulantes: ${spaceship.crew}\n`;
	});

	alert(message);
}

function showMenu() {
	let chosenOption;
	let hitchedSpaceships = [];
	do {
		chosenOption = prompt("Menu de controle\nEscolha uma das opções abaixo:\n\n1 - Realizar engate\n2 - Imprimir naves\n3 - Sair do programa");
		switch (chosenOption) {
			case "1":
				hitchedSpaceships.push(registerSpaceship());
				break;
			case "2":
				printerSpaceships(hitchedSpaceships);
				break;
			case "3":
				alert("Saindo do programa...")
				break;
			default:
				alert("Opção inválida! Tente novamente.")
				break;
		}
	} while (chosenOption != "3");
}

alert("Bem-vindo ao sistema de controle da estação espacial!");

showMenu();