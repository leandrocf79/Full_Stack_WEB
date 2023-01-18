//Visualize no navegador. F12

//Spread Operator (  ...  )

function cadastroPessoa(info){
	return novosDados = {
		...info,
		cargo:"Programador",
		status:5,
		cod:'645645'

	};

};

//passar os objetos
//cadastroPessoa({nome:'Maria', sobrenome:'Pereira', anoInicio:1998});
console.log(cadastroPessoa({nome:'Maria', sobrenome:'Pereira', anoInicio:1998}));


//Visualize no navegador. F12