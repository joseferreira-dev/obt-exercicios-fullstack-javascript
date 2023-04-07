alert("Bem-vindo ao conversor de distâncias em anos-luz!");

let distance = prompt("Insira a distância em anos-luz:");

let option = prompt("Digite o número da opção de desejada:\n\n1 - Converter para Parsec (pc)\n2 - Converter para Unidades Astronômicas (AU)\n3 - Converter para quilômetros (km)");

let convertedUnit;
let convertedDistance;

switch(option) {
	case "1":
		convertedUnit = "Distância em Parsec";
		convertedDistance = distance * 0.306601;
		break;
	case "2":
		convertedUnit = "Distância em Unidades Astronômicas";
		convertedDistance = distance * 63241.1;
		break;
	case "3":
		convertedUnit = "Distância em Quilômetros";
		convertedDistance = distance * 9.5 * Math.pow(10, 12);
		break;
	default:
		convertedUnit = "Unidade não identificada";
		convertedDistance = "Conversão fora do escopo";
		break;
}

alert(`Distância em Anos-luz: ${distance}\n${convertedUnit}: ${convertedDistance}`);