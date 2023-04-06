alert("Bem-vindo! A seguir pediremos que insira alguns dados.");

let name = prompt("Insira seu nome:");
let age = prompt("Insira a sua idade:");
let confirmAge = confirm(`Você informou que sua idade é ${age}. Confirma?`);

alert(`Você informou os seguintes dados:\nNome: ${name}\nIdade: ${age}\nIdade correta? ${confirmAge}`);