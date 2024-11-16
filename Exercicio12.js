/*Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 8% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

Desconto do IR:
•	Salário Bruto até 2.259,20 (inclusive) - isento
•	Salário Bruto até 1500 (inclusive) - desconto de 7,5%
•	Salário Bruto até 2500 (inclusive) - desconto de 15%
•	Salário Bruto acima de 2500 - desconto de 22,4% 
•	Salário Bruto acima de 2500 - desconto de 27,5% 

Imprima na tela as informações. */


var valor = parseFloat(prompt("Digite o valor da sua hora: R$"))
var horas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"))

var IR = 0
var salario_Bruto = valor * horas





if (salario_Bruto <= 2259.20) {
    IR = 0
} else if (salario_Bruto <= 1500) {
    IR = salario_Bruto * 0.075
} else if (salario_Bruto <= 2500) {
    IR = salario_Bruto * 0.15
} else if (salario_Bruto > 2500 && salario_Bruto <= 3500) {
    IR = salario_Bruto * 0.224
} else {
    IR = salario_Bruto * 0.275
}

var Sindicato = salario_Bruto * 0.03

var fgts = salario_Bruto * 0.08

var salarioLiquido = salario_Bruto - IR - Sindicato

console.log("Salário Bruto: R$ " + salario_Bruto)
console.log("Desconto IR: R$ " + IR)
console.log("Desconto Sindicato (3%): R$ " + Sindicato)
console.log("FGTS (8% - Não descontado): R$ " + fgts)
console.log("Salário Líquido: R$ " + salarioLiquido)


alert("Salário Bruto: R$ " + salario_Bruto + "\n" +
    "Desconto IR: R$ " + IR + "\n" +
    "Desconto Sindicato (3%): R$ " + Sindicato + "\n" +
    "FGTS (8% - Não descontado): R$ " + fgts + "\n" +
    "Salário Líquido: R$ " + salarioLiquido);