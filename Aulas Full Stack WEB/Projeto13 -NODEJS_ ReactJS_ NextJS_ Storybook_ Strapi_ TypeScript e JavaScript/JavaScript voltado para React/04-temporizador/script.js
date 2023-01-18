//Visualize no navegador. F12



//temporizador

function acao(){
	document.write('Executando...<br>')
}


//execução programada do temporizador. 1000 vale 1 segundo

//setInterval(acao, 1500);  // Executa infinitamente

//setTimeout(acao, 1500); // Executa 1x


//--------------------------Parar setInterval 

var timer=setInterval(acao, 1500);
//clearInterval(timer);  // Parar contagem infinita

function parar(){
	clearInterval(timer);
}

setTimeout(parar, 5000);
