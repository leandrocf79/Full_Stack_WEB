function executar(){
	//console.log("Executar")
	console.log("Carregando...")
}

function executar2(){
	console.log("Erro ao carregar a página. Tente novamente em alguns instantes.")
}


window.addEventListener('error', executar2)
 //widow.addEventListener('error', executar2)// Erro causado ("widow")

//window.addEventListener('load', executar)
window.addEventListener('resize', executar)//Ao diminuir a tela gera uma contagem, pode ser usado para capturar o tamanho da tela e ajustar o site
window.addEventListener('scroll', executar)// Registra rolar o mouse


window.addEventListener('unload', executar)
/* 
Para observar a mensagem "Carreagando..." 
vá em inspecionar/ console e clique 
varias vezes em F5 para carregar a página.
Pode ainda inserir uma imagem.
*/