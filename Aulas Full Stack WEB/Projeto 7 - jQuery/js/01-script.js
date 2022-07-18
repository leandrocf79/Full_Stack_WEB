		//   $('')   é um seletor, tanto faz usar $('') ou jQuery('')


$('h1').hide(5000) // esconde itens, pode por tempo em milisegundos

//let itens = $('ul').text()    // .text() captura os itens, neste caso da "ul"
//$('#conteudo').text( itens ) // foi adicionado na div #conteudo

$('li').addClass('destaquejs') // pinta a área selecionada


//ações em BOTÃO:

$('[acao-clique]').click(function() {   
	$('ul').addClass('destaque')
	
	//let itens = $('ul').text()    // .text() captura os itens, neste caso da "ul"
	//$('#conteudo').text( itens ) // foi adicionado na div #conteudo
//SIMPLIFICANDO AS LINHAS ACIMA FICA:
	$('#conteudo').text( $('ul').text() )


	$('p').toggle() //alterna em escondido e aparecendo
})