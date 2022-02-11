//crie um bingo, onde os números da cartela serão representados por um array
//chamado cartela, e o número sorteado deve ficar em uma variável chamada
//numeroSorteado e vc deve se esse numero existe na cartela

var cartela = [2, 3, 8, 12, 35, 70, 101, 9, 13]
var numerosorteado = 12

for (var i = 0; i < cartela.length; i++){
    if ( numerosorteado == cartela[i]){
        console.log("Encontrei o número!!")
        break
    }
}