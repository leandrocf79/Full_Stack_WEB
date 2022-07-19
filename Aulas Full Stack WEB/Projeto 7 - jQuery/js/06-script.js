

/*$('h1').click(function(){      //.click() vai mudar a cor de h1 devido ao .destaque de css
	$('h1').addClass('destaque')
})*/

// A RECOMENDAÇÃO ATUAL É USAR O MODELO ABAIXO COM .on:

$('h1').on('click', function(){
	$('h1').addClass('destaque')
})


function executar(e){   // e de evento
	//$('h1').addClass('destaque')
	//$('h2').toggle() // alterna aparece e desaparece
	//evento.off() // desliga todos eventos após uso

	//$('[acao-clique]').off('click', executar)// usar esse pois pode ter mais de um evento para o mesmo elemento
	//$('[acao-clique]').off()
	
	console.log(e.type)
	console.log(e.target)
	console.log(e.clientY, e.pageY)// registra onde foi clicado
	console.log(e.clientX, e.pageX)
}


//$('[acao-clique]').on('click mouseout', executar) //desaparece ao passar o mouse sobre
$('[acao-clique]').on('click', executar)//evento do botão


/*
Interface:  focus, blur, change
Teclado:    input, keydown, keyup, keypress
Mouse:      click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout, hover
Formulário: submit, select, change
Documento:  ready, load, unload
Navegador:  error, resize, scroll
*/