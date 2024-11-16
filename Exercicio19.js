/*Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades dele.
Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
•	326 = 3 centenas, 2 dezenas e 6 unidades
•	12 = 1 dezena e 2 unidades testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16 */

var numero = parseInt(prompt("Digite um número inteiro menor que 1000:"))

var centenas = 0, dezenas = 0, unidades = 0
var resultado = ""

centenas = (numero - (numero % 100)) / 100
dezenas = ((numero % 100) - (numero % 10)) / 10
unidades = numero % 10

var i = 0

if (centenas > 0) {
    resultado += centenas + " centena"
    i++
}

if (dezenas > 0) {
    if (i > 0) {
        resultado += ", "
    }
    resultado += dezenas + " dezena"
    i++
}

if (unidades > 0) {
    if (i > 0) {
        resultado += " e "
    }
    resultado += unidades + " unidade"
}

if (numero == 0) {
    resultado = "0 unidade"
}

alert(resultado)


