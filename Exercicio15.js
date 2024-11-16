/* Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se ele é: 
•	equilátero
•	isósceles 
•	escaleno
Dicas:
•	Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
•	Triângulo Equilátero: três lados iguais;
•	Triângulo Isósceles: quaisquer dois lados iguais;
•	Triângulo Escaleno: três lados diferentes;*/



var a = parseFloat(prompt("Digite o primeiro lado do triângulo:"))
var b = parseFloat(prompt("Digite o segundo lado do triângulo:"))
var c = parseFloat(prompt("Digite o terceiro lado do triângulo:"))

 
if (a + b > c && a + c > b && b + c > a){
    if (a == b && b == c){
    console.log("O triângulo é equilátero.")
    alert("O triângulo é equilátero.")
    }
    else if (a == b || a == c || b == c){
    console.log("O triângulo é isósceles.")
    alert("O triângulo é isósceles.")
    }
    else {
    console.log("O triângulo é Escaleno.")
    alert("O triângulo é Escaleno.")
    }
   
   
}

