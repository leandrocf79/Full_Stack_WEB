function executar(){
	console.log("Executar")
}

function keydown(){
	console.log("keydown")
}

function duplo(){
	console.log("Duplo click")
}

//const obj = document.getElementById('h1') 'entrada', ou 'div', qualquer coisa

const obj = document.getElementById('botao')
obj.addEventListener('click', executar)//Execura ao soltar o botão do mouse
obj.addEventListener('keydown', keydown)
//obj.addEventListener('dblclick', duplo)  //Clique duplo
//obj.addEventListener('mousedown', executar) //pressionou o mouse já registra antes de soltar
//obj.addEventListener('mouseup', executar)
//obj.addEventListener('mousemove', executar)
//obj.addEventListener('mouseover', executar)// Conta somente quantas vezes passou o mouse sobre
//obj.addEventListener('mouseout', executar) // move o mouse para fora do elemento






