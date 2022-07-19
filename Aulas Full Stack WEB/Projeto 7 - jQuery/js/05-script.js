$('[acao-clique]').click(function(){
	
	/* Inserindo elementos 

Exemplo ilustrativo:
.before()  <P>  .prepend()  PALAVRAS  .append()  </P>  .after()

*/


	/* before->antes after->depois */ //Leambrando que esse formato está CRIANDO um elemento:  $('<strong>Tonico e </strong>') 


/*	
	$('#conteudo').before('<strong>Dani Calabresa</strong>')
	$('#conteudo').after('<strong>Dani Calabresa 2 -</strong>')

	$('<strong> e Rogério</strong>').insertBefore('#conteudo')
	$('<strong>Tonico e </strong>').insertAfter('#conteudo')
*/


	/*append -> acrescentar prepend->prefixar*/
	$('ul').append('<li>Será usado um clone com .clone()</li>')
/*
	$('#conteudo').prepend('[ANTES]')
	$('#conteudo').append('[DEPOIS]')
	$('#conteudo').append('[DEPOIS 2]').prepend('[ANTES 2]')

	$('<span>[ANTES 3]</span>').prependTo('#conteudo')
	$('<span>[DEPOIS 3]</span>').appendTo('#conteudo')
*/
	const lista = ['ANTES 1, ', ' ANTES 2, ', ' ANTES 3, ']
	//$('#conteudo').after(lista)//before, prepend, append
	$('#conteudo').after(lista).append(lista)  //before, prepend, append



	/* Removendo e movendo e clonando */

	//$('h1').remove()
	const retorno = $('h1').detach()//.detach() deleta e retorna o elemento removido para outro lugar
	$('#conteudo').before(retorno)

	const retorno2 = $('ul').clone()
	$('#conteudo').before(retorno2)



	/* Criando elementos e envolvendo */

	// indiferente a forma: $('<li>') ou assim:  $('<li></li>')
	// MAS se usar assim: $('<li><li>')  sem a barra de fechamento ele duplica

	let item = $('<li>').append('Novo nome')
	$('ul').append(item)

	let p = $('<p>').append(' -- Paragrafo muito importante -- ')
	$('#conteudo').prepend(p)

	$('h1').wrap('<div>') // .wrap envolve CADA item. Neste caso cria DIV que envolve H1: <div> <h1></h1> </div>
	//$('p').wrap('<div>')
	//$('p').wrapAll('<div>')// Envolve um CONJUNTO de 'p'
	//$('span').unwrap()  // remove o que está envolvendo 'span'
	//$('#conteudo').empty() // não remove o item, apenas o conteúdo dele

	//$('#conteudo').replaceWith('<span> -- Jaspion -- </span>') //Substitui conteúdos
	//$('<span>j</span>').replaceAll('#conteudo')

	
	//Aplicar algo em todos os elementos selecionados usando this
	$('p').replaceWith(function(){
		const texto = $(this).html()
		return $('<span>').html(texto)
	})


})

