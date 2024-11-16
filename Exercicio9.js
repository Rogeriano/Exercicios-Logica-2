//Faça um Programa que leia três números e mostre-os em ordem decrescente.

var num1 = parseInt(prompt("Digite o primeiro número:"))
var num2 = parseInt(prompt("Digite o segundo número:"))
var num3 = parseInt(prompt("Digite o terceiro número:"))


if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
    console.log(num1, num2, num3)

    } else {
    console.log(num1, num3, num2)
  
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
    console.log(num2, num1, num3)
 
    } else {
    console.log(num2, num3, num1)
    
    }
} else {
    if (num1 >= num2) {
    console.log(num3, num1, num2)
    
    } else {
    console.log(num3, num2, num1)
    
    }
}