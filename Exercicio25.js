/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a.	"Telefonou para a vítima?"
b.	"Esteve no local do crime?"
c.	"Mora perto da vítima?"
d.	"Devia para a vítima?"
e.	"Já trabalhou com a vítima?"
 O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
	Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita". 
	Entre 3 e 4 como "Cúmplice";
	5 como "Assassino". 
	Caso contrário, ele será classificado como “Inocente".*/

var telefonou = prompt("Telefonou para a vítima? (sim/não)")
var esteveNoLocal = prompt("Esteve no local do crime? (sim/não)")
var moraPerto = prompt("Mora perto da vítima? (sim/não)")
var deviaParaVitima = prompt("Devia para a vítima? (sim/não)")
var trabalhouComVitima = prompt("Já trabalhou com a vítima? (sim/não)")


var respostasPositivas = 0


if (telefonou == "sim") respostasPositivas++
if (esteveNoLocal == "sim") respostasPositivas++
if (moraPerto == "sim") respostasPositivas++
if (deviaParaVitima == "sim") respostasPositivas++
if (trabalhouComVitima == "sim") respostasPositivas++

var classificacao

if (respostasPositivas == 2) {
    classificacao = "Suspeita"
} else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
    classificacao = "Cúmplice"
} else if (respostasPositivas == 5) {
    classificacao = "Assassino"
} else {
    classificacao = "Inocente"
}

alert("Classificação: " + classificacao)
