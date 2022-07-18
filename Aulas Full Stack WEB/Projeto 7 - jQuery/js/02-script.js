

//const obj = jQuery()
//const obj = $('h1')
//console.log(obj)

$('[acao-clique]').click(function(){    // adiciona css "destaque"
	/*
	$('#conteudo').addClass('destaque')
	//$('#conteudo').removeClass('destaque')
	$('ul li').addClass('destaque')
	$('h1').addClass('destaquejs')
	$('[acao-clique]').addClass('destaquejs')    */
	$('[ativo="sim"]').addClass('destaquejs')
	//$('ul#lista li').addClass('destaquejs')
	//$('*').addClass('destaque') // seletor universal


		/*****  encadeamento  *****/

	/*$('h1')
		.css('color','white')
		.addClass('destaque')*/

	/* Seletores exclusivos jQuery (filtros) */
	$('ul li:first').addClass('destaque') // seleciona o primeiro elemento
	//$('ul li:last').addClass('destaque')  // seleciona o ultimo elemento
	$('ul li:eq(2)').addClass('destaque') // seleciona pelo indice
	//$('ul li:gt(1)').addClass('destaque') // gt - seleciona MAIOR do que..(1)
	//$('ul li:lt(2)').addClass('destaque') // lt - seleciona MENOR do que..(2)
	$('ul li:odd').addClass('destaquejs') // seleciona alternando linhas
	//$('#area :header').addClass('destaque') //Seleciona a área header, atençao para o espaço para os dois pontos "#area :"
	$('ul li:hidden').show()  // Exibe itens ocultos
	$('h1:hidden').show()
	//$('ul li:contains("ana")').addClass('destaque') // diferencia letras maiúsculas de minúsculas

	/*Filtros de formulário*/

	//$('form :input').hide()
	//$('form :text').toggle()
	$('form :password').toggle() // toggle() alerna configuração
	//$('form :radio').toggle()
	//$('form :checkbox').toggle()
	$('form :submit').toggle()

})