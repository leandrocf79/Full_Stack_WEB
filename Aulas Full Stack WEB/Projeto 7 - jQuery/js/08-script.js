
$(function(){
	
	$('[name=selecao]').on('blur', function(){ // ATENÇÃO PARA ESSE MODO DE CHAMAR name=entrada
		
		//focus, deixa o item selecionado. Caixa fica com borda.
		//change registra troca de opções pelo usuário

		// blur, change, select, focus

		//copy, paste, cut
		
		console.log('blur')
	})


	//[name=entrada], [name=idade]
	$('[name=termo]').on('change', function(){
		//focus, blur, change
		console.log('change')
	})


/*	$('[name=formulario]').on('submit', function(e){// ou selecionar form para enviar para o BD
		//submit
		e.preventDefault()// Aqui vai travar o envio para exibir no navegador, vai processar alguns recursos antes de enviar(próximas aulas)
		console.log('submit')
	})

*/

// keydown - registra letras usadas, se pressioinar e segurar mantem registrando. Registra direcional
//keyup - registra somente quando solta a tecla
//keypress - quando a tecla é pressionada registra apenas caracteres, não registra o direcional

	$('body').on('keydown', function(e){  		
	//input, keydown, keyup, keypress
		console.log('keydown: ' + e.key)//e.key  -  consegue capturar a LETRA digitada
	})


	$('[name=enviar]').on('click', function(e){
		e.preventDefault()// para não exibir no navegador! Importante usar sempre
		let nome = $('[name=entrada]').val() //Captura valor digitado em NAME
		let sexo = $('[name=selecao]').val()
		let idade = $('[name=idade]:checked').val()// checked - pega o item que está marcado 
		let termo = $('[name=termo]:checked').val()
		console.log(`nome: ${nome}, sexo: ${sexo}, idade: ${idade}, termo: ${termo}`)
	})

})

/*
Interface:  focus, blur, change
Teclado:    input, keydown, keyup, keypress
Mouse:      click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout, hover
Formulário: submit, select, change
Documento:  ready, load, unload
Navegador:  error, resize, scroll
*/



