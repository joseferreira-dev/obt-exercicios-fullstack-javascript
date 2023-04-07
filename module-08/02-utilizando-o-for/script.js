alert("Sistema de ocultação de nomes de espaçonaves!");

let spaceshipName = prompt("Insira o nome da nave:");

let newSpaceshipName = "";

let originalChar = prompt("Qual caractere do nome deseja substituir?");

let newChar = prompt("Por qual caractere deseja fazer a substituição?");

for (let i = 0; i < spaceshipName.length; i++) {
	if (spaceshipName[i] == originalChar) {
		newSpaceshipName += newChar;
	} else {
		newSpaceshipName += spaceshipName[i];
	}
}

alert(`O novo nome da nave é ${newSpaceshipName}`);