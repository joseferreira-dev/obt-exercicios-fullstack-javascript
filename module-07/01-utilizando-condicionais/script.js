alert("Bem-vindo ao sistema de navegação!");

let pilotName = prompt("Insira o nome do piloto:");

let velocity = 0;

let newVelocity = prompt("Você gostaria de acelerar a nave até que velocidade (km/s)?");

let confirmVelocity = confirm("Estamos acelerando para a velocidade " + newVelocity + " km/s. Confirma?");

if (confirmVelocity) {
	velocity = newVelocity;
}

if (velocity <= 0) {
	alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocity < 40) {
	alert("Você está devagar. Podemos aumentar mais");
} else if (velocity < 80) {
	alert("Parece uma boa velocidade para manter");
} else if (velocity < 100) {
	alert("Velocidade alta. Considere diminuir");
} else {
	alert("Velocidade perigosa. Controle automático forçado")
}

alert(`Dados de navegação atualizados:\n\nNome do piloto: ${pilotName}\nVelocidade atual: ${velocity} km/s`);