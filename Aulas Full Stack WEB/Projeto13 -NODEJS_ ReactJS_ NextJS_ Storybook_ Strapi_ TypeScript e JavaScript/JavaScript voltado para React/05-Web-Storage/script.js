//Visualize no navegador. F12


//var nome = localStorage.nome;
//console.log(nome);


var nome = '';


if (typeof localStorage.nome == 'undefined'){
	localStorage.nome = prompt("Digite seu nome: ");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;


//Remover o nome

function removerNome(){
	localStorage.removeItem('nome');
	
}

