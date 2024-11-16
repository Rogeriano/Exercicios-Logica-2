/*Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida*/

var dia = parseInt(prompt("Digite um dia (dd)"))
var mes = parseInt(prompt("Digite um mês (dd)"))
var ano = parseInt(prompt("Digite um ano (dd)"))
if (dia>1 && dia <= 31 && mes>=1 && mes <=12 && ano>1){
    alert("A data é válida")
}else{

    alert("A data é invalida")
}
