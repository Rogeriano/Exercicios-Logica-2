
//Faça um programa para a leitura de duas notas parciais de um aluno.
//O programa deve calcular a média alcançada por aluno e apresentar:
//	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//	A mensagem "Reprovado", se a média for menor do que sete;
//	A mensagem "Aprovado com Distinção", se a média for igual a dez.
var nota1 = parseInt(prompt("Digite sua primeira nota"))
var nota2 = parseInt(prompt("Digite sua segunda nota"))

var media = (nota1 + nota2) / 2

if (media >= 7 && media < 10) {
    console.log("Você foi Aprovado")
    alert("Você foi Aprovado")
}
else if (media == 10) {
    console.log("Você foi Aprovado com Distinção")
    alert("Você foi Aprovado com Distinção")
}
else if (media > 10) {
    console.log("Erro no valor digitado")
    alert("Erro no valor digitado")

}else {
    console.log("Você foi Reprovado")
    alert("Você foi Reprovado")
}