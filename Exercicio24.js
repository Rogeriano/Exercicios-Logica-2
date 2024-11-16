/*Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
a)	par ou ímpar;
b)	positivo ou negativo;
c)	inteiro ou decimal.*/

var numero1 = parseFloat(prompt("Digite o primeiro número:"))
var numero2 = parseFloat(prompt("Digite o segundo número:"))
var operacao = prompt("Escolha uma operação: (+, -, *, /)")

var resultado

if (operacao == "+") {
    resultado = numero1 + numero2
} else if (operacao == "-") {
    resultado = numero1 - numero2
} else if (operacao == "*") {
    resultado = numero1 * numero2
} else if (operacao == "/") {
    if (numero2 == 0) {
        alert("Não é possível dividir por zero.")
    } else {
        resultado = numero1 / numero2
    }
} else {
    alert("Operação inválida!")
}

if (resultado != undefined) {
    var parImpar;
    if (resultado % 2 == 0 && resultado != 0) {
        parImpar = "par"
    } else if (resultado % 2 != 0 && resultado != 0) {
        parImpar = "ímpar"
    } else {
        parImpar = "zero"
    }

    var positivoNegativo
    if (resultado > 0 && resultado != 0) {
        positivoNegativo = "positivo"
    } else if (resultado < 0 && resultado != 0) {
        positivoNegativo = "negativo"
    } else if (resultado == 0) {
        positivoNegativo = "zero"
    }

    var inteiroDecimal;
    if (resultado == parseInt(resultado) && resultado != 0) {
        inteiroDecimal = "inteiro"
    } else if (resultado != parseInt(resultado) && resultado != 0) {
        inteiroDecimal = "decimal"
    } else {
        inteiroDecimal = "zero"
    }

    alert("Resultado da operação:" + resultado + "\n" +
          "O resultado é " + " "+ parImpar + " " + positivoNegativo+ " " +inteiroDecimal)
    }
