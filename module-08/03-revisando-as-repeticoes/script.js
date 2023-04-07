alert("Sistema de ocultação de nomes de espaçonaves!");

let spaceshipName = prompt("Insira o nome da nave:");

let newSpaceshipName = "";

for (let i = spaceshipName.length - 1; i > 0; i--) {
	if (spaceshipName[i] === "e" || spaceshipName[i] === "E") {
		break;
	} else {
		newSpaceshipName += spaceshipName[i];
	}
}

alert(`Nome original da nave: ${spaceshipName}\nNome após a ocultação: ${newSpaceshipName}`);