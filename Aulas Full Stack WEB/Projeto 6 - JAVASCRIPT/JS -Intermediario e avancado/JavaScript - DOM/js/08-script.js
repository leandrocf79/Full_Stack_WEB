		const obj = document.getElementById('conteudo')
		//obj.textContent = "<p style='color:red'>Leandro</p>" //textContent configura o texto apenas: Leandro
		//obj.innerHTML = "leandrocf79"
		obj.innerHTML = "<p style='color:blue'>Leandro</p>" // pode usar innerHTML que pode configurar outros elementos tambem: "<p style='color:red'>Leandro</p>"
		
	//FORMAS DE ADICIONAR CONTEÚDOS:

		const ul = document.getElementById('itens')// chama o elemento
		const li = document.createElement('li') // cria o elemento
		/*
		li.textContent = "leandrocf79"
		//li.setAttribute('teste', '10')
		ul.appendChild(li) // adiciona mais um "filho" em ul
		*/

				
		
		const ulFilha = document.createElement('ul')
		const liFilha = document.createElement('li')
		liFilha.textContent = "li criada"
		ulFilha.appendChild(liFilha)

		//li.setAttribute('teste', '10')
		//li.textContent = "Leandro"          
		
		const texto = document.createTextNode('@gmail.com')
		
		function adicionar() {
			/*
			li.appendChild(texto)
			ul.appendChild(li)*/

			li.appendChild(texto)
			ul.insertBefore(li, ul.children[2] ) //insertBefore insere no ponto específico

			const itemClonar = document.getElementById('item-clonar')
			const item = itemClonar.cloneNode(true)
			ul.appendChild(item)

		}

		function removerGmail() {
			ul.removeChild(li)
		}