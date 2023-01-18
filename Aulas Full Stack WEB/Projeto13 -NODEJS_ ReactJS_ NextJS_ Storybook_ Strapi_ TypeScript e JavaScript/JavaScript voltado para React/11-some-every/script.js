//Visualize no navegador. F12


// some  e every

// Verificar se há pelo menos 1


let nomes = ['Girafales', 'Girafales', 'Dona Florinda', 'Seo Madruga', 'Chiquinha'];

//nomes.some(buscar => buscar === 'Girafales');
console.log('some:');

console.log(nomes.some(buscar => buscar === 'Girafales'));
console.log(nomes.some(buscar => buscar === 'Maria'));




// Verificar com every é para saber se TODOS tem uma caracteristica em comum

//array de objetos
let names = [
	{name:'Girafales', idade: 38},
	{name:'Dona Florinda', idade: 19}, 
	{name:'Seo Madruga', idade: 57}, 
	{name:'Chiquinha', idade: 14}
];
console.log(names);

console.log('every:');

//nomes.every(busca => busca.idade >= 18); // Buscar por TODOS MAIORES DE 18 ANOS?     idades >= 18  SERÁ FALSE

console.log(names.every(busca => busca.idade >= 18)); //False
console.log(names.every(busca => busca.idade >= 11)); //True



//---------------
if(names.every(busca => busca.idade >= 18)){
	console.log('TODOS são maiores de 18 anos.');
}else{
	console.log('Existe pelo menos 1 pessoa com idade inferior a 18 anos.');
};