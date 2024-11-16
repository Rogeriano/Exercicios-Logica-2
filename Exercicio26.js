/*. Um posto está vendendo combustíveis com a seguinte tabela de
descontos:
Álcool:
a)	até 20 litros, desconto de 3% por litro
b)	acima de 20 litros, desconto de 5% por litro
Gasolina:
a)	até 20 litros, desconto de 4% por litro
b)	acima de 20 litros, desconto de 6% por litro
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, Ggasolina), calcule e imprima o valor a ser pago pelo cliente. 
Sabendo-se que o preço do litro da gasolina é R$ 5,50. O preço
do litro do álcool é R$ 3,90.*/





var litros = parseFloat(prompt("Digite a quantidade de litros vendidos:"));
var tipoCombustivel = prompt("Digite o tipo de combustível (A para Álcool, G para Gasolina):").toUpperCase();

var valorTotal
var desconto

if (tipoCombustivel =="A") {

    if (litros <= 20) {

        desconto = 0.03 * precoAlcool
        valorTotal = litros * (precoAlcool - desconto)
    } else {
       
        desconto = 0.05 * precoAlcool
        valorTotal = litros * (precoAlcool - desconto)
    }
} else if (tipoCombustivel == "G") {

    if (litros <= 20) {
  
        desconto = 0.04 * precoGasolina;
        valorTotal = litros * (precoGasolina - desconto)
    } else {

        desconto = 0.06 * precoGasolina
        valorTotal = litros * (precoGasolina - desconto)
    }
} else {
    alert("Tipo de combustível inválido! Digite 'A' para Álcool ou 'G' para Gasolina.")
}


if (valorTotal) {
    alert("Valor a ser pago: R$ " + valorTotal)
}