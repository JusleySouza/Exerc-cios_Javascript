//crie um programa que calcule a autonomia de um automovel

var resultado = autonomia(12, 2)

function autonomia(quantidadeDeCombustivel, rendimento){
    return quantidadeDeCombustivel * rendimento
}

console.log("A autonomia do automóvel é: "+ resultado + "Km")