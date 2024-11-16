/*Faça um Programa que peça um número e informe se o número é 
inteiro ou decimal. Dica: utilize uma função de arredondamento (pesquise meu caro, dev).*/


var numero = parseFloat(prompt("Digite um número:"))


if (numero == parseInt(numero)) {
    alert(numero + " é um número INTEIRO.")
} else {
    alert(numero + " é um número DECIMAL.")
}