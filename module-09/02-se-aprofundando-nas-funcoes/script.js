
function speedDown(velocity, printer) {
	let deceleration = 20;

	while (velocity != 0) {
		if (velocity > 0) {
			printer(velocity);
			velocity -= deceleration;
		} else {
			velocity = 0;
		}
	}

 	alert(`A nave ${spaceshipName} está parada e as comportas podem ser abertas`);

	return velocity;
}

alert("Bem-vindo ao sistema de navegação!");

let spaceshipName = prompt("Insira o nome da nave:");

let velocity = 140;

velocity =speedDown(velocity, function(currentVelocity) {
	alert(`Velocidade atual: ${currentVelocity} km/s\nDesacelerando...`)
});