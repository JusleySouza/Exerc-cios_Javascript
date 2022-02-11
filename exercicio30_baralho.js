//Crie um programa que procure a palavra Rei nas cartas de um baralho adicionadas a uma lista

var baralho = ["Rainha", "Copas", "Rei", "Espadas"]

for (var i = 0; i < baralho.length; i++){
    if( baralho[i] == "Rei"){
        console.log("Encontrei o Rei!")
        break
    }
}