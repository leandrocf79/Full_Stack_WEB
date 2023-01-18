//Visualize no navegador. F12


// função 	MAP   vai percorrer todos os itens

const lista = [32,3,2,3,4,5,6,7,9];
console.log(" Lista original:  "+ lista);

const newList = lista.map(function (item){
	return item * 3;    	// vai passar por cada item e multiplicar por 3	

});

console.log(newList);



//--------------------------------------------map

// utilizando índice


const newList2 = lista.map(function (item, index){
	return item + index;    	// vai passar por cada item e SOMAR pelo número de índice	

});

console.log(newList2);



//--------------------------------------------Soma os números.

const soma = lista.reduce(function(total, proximo){
	return total + proximo;
});

console.log(soma);



//--------------------------------------------find
const find = lista.find(function(item){
	return item === 5; 							//       " === "     tem 2 comparações, valor e tipo, exemplo: inteiro e igual a 5. 
});

console.log(find);