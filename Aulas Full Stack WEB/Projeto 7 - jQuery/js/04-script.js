
$('[acao-clique]').click(function(){
	
	//$('span').addClass('destaque2')// selecionou span e adicionou destaque do css
	
	//$('span').parent().addClass('destaquejs')// foi selecionado span, pode ser qualquer item
/*.parent()   faz sair do item selecionado e vai para o PAI, neste caso é a DIV
  .parents()  seleciona TODOS os parentes
  .next()     seleciona o próximo item. Ou será a esquerda ou a abaixo  
  .prev()     elemento anterior
  .nextAll()
  .prevAll()
  .siblings()
  .each()    percorre itens
*/

	//$('span').parents().addClass('destaque')
	$('li:first').next().addClass('destaquejs')
	//$('li:last').prev().addClass('destaque')
	//$('h1').prev().addClass('destaque')
	//$('h1').next().addClass('destaque')

	//$('li:first').nextAll().addClass('destaque')
	//$('li:last').prevAll().addClass('destaque')

	$('[selecionado]').siblings().addClass('destaque2') // Maria recebeu 'selecionado'

	//$('span').parent().next().addClass('destaque')
	//$('span').parent().prev().addClass('destaque')
	$('h6').children().addClass('destaque')
	//$('#conteudo').children().addClass('destaque')
	//$('body').find('li').addClass('destaque')

	let elementoDom = document.getElementById('conteudo') //usar jQuery a partir de um DOM
		$(elementoDom).addClass('destaquejs')

// os dois abaixo fazem a mesma coisa acesando de lugares diferentes e usando .children

	/*
	$('li').each(function(i,elemento){   
		$(elemento).addClass('destaque')
	})*/

	/*$('ul').children().each(function(i,elemento){
		$(elemento).addClass('destaque')
	})*/

})
