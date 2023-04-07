alert("Calculando a diferença de idade entre duas pessoas");

let nameOlderPerson = prompt("Insira o nome da pessoa mais velha:");
let ageOlderPerson = prompt("Insira a idade da pessoa mais velha:");
let nameYoungerPerson = prompt("Insira o nome da pessoa mais nova:");
let ageYoungerPerson = prompt("Insira a idade da pessoa mais nova:");
let ageDifference = ageOlderPerson - ageYoungerPerson;

alert(`Dados da pessoa mais velha\n\nNome: ${nameOlderPerson}\nIdade: ${ageOlderPerson} anos\n\nDados da pessoa mais nova\n\nNome: ${nameYoungerPerson}\nIdade: ${ageYoungerPerson} anos\n\nDiferença de idade entre as duas pessoas: ${ageDifference} anos`);