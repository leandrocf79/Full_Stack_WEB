$(function(){

	$('[acao-clique]').on('click', function(){
		let duracao = 1500 //tempo em milesegundos

		/*$('#animacao').hide(duracao, function(){  //hide - esconde
			console.log('animacao finalizou') // CALLBACK é opcional
		})*/
		//$('#animacao').toggle(duracao)//hide, show, toggle
		

		//fadeIn(), fadeOut(), fadeTo(duracao,opacidade)
		//fadeIn(),   Aparece 
		//fadeOut(),  Desaparece
		//fadeToggle(), aparece e desaparece
		$('p').fadeTo(duracao, 0.5)// 0 desaparece. 1 aparece e outro valor entre 0 e 1 não desaparece totalmente
		//$('#animacao').fadeToggle(duracao)

		//slideUp, slideDown, slideToggle
		//$('#animacao').slideToggle(duracao)
		$('p').slideToggle(duracao)

	})

})
