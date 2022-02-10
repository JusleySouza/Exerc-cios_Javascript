//crie um programa que calcule o lucro total de uma empresa

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

for (var i = 0; i < listaDeLucro.length; i++){
    lucroTotal += listaDeLucro[i]
}
console.log(lucroTotal)