//crie um código para ajudar os usuários a saber se eles podem ir em uns dos brinquedos no parque. As regras são:
//- Ser maior que 1,50m ou ter 21 anos ou mais.

var usuarioAltura = 1.32
var usuarioIdade = 15

if (usuarioAltura > 1.50 || usuarioIdade >= 21){
    console.log("Você pode subir.")
}
else{
    console.log("Desculpe, você não atende os requisitos para usar o brinquedo.")
}
