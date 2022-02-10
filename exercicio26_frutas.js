//crie um programa que de acordo com a fruta que o usuário busca 
//informe se existe a fruta na lista ou não!

var listaDeFrutas = [ "Uva", "Banana", "Manga", "Cajá",
"Pinha"]
var busca = 'Banana'

for (var i = 0; i < listaDeFrutas.length; i++){
    if(busca == listaDeFrutas[i]){
        console.log("Sim, temos a fruta " + busca + " disponivel!!")
    }
}