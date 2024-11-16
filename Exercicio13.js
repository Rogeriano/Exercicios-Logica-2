/*Faça um Programa que leia um número e exiba o dia correspondente da semana. 
	Exemplo, se o usuário digitar o número “1”, o programa tem que retornar “1-Domingo” e assim sucessivamente. 
	Se o usuário digitar outro valor, o programa deverá retornar “valor inválido”. faça em javascript  com if e else */



var numero = parseInt(prompt("Digite um número de 1 a 7 para saber o dia da semana:"))

if (numero == 1) {
    console.log("Domingo")
    alert("Domingo")
} else if (numero == 2) {
    console.log("Segunda-feira")
    alert("Segunda-feira")
} else if (numero == 3) {
    console.log("Terça-feira")
    alert("Terça-feira")
} else if (numero == 4) {
    console.log("Quarta-feira")
    alert("Quarta-feira")
} else if (numero == 5) {
    console.log("Quinta-feira")
    alert("Quinta-feira")
} else if (numero == 6) {
    console.log("Sexta-feira")
    alert("Sexta-feira")
} else if (numero == 7) {
    console.log("Sábado")
    alert("Sábado")
} else {
    console.log("Valor inválido")
    alert("Valor inválido")
}