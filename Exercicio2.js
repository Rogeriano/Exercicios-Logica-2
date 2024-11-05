//Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

var valor = parseFloat(prompt("Digite um valor"))

if (valor < 0){
    console.log("Esse é um número negativo ")
    alert("Esse é um número negativo ")
}else{
    console.log("Esse é um número positivo ")
    alert("Esse é um número positivo ")
}
