function executar(){
	console.log("Número de dígitos do usuário.")
}

const obj = document.getElementById('entrada')
//obj.addEventListener('keypress', executar)//Registra caracteres, não serve para o teclado direcional

//Tambem conta o teclado direcional, ótimo para movimentar objetos na tela
obj.addEventListener('keyup', executar)// Só registra quando solta a tecla
//obj.addEventListener('keydown', executar)//Registra se mantem pressionado





