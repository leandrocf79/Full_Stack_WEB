
$(function(){
	/*
	$('[name=entrada]').on('cut', function(){
		//focus, blur, change, select
		//copy, paste, cut
		console.log('cut')
	})*/

	//[name=entrada], [name=idade]
	/*$('[name=termo]').on('blur', function(){
		//focus, blur, change
		console.log('blur')
	})
	$('[name=formulario]').on('submit', function(e){
		//submit
		e.preventDefault()
		console.log('submit')
	})
	$('body').on('keydown', function(e){
		//input, keydown, keyup, keypress
		console.log('keydown: ' + e.key)
	})*/

	$('[name=enviar]').on('click', function(e){
		e.preventDefault()
		let nome = $('[name=entrada]').val()
		let sexo = $('[name=selecao]').val()
		let idade = $('[name=idade]:checked').val()
		let termo = $('[name=termo]:checked').val()
		console.log(`nome: ${nome}, sexo: ${sexo}, idade: ${idade}, termo: ${termo}`)
	})


})





