function callback(){
	console.log('terminou animação')
}



$(function(){

	$('body').on('keydown', function(e){
		let codigo = e.keyCode
//console.log(codigo)    // para descobrir o cód. numérico da telca. Inspecionar/console
		if(codigo==39){//direita
			$('#conteudo10').animate(
				{
					left: "+=40",
					right: "-=40"
				}
			)
		}else if(codigo==37){      //esquerda
			$('#conteudo10').animate(
				{
					right: "+=40",
					left: "-=40"
				}
			)
		}
	})

	$('[acao-direita]').on('click', function(){
		$('#conteudo10').animate(
			{
				left: "+=40",
				right: "-=40"
			}
		)
	})

	$('[acao-esquerda]').on('click', function(){
		$('#conteudo10').animate(
			{
				right: "+=40",
				left: "-=40"
			}
		)
	})



	$('#conteudo10').on('click', function(){
		$('#conteudo10').animate(
			//{width:600},  // vai fazer a função do CSS e aumentar 600px
			//{width:'100%'},
			
			{
				left: 50,
				//right: 50,
				//bottom: 20,
				//padding: "+=50", // "-=30" (+ ou -)incrementar ou decrementar o padding que já existe no css
				opacity: 0.2,
			},
			1000,
			callback
		)
	})

})

