//crie um programa que retorne o menor numero, ou se for igual, um deles

var resultado = menorNumero(8,5)

function menorNumero(numeroA, numeroB){
    if (numeroA < numeroB || numeroA == numeroB){
        return numeroA
    }
    else{
        return numeroB
    }
}

console.log(resultado)