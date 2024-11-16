/*Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:
a)	A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
b)	A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
c)	A mensagem "Aprovado com Distinção", se a média for igual a10. */



    var nota1 = parseFloat(prompt("Digite a primeira nota:"))
    var nota2 = parseFloat(prompt("Digite a segunda nota:"))
    var nota3 = parseFloat(prompt("Digite a terceira nota:"))

   
    var media = (nota1 + nota2 + nota3) / 3

    if (media == 10) {
        alert("Aprovado com Distinção! Média: " + media)
    } else if (media >= 7) {
        alert("Aprovado! Média: "  + media )
    } else {
        alert("Reprovado! Média: " + media)
    }
