//Visualize no navegador. F12


//Rest Operator é usado na função (  ...  )
//Sem ele não vão aparecer todos os nomes, faça o teste.



function minhaLista(...nomes){
	console.log(nomes);
};

minhaLista('Louise', 'Leandro', 'Giovanna');

//Visualize no navegador. F12




function meusNum(...num){
	console.log(num);
};

meusNum(1,1,234,4356,567,897,908);





function cadastros(user, ...newUser){ //Rest Operator - se não passar aqui vai virar uma bagunça, faça o teste de tirar.
	let totalUser = [

		//SPREAD OPERATOR

		...user, 
		...newUser  //Se tirar os Spread Operator vai enviar 2 arrays separadas
		];

	return console.log(totalUser);
	
};

let user = ['Elvis', 'Airton Sena'];

let newUser = cadastros(   user,   'Girafales', 'Dona Florinda', 'Seo Madruga', 'Chiquinha');



