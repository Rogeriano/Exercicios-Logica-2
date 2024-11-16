//Faça um Programa que leia três números e mostre o maior e o menor deles.
var num1 = parseFloat(prompt("Digite o primeiro número:"))
var num2 = parseFloat(prompt("Digite o segundo número:"))
var num3 = parseFloat(prompt("Digite o terceiro número:"))



if(num1 > num2 && num1 > num3){
    maior = num1
}
else if(num2 > num1 && num2 > num3){
    maior = num2
}
else if(num3 > num1 && num3 > num2){
    maior = num3
}
else if(num1 == num2 == num3){
    alert("Número são Identicos ")

}
else{
    alert("Número invormato Invalido")
}


if(num1 < num2 && num1 < num3){
    menor = num1
}
else if(num2 < num1 && num2 < num3){
    menor = num2
}
else if(num3 < num1 && num3 < num2){
    menor = num3
}

alert("O maior número é: "+ maior)
alert("O menor número é: "+ menor)
alert("Número são Identicos "+ igual )



