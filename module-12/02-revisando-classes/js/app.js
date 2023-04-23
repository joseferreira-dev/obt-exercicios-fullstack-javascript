class App {
	constructor() {
    this.spaceship = null;
  }

	start() {
    this.enrollSpaceship();
    let chosenOption;
    do {
      chosenOption = this.showInitialMenu()
      this.redirectFeature(chosenOption)
    } while(chosenOption != "3")
    this.printAndExit();
  }

	enrollSpaceship() {
		let spaceshipName = prompt("Qual o nome da nave?");
		let crewQuantity = prompt("Qual a quantidade de tripulantes?");
		let spaceshipKind = this.askForSpaceshipKind();
		if(spaceshipKind == "1") {
			let weaponsQuantity = prompt("Qual a quantidade de armas da nave?");
			this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity);
		} else {
			let sitsQuantity = prompt("Qual a quantidade de assentos da nave?");
			this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity);
		}
	}

	askForSpaceshipKind() {
		let chosenOption;
		while (!["1", "2"].includes(chosenOption)) {
				chosenOption = prompt("Qual o tipo da nave?\n1 - Nave de Batalha\n2 - Nave de Transporte");
		}
		return chosenOption;
	}

	showInitialMenu() {
		let promptMessage = "O que você deseja fazer?\n1 - Acelerar a nave\n2 - Trocar de nave\n3 - Imprimir dados da nave";
		const chosenOption = prompt(promptMessage);
		while (!["1", "2", "3"].includes(chosenOption)) {
				chosenOption = prompt(promptMessage);
		}
		return chosenOption;
	}

	redirectFeature(chosenOption) {
		switch (chosenOption) {
			case "1":
				this.accelerateSpaceship();
				break;
			case "2":
				this.enrollSpaceship();
				break;
		}
	}

	accelerateSpaceship() {
		let acceleration = Number(prompt("Quanto gostaria de acelerar?"));
		this.spaceship.speedUp(acceleration);
	}

	printAndExit() {
    let finalMessage =  "Nome: " + this.spaceship.name + "\n" +
                        "Quantidade de tripulates: " + this.spaceship.crewQuantity + "\n" +
                        "Velocidade atual: " + this.spaceship.currentVelocity + "\n";
    alert(finalMessage);
  }
}
