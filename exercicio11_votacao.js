//escreva um código que informe ao usuário se ele é obrigado a votar ou se ele tem voto opcional. 

var idade = 15

if(idade >= 18){
    console.log("Você é obrigado a votar")
}
else if(idade < 18 && idade >= 16) {
    console.log("Seu voto é opcional")
}
else{
    console.log("Não pode votar ainda")
}
