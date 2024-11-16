/*Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.*/


var ano = parseInt(prompt("Digite um ano para verificar se é bissexto:"))


    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        console.log(ano + " é um ano bissexto.")
        alert(ano + " é um ano bissexto.")
    } else {
        console.log(ano + " não é um ano bissexto.")
        alert(ano + " não é um ano bissexto.")
    }
