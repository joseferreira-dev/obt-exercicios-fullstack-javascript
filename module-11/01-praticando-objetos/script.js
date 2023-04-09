alert("Bem-vindo ao sistema de mapeamento de velocidade!");

let spaceship = {

	velocity: 0,

	stop: function() {
		alert(`Parando a nave de nome ${this.name} e do tipo ${this.type} que estava na velocidade ${this.velocity} km/s`);
		this.velocity = 0;
		this.status = false;
	},

	speedUp: function() {
		let acceleration = parseInt(prompt("Em quanto deseja acelerar a nave (km/s)?"));

		this.velocity += acceleration;

		if (this.velocity > this.maxVelocity) {
			alert(`Nave acima da velocidade permitida!\n\nVelocidade atual: ${this.velocity} km/s\nVelocidade máxima permitida: ${this.maxVelocity} km/s`);
			alert("Reduzindo velocidade para a velocidade máxima...");
			this.velocity = this.maxVelocity;
		}
	}
};


function registerSpaceship() {
	spaceship.name = prompt("Insira o nome da nave:");
	spaceship.type = prompt("Insira o tipo da nave:");
	spaceship.maxVelocity = parseInt(prompt("Insira a velocidade máxima que a nave pode atingir (km/s):"));
}

function menu() {
	let chosenOption;
	do {
		chosenOption = prompt("Deseja acelerar ou parar a nave?\n\n1 - Acelerar\n2 - Parar");
		switch (chosenOption) {
			case "1":
				spaceship.speedUp();
				break;
			case "2":
				spaceship.stop();
				break;
			default:
				alert("Opção inválida! Tente novamente.")
				break;
		}
	} while (chosenOption != "2");
}

registerSpaceship();
menu();