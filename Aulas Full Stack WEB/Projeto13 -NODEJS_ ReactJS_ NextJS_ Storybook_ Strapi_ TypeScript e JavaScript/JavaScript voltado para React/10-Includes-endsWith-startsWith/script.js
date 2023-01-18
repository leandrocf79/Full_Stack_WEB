//Visualize no navegador. F12


//Includes
//endsWith
//startsWith

//--------------------------------------------------includes

//Para verificar se já existe algum valor use include

let nomes = ['Girafales', 'Dona Florinda', 'Seo Madruga', 'Chiquinha'];

//nomes.includes('Lucas');

console.log(nomes.includes('Lucas'));
console.log(nomes.includes('Seo Madruga'));


//-----------
let op = 'girafales'; 

if(nomes.includes( op )){
	console.log(`${op} está na lista.`);
}else{
	console.log(`O nome ${op} NÃO foi encontrado.`);
};




//-------------
console.log(`Função:`);


function buscaNomes( operador ){

	if(nomes.includes( operador )){
	console.log(`"${operador}" está na lista.`);
	}else{
	console.log(`O nome "${operador}" NÃO foi encontrado.`);
};
};


let buscar;
buscar = buscaNomes('Dona Florinda');
buscar = buscaNomes('Seo Barriga', 'Chiquinha');
buscar = buscaNomes('Chiquinha');



//--------------------------------------------------endWith and startsWith

//verifica o final da palavra, como ela termina

console.log('Usando endWith:');

let name = 'Ringo';

console.log(name.endsWith( 'go' )); // Termina com "go"?
console.log(name.endsWith( 'ngo' )); // Termina com "ngo"?
console.log(name.endsWith( 'cha' )); // Termina com "go"?


console.log('Usando startsWith:');
console.log(name.startsWith( 'rin' )); // Termina com "go"?
console.log(name.startsWith( 'Rin' )); // Termina com "go"?
console.log(name.startsWith( 'go' )); // Termina com "go"?


