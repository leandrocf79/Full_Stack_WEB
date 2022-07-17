function executarButton(){
	console.log("Clique no botao")
	//botao.removeEventListener('click', executar )    // remove evento
}

function executarBody(){
	console.log("Clique Body")
}

/* 1) Rotinas DOM tradicionais */
//const botao = document.getElementById('botao')
//const botao = document.querySelector('[botao-acao]')
//botao.onclick = executar
//botao.onclick = function(){executar()}

/*
const botao = document.querySelector('[botao-acao]')//botao-acao foi usado quando não tem outro identificador para selecionar
//const body = document.querySelector('body')
*/


//2) Rotinas de Eventos DOM 
                     


/*const botao = document.querySelector('[botao-acao]')
botao.addEventListener('click', executarButton)
//É possível colocar evento de clique emqualquer lugar, veja no BODY:
const body = document.querySelector('body')
body.addEventListener('click', executarBody)
*/



 //3) Rotinas de Ouvintres de Eventos DOM 
                         // Usar esse, É O M AIS RECOMENDADO:


//Igual acima, mas ao clicar no botão que está dentro do body o click vai para quem?
// para acertar isso isso usar boolean para o 1º click ser considerado botão
//True 1º o mais externo e depois os mais internos

const body = document.querySelector('body')
const botao = document.querySelector('[botao-acao]')

// vai verificar se o browser consegue executar a ação
if( botao.addEventListener ){
	botao.addEventListener('click', executarButton, false ) //LISTENER é um ouvinte de ação
}else{
	botao.attachEvent('click', executarButton, false )
}

if( body.addEventListener ){
	body.addEventListener('click', executarBody, false )
}else{
	body.attachEvent('click', executarBody, false )
}



// pode ainda chamar uma função anônima:
/*const botao = document.querySelector('[botao-acao]')
botao.addEventListener('click', function(){
	executarButton()
})
*/

 















