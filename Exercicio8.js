//Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar,
//sabendo que a decisão é sempre pelo mais barato.
let prod1 = parseFloat(prompt("Digite o preço do primeiro produto:"))
let prod2 = parseFloat(prompt("Digite o preço do segundo produto:"))
let prod3 = parseFloat(prompt("Digite o preço do terceiro produto:"))


if (prod1 <= prod2 && prod1 <= prod3) {
    alert("O primeiro produto é o mais barato.")
} else if (prod2 <= prod1 && prod2 <= prod3) {
    alert("O segundo produto é o mais barato.")
} else if (prod3 <= prod1 && prod3 <= prod2) {
    alert("O terceiro produto é o mais barato.")
} else {
    alert("Os preços dos produtos são iguais.")
}