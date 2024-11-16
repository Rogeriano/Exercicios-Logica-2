//Faça um Programa que leia três números e mostre o maior deles

var num1 = parseFloat(prompt("Digite o primeiro número"))
var num2 = parseFloat(prompt("Digite o segundo número"))
var num3 = parseFloat(prompt("Digite o terceiro número"))

if (num1 > num2 && num1 > num3){
    console.log("O primeiro é o maior entre eles")
    alert("O primeiro é o maior entre eles")
}
else if(num2 > num1 && num2 > num3){
    console.log("O Segundo é o maior entre eles")
    alert("O Segundo é o maior entre eles")
}
else if(num1 == num2 && num1 == num3){
    console.log("Os Três numeros são identicos")
    alert("Os Três numeros são identicos")
    
}else{
    console.log("O terceiro é o maior entre eles")
    alert("O terceiro é o maior entre eles")
}