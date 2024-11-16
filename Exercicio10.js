//Faça um Programa que pergunte em que turno você estuda.
//Peça para digitar “M-matutino” ou “V-Vespertino” ou “N- Noturno”.
//Imprima a mensagem "Bom Dia!" ou "Boa Tarde!" ou "Boa Noite!" ou "Valor
//Inválido!" de acordo com a opção selecionada.

var turno = prompt("Em que turno você estuda? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno: ")


if (turno == 'M' || turno == 'm') {
    console.log("Bom Dia!")
    alert("Bom Dia!")
} else if (turno == 'V' || turno == 'v') {
    console.log("Boa Tarde!")
    alert("Boa Tarde!")
} else if (turno == 'N' || turno == 'n') {
    console.log("Boa Noite!")
    alert("Boa Noite!")
} else {
    console.log("Valor Inválido!")
    alert("Valor Inválido!")
}
