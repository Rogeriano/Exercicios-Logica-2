/*Uma fruteira está vendendo frutas com a seguinte tabela de preços:
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$
25,00, receberá ainda um desconto de 10% sobre este total.
Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg)
de maças adquiridas e escreva o valor a ser pago pelo cliente.*/



var morangoKG = parseInt(prompt("Informe a quantidade em KG de morango"))
var macaKG = parseInt(prompt("Informe a quantidade em KG de maça"))


var descMorango = 2.2
var descMaca = 1.5
var precoMorango = 2.5
var precoMaca = 1.8
var morango
var maca



if (morangoKG > 5) {
    morango = descMorango * morangoKG
    if (macaKG > 5) {
        maca = descMaca * macaKG
    }
}

if (morangoKG <= 5) {
    morango = precoMorango * morangoKG
    if (macaKG <= 5) {
        maca = precoMaca * macaKG
    }
}

var totalKg = morangoKG + macaKG
var valorTotal = maca + morango
if (valorTotal > 25 || totalKg > 8) {
    var total = valorTotal - (valorTotal * 0.10)
} else {
    total = valorTotal
}




alert("O valor a ser vago é: " + total)