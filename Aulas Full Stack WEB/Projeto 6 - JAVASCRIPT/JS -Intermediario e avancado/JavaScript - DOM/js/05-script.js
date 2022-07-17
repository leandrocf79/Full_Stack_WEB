const img = document.querySelector('#imagem') //ou (img)
console.log(img)
console.log(img.getAttribute('src'))
console.log(img.getAttribute('width'))
console.log(img.width)

let atributo ='src'
console.log(img.getAttribute(atributo))


              //alterar a imagem dentro do js
function alterar(){
//TROCAR IMAGEM:
	const img = document.querySelector('#imagem')
	img.src = 'img/grafico.png'

//TROCAR LINK:
	console.log(link.href)
	const trocarLink = document.querySelector('#link')
	trocarLink.href = 'http://www.bing.com'
	
//EXIBIR CONTEÚDO:
	const exibirLink = document.querySelector('#link')
	console.log(link.id)
	console.log(link.href)
}