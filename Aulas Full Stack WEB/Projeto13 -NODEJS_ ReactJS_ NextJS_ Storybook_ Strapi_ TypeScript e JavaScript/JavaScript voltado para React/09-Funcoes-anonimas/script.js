//Visualize no navegador. F12

// Funções Anônimas com REDUCE

function adicionar(...numeros){ //criar uma função anônima
	let total =numeros.reduce(function(total, proximo){
		return total + proximo;
	});
	console.log("1) "+ total);

};


adicionar(1,3,4,5,6,7,8,9);








// MELHORAR ESSE CÓDIGO

function adicionar2(...numeros){ //criar uma função anônima
	let total =numeros.reduce((total, proximo) => {
		return total + proximo;
	});
	console.log("2) "+ total);

};

adicionar2(1,3,4,5,6,7,8,9);






//---------
function adicionar3(...numeros) {
  const total = numeros.reduce((acc, val) => acc + val);  // foi tirado return
  console.log(`3) ${total}`);
};

adicionar3(1, 3, 4, 5, 6, 7, 8, 9);






//---------somar
function adicionar4(...numeros) {
  let total = numeros.reduce((acc, val) => {

  	let soma = acc+val;
  	return soma;
  });  
  console.log(`4) ${total}`);
};

adicionar4(1, 3, 4, 5, 6, 7, 8, 9);




//-----------------------------------------------------------------



function adicionar5(...numeros) {
  if (numeros.length === 0) {
    console.log("Nenhum número foi passado para a função.");
    return;
  }
  
  const total = numeros.reduce((acc, val) => {
    if (typeof val !== "number") {
      console.log(`${val} não é um número.`);
      return acc;
    }
    return acc + val;
  }, 0);
  
  console.log(`Total: ${total}`);
}

adicionar5(1, 3, 4, 5, 6, 7, 8, 9);


/*
Adicionei uma verificação para garantir que pelo menos um número foi passado para a função.
Adicionei uma verificação para garantir que todos os elementos passados para a função são números.
Alterei o nome da função para ser mais descritivo e fácil de entender.
Adicionei uma mensagem de erro mais informativa quando o elemento passado não é um número.
Adicionei uma mensagem de saída mais descritiva para mostrar o resultado.
Adicionei um valor inicial de zero para a função reduce, para garantir que o total comece a partir de zero.
*/






//-----------------------------------------------------------------

function adicionar(...numeros) {
  if (numeros.length === 0) {
    console.log("Nenhum número foi passado para a função.");
    return;
  }
  
  const total = numeros.reduce((acc, val) => {
    if (typeof val !== "number") {
      console.log(`${val} não é um número.`);
      return acc;
    }
    return acc + val;
  }, 0);
  
  console.log(`Total: ${total}`);
  return total;
}

const result = adicionar(1, 3, 4, 5, 6, 7, 8, 9);
console.log(`Resutado: ${result}`);


/*
Adicionado a declaração de retorno na função, para que o resultado possa ser usado em outros lugares do código.
Atribuindo o resultado da função a uma variável e imprimindo essa variavel, para que a informação possa ser facilmente acessada e reutilizada.
Além dessas melhorias, você também pode considerar adicionar validações adicionais, como verificar se o número é um inteiro ou um número positivo, e tratar esses casos de forma apropriada.
*/






//-----------------------------------------------------------------

//Aqui está a versão do código com validações adicionais:



function adicionar7(...numeros) {
  if (numeros.length === 0) {
    console.log("Nenhum número foi passado para a função.");
    return;
  }
  
  const total = numeros.reduce((acc, val) => {
    if (typeof val !== "number") {
      console.log(`${val} não é um número.`);
      return acc;
    }
    if (!Number.isInteger(val)) {
      console.log(`${val} não é um inteiro.`);
      return acc;
    }
    if (val < 0) {
      console.log(`${val} é negativo.`);
      return acc;
    }
    return acc + val;
  }, 0);
  
  console.log(`Total: ${total}`);
  return total;
}

const result = adicionar7(1, 3, 4, 5, 6, 7, 8, 9);
console.log(`Resutado: ${result}`);


/*
Adicionei uma validação adicional para verificar se o número passado é um inteiro, usando o método Number.isInteger().
Adicionei uma validação adicional para verificar se o número passado é positivo.
Dessa forma, a função irá verificar se os valores passados são números inteiros positivos, caso contrário, será informado ao usuário e esses valores serão ignorados no cálculo.
*/


