//Visualize no navegador. F12


// while
document.write('while');

x=0
while(x<10){
	document.write('<br>'+x+' - ');
	document.write('O valor de "x" é: '+x);
	x++;

}


document.write('<br>Quantidade de intens "x" é: '+x);
document.write('<br><br>');

// for
document.write('for');

for(a=0; a<  7  ; a++){  

	document.write('<br>O valor de "a" é: '+a);
}


document.write('<br>Quantidade de intens "a" é: '+a);
document.write('<br><br>');

//x=5;

for(a=0; a<  x  ; a++){  

	document.write('<br>O valor de "a" é: '+a);
}


document.write('<br>Quantidade de intens "a" baseado em "x" é: '+a);
document.write('<br><br>');



//switch
document.write('switch <br><br>');

//Criar uma função e colocar todo o switch dentro

//y=0;
document.write('Faça seu pedido: <br><br>');
document.write('0 - Sorvete. <br>');
document.write('1 - Água gelada. <br>');
document.write('2 - Chiclete. <br>');
document.write('3 - Suco. <br>');


function valor(){

	y= prompt('Escolha um número para fazer seu pedido: ');

	switch(y){

	case '0': // y vai receber uma string por isso tem que por aspas ou será número
		alert('Escolheu sorvete.');
		break;

	case '1':
		alert('Escolheu água gelada.');
		break;

	case '2':
		alert('Escolheu chiclete.');
		break;	

	case '3':
		alert('Escolheu suco.');
		break;	

	default:
		alert('Não temos essa opção. Tente um número válido.');
		break;	

	}
}

