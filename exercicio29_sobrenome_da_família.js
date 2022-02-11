// crie um programa que imprima o nome dos integrantes de uma familia, juntamente com o sobrenome Macedo,
//exceto o Pedro, pois seu sobrenome é Souza

var nomes = ["Marta", "Rita", "Lucas", "Pedro", "Vinicius"]
var nomeEscolhido = "Pedro"

for (var i = 0; i < nomes.length; i++){
    if(nomeEscolhido != nomes[i]){
        console.log(nomes[i] + " Macedo")
        continue
    }
    else if(nomes[i] == nomeEscolhido){
        console.log(nomes[i] + " Souza")
    }
}