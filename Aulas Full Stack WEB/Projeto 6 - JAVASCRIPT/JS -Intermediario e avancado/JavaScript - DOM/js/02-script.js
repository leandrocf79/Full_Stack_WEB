function executar() { //função executar é do button
			const obj = document.querySelector('li.primeiro')
			obj.innerHTML = "teste, texto do js"
			obj.classList.add("destaque")

		}

		//const obj = document.getElementById('#destaque')
		//const obj = document.querySelector('li.primeiro')
		//console.log(obj.textContent)


//Selecionando multiplos elementos:
		//https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList

		const obj = document.getElementsByTagName('li')//getElements retorna 1 ou mais itens
		// ABRA INSPECIONAR na página e clique em Console
		console.log(obj)
		console.log(typeof obj)



		const nomeDaClasse = document.getElementsByClassName('vermelho')// vai chamar pelo NOME da classe
		console.log(nomeDaClasse)
		//console.log(typeof nomeDaClasse)

		const peloNome = document.getElementsByName('nome')// vai chamar pelo NOME da classe
		console.log(peloNome)

		/*const objeto1 = document.querySelectorAll('li.primeiro')
		console.log(objeto1.item(0))
		console.log(objeto1.item(0).textContent)

		*/












		//console.log(obj.length) //Anotação correta, mas não está funcionando
		//console.log(obj[1]) //Anotação correta, mas não está funcionando
		

		/*const lista = []
		console.log(obj.reduce)*/  //Anotação correta, mas não está funcionando

		// uma outra forma de carregar a lista:
		/*
		for (let i=0; i<obj.length; i++){
			console.log(obj[i])
			console.log(obj[i].textContent)
		}*/

		/*
		const lista = Array.from(obj)
		//  console.log(lista.reduce)// confirmado que foi convertido Array:
		const funcao = function(item, i){
			console.log(item) //para acessar o textContent
		}
		lista.forEach(funcao)
		*/

		

