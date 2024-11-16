/*Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. 
O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
a)	Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores.
•	Informe ao usuário e encerre o programa;

b)	Se o delta calculado for negativo, a equação não possui raízes reais. 
•	Informe ao usuário e encerre o programa;

c)	Se o delta calculado for igual a zero a equação possui apenas uma raiz real
•	informe-a ao usuário;

d)	Se o delta for positivo, a equação possui duas raízes reais; 
•	informe-a ao usuário;*/


var a = parseFloat(prompt("Digite o valor de A :"))

if (a == 0) {
    console.log("A equação não é do segundo grau.")
    alert("A equação não é do segundo grau.")    
}

var b = parseFloat(prompt("Digite o valor de b "))
var c = parseFloat(prompt("Digite o valor de c "))

 var delta = b * b - 4 * a * c

 if (delta < 0) {
     console.log("A equação não possui raízes reais.")
     alert("A equação não possui raízes reais.")
 }


 else if (delta == 0) {
     var raiz = -b / (2 * a);
     console.log("A equação possui uma raiz real: x = " + raiz)
     alert("A equação possui uma raiz real: x = " + raiz)
 }

 
 else {
     var raiz1 = (-b + delta) / (2 * a);
     var raiz2 = (-b - delta) / (2 * a);
     console.log("A equação possui duas raízes reais" )
     alert("A equação possui duas raízes reais" )
 }


