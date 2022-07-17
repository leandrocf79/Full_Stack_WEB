function executar(){
	console.log("Executar")
	//obj.focus()
}

function keydown(){
	console.log("keydown")
}

const obj = document.getElementById('entrada') 	
obj.addEventListener('focus', executar) //Ao clicar registra ação e deixa o foco FIXO onde clicou
obj.addEventListener('keydown', executar) //Conta os dígitos em local específico
//obj.addEventListener('blur', executar) // Clica em um e depois em outro ele registra, podendo exibir um texto para o usuário, por exemplo, "Digite o nome ante de digitar a senha"
