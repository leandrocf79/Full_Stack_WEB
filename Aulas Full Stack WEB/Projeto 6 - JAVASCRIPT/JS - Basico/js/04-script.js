let nomesArray = [
	"jamilton",
	"josé",
	"letícia",
	"maria",
	"carlos",  //2x esse nome de propósito
	"pedro",
	"marcela",
	"carla",
	"carlos",
	"leandro"
]

function pesquisarNome(){

	let nomePesquisa = document.getElementById('campoNome').value //"campoNome" palavra digitada capturada
	let intensLista = '' //

	for(indice in nomesArray){
		let nome = nomesArray[indice]
		
		if( nomePesquisa == nome ){
			intensLista =  `<li class="list-group-item">
								${nome}
							</li>`
		}
	}

	document.getElementById('lista').innerHTML = intensLista
	//id="lista" onde será exibida a informação

}

function carregarNomes(){

	let intensLista = ''
	for(indice in nomesArray){
		
		let nome = nomesArray[indice]

		intensLista += `<li class="list-group-item">
							${nome}
						</li>`

		//alert(intensLista)
	}

	document.getElementById('lista').innerHTML = intensLista

}