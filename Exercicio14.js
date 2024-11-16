/*nFaça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. 

MÉDIA DE APROVEITAMENTO / CONCEITO (A, B, C e etc.)
•	Média entre 9.0 e 10.0 – Nota: A; 
•	Média entre 7.5 e   9.0 – Nota: B; 
•	Média entre 6.0 e   7.5 – Nota: C; 
•	Média entre 4.0 e   6.0 – Nota: D; 
•	Média entre 4.0 e   0.0 – Nota: E; 
 
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO”, se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.*/


var nota1 = parseFloat(prompt("Digite a primeira nota:"))
var nota2 = parseFloat(prompt("Digite a segunda nota:"))

var media = (nota1 + nota2) / 2

var conceito

var situacao

if (media >= 9.0 && media <= 10.0) {
    conceito = "A"
    situacao = "APROVADO"

} else if (media >= 7.5 && media < 9.0) {
    conceito = "B"
    situacao = "APROVADO"

} else if (media >= 6.0 && media < 7.5) {
    conceito = "C"
    situacao = "APROVADO"

} else if (media >= 4.0 && media < 6.0) {
    conceito = "D"
    situacao = "REPROVADO"

} else if (media >= 0.0 && media < 4.0) {
    conceito = "E"
    situacao = "REPROVADO"

} else {
    console.log("Notas inválidas!")
    conceito = "Inválido"
    situacao = "Inválido"
}

console.log("Notas: " + nota1 + " | " + nota2)
console.log("Média: " + media)
console.log("Conceito: " + conceito)
console.log("Situação: " + situacao)

alert("Notas: " + nota1 + " | " + nota2 + "\n" +
      "Média: " + media +"\n" +
      "Conceito: " + conceito +"\n" +
      "Situação: " + situacao +"\n" 
)