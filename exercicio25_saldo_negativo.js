//crie um programa que exiba em quantos meses a empresa teve o saldo negativo

var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var contador = 0

for (var i = 0; i < listaDeGanhos.length; i++){
    if(listaDeGanhos[i] < 0){
        contador++
    }
}
console.log("Quantidade de valores negativos: " + contador)
