$('[acao-clique]').click(function(){
	
	/* Obter e alterar conteúdos */
	const res = $('#conteudo').text()  
	console.log(res)

	//html - é para recuperar valor e  text - pega apenas o texto dentro

	$('#conteudo').text('<span>Jamilton</span>')     //substitui pelo conteúdo aqui
	$('#conteudo2').html('<span>leandrocf79</span>')
	//$('ul').html('<li>Alterado</li>') // vai alterar tudo, todos 'ul'
	
	$('ul li').html(function(){     // repare no html
		let item = $(this).text()    // repare no text
		return `<strong>${item}</strong>` + ' - Foi colocado em negrito'
	})  

	/*$('ul li').text(function(){
		let item = $(this).html() // 'this' vai referenciar cada nome dentro do elemento
		return `<strong>${item}</strong>`
		//return `+ ${item}`		
	})  */


	/* Obtendo e configurando atributos */

	let quantidade = $('ul').attr('quantidade')  // captura a quantidade
	console.log(quantidade)
	$('ul').attr('tempo', '10')   // adiciona parâmetro 
	//$('ul').removeAttr('quantidade')  // Remove parâmetro 


	/* Adicionando e removendo classes */

	$('ul li').addClass('destaquejs')
	//$('ul').removeClass('destaque')


	/* Recuperando e alterando propriedades css */

	let propriedade = $('ul li').css('color')
	console.log(propriedade)  // abre o console em inspecionar pagina

	$('h1').css('color', 'red') 
	$('ul span').css('color', 'Blue') 
	
// melhor usar esse modelo abaixo:
	/*
	$('ul li').css({
		'background-color': 'red',
		'color': 'white',
		'font-size': '30px'
	})  */

})