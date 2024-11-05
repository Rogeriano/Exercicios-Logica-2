//Faça um Programa que peça dois números e imprima o maior deles.
var num1 = parseFloat(prompt("Digite um numero: "))
var num2 = parseFloat(prompt("Digite outro numero: "))

if(num1 > num2){
    console.log("O número ",num1," é maior que o número ", num2)
    alert("O número "+ num1 +" é maior que o número "+ num2)
}else if (num1==num2){ 
    console.log("O número ",num1," e ", num2, "são identicos")
    alert("O número "+num1+" e "+ num2+ " são identicos")
    
}else{
    console.log("O número ",num2," é maior que o número ", num1)
    alert("O número "+ num2 +" é maior que o número "+ num1)
}