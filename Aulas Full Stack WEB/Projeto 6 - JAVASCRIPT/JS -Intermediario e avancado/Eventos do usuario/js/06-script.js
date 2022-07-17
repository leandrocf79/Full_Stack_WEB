function executar(){
	console.log("Executar")
}

function submit(event){
	//console.log(event)
	if(entrada.value == ""){
		console.log("Digite o nome")
		event.preventDefault() // Evita o comportamento padrão, não deixa enviar a pg até o usuário terminar de preencher os dados
	}
}


const form = document.formulario
const entrada = form.entrada
entrada.addEventListener('input', executar)// Conta digitos e se apagar conta tambem
entrada.addEventListener('cut', executar) //Ctrl-x
entrada.addEventListener('copy', executar) //Ctrl-c
entrada.addEventListener('paste', executar) //Ctrl-v
entrada.addEventListener('select', executar) //Ctrl-a

const selecao = form.selecao
selecao.addEventListener('change', executar) //Conta se trocou Masculino e Feminino

const radio = form.idade
console.log(radio.length)
radio[0].addEventListener('change', executar) //Conta se trocou idade
radio[1].addEventListener('change', executar)

const checkbox = form.termo
checkbox.addEventListener('change', executar)//Conta o aceita termos

form.addEventListener('submit', submit)// salvar. Neste caso tem uma função acima para lembrar o usuário de por o nome
form.addEventListener('reset', executar)// limpar