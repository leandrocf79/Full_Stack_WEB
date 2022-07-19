//.ready já executa funções assim que possível
////.unload executa funções na página enquanto ela ainda está sendo carregada
//.load é chamado quando a página TERMINA  de carregar


//       Vá em inspecionar/ console   (pressione várias vezes F5 para observar)   //



/*$(document).ready(function(){
	
})//pode usar o modelo abaixo, recomendado.

*/

$(function(){
	$('[acao-clique]').on('click', function(){
		$('h1').addClass('destaque')
		console.log('clique')
	})
})



//load, unload
$(window).on('unload', function(){
	console.log('unload')
})



//////////////
//error exibe mensagem de erro caso aja

//error, resize, scroll
$(window).on('scroll', function(){  // Scroll vai marcar o rolamento da página
	console.log('scroll')
})

$(window).on('resize', function(){  //registra se diminuiu o tamanho da página
	console.log('resize')
})



//////////////

//funções do mouse
function mouseenter(e){
	console.log('mouse enter')
}

function mouseleave(e){
	console.log('mouse leave')
}

$(function(){
	$('[acao-clique]').hover(mouseenter, mouseleave)// .hover registra entrada e saida do mouse do botão
})


//mouseup registra quando sair do botão para cima. Os demais eventos já ficaram claro agora
//mousemove etc


/*
Interface:  focus, blur, change
Teclado:    input, keydown, keyup, keypress
Mouse:      click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout, hover
Formulário: submit, select, change
Documento:  ready, load, unload
Navegador:  error, resize, scroll
*/












