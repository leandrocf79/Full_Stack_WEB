		function executar() {
			const obj = document.querySelector('span')
			const classes = obj.classList //retorna as classes que pode usar

			console.log(classes)
			console.log(classes.length)
			console.log(classes.contains('vermelho')) // verifica se tem o vermelho (true)
			classes.add('texto')
			classes.remove('vermelho') // remove o vermelho
			classes.toggle('vermelho') //toggle fica alternando entre uma classe e outra, neste caso a cor velelha, tem e não tem 
			
			obj.className = "vermelho texto" // class name substitui as classes que já existem

			classes.forEach(item=>console.log(item))// percorre as classes com forEach

		}