/*Faça um Programa que peça um número inteiro e determine se ele é par ou ímpar. Dica: utilize o operador módulo (resto da divisão).*/


var numero = parseInt(prompt("Digite um número inteiro:"))

if (numero % 2 == 0) {
    alert(numero + " é um número PAR.")
} else {
    alert(numero +" é um número ÍMPAR.")
}