//Faça um Programa que verifique se uma letra digitada é "F" ou "M".
//Conforme a letra escrever: “F – Feminino”, ou “M – Masculino” ou Sexo Inválido.

var sexo = prompt("Digite a letra do seu sexo")

if(sexo == "F", sexo == "f"){
    console.log("F - Feminino")
    alert("F - Feminino")
}else if(sexo == "M", sexo == "m"){
    console.log("M - Masculino")
    alert("M - Masculino")

}else{
    console.log("Sexo inválido")
    alert("Sexo inválido")
}
