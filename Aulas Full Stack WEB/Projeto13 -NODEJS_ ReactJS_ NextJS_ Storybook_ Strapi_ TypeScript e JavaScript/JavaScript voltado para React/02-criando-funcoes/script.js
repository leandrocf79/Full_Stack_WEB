//Visualize no navegador. F12



//FUNÇÃO ENTRAR ( 1º método)

function entrar(){
	var area = document.getElementById('area');
	var texto = prompt('Digite seu nome: ');

//Quando usuário não inserir informação
	if(texto == '' || texto == null){
		alert('Não pode deixar em branco.');
		area.innerHTML = 'Sejam bem vindos... ';

	}else{
		area.innerHTML = "Bem vindo " + texto;
	}
}


//FUNÇÃO ENTRAR ( 2º método) Nome e sobrenome

function entrar2(){
	var area = document.getElementById('area');

//nome
	var nome = prompt('Digite seu 1º nome: ');
//sobrenome	
	var sobrenome = prompt('Digite seu sobrenome: ');
//idade	
	var idade = prompt('Digite sua idade: ');

//Quando usuário não inserir informação
	if(nome == '' || nome == null || sobrenome == '' || sobrenome == null || idade == '' || idade == null){
		alert('Responda todas as perguntas. Tente novamente...');
		area.innerHTML = 'Sejam bem vindos... ';
		
	}else{
		area.innerHTML = 'Bem vindo '+nome+' '+sobrenome+', idade '+idade+' anos.';
	}
}