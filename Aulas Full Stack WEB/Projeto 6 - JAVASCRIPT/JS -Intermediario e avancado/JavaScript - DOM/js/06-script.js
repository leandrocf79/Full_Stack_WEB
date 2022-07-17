		// Clique em inspecionar e depois em console para observar:

		const obj = document.getElementById('itens')
		console.log(obj.id)
		//console.log(obj.quantidade) //não consegue acessar
		obj.setAttribute('quantidade', '10')
		console.log(obj.getAttribute('quantidade'))

		console.log(obj.hasAttribute('quantidade'))
		console.log(obj.hasAttribute('data-status'))
		//obj.removeAttribute('data-status') // remove o status "pendente" para "null"

		//obj.dataset.status = "finalizado"
		//console.log(obj.dataset.status)
		console.log(obj.getAttribute('data-status'))

		console.log(obj.attributes)
		console.log(obj.attributes[1])
		console.log(obj.attributes.quantidade)
		console.log(obj.attributes['quantidade'])

		const objeto = document.getElementById('labelNome')
		console.log(objeto.htmlFor) //Se usar somente o FOR não funciona. O macete é usar htmlFor
		console.log(objeto.getAttribute('for'))