alert("Bem-vindo ao sistema de desembarque!");

const hitchedSpaceship = [
	["Fenix", 8, true],
	["Golias", 10, true],
	["Helmet", 5, false],
	["Elemental", 3, true],
	["Darwin", 15, false]
];

let moreThan9Crew = hitchedSpaceship.filter(function(spaceship) {
	return spaceship[1] > 9;
}).map(function(spaceship) {
    return spaceship[0];
});

let spaceshipPendantHitch = hitchedSpaceship.findIndex(function(spaceship) {
	return spaceship[2] === false;
});

let spaceshipsNamesUppercase = hitchedSpaceship.map(function(spaceship) {
	return spaceship[0].toUpperCase();
});

alert("Dados atualizados da plataforma de desembarque:\n\nNaves com mais de 9 tripulantes: " + moreThan9Crew.join(", ") + "\n\nNúmero da plataforma da primeira nave ainda com engate pendente: " + (spaceshipPendantHitch + 1) + "\n\nNome das naves em destaque: " + spaceshipsNamesUppercase.join(", "));