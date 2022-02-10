//crie um código que ajude um petshop a dizer se o pet está com o peso ideal de acordo com a classificação abaixo: 
//- Abaixo de 4kg = "Abaixo do Peso"
//- Maior que 10kg = "Acima do Peso"
//- Se tiver entre esses dois valores = "Peso normal"

var pesoDoAnimal = 7

if (pesoDoAnimal > 10){
    console.log("Acima do peso")
}
else if(pesoDoAnimal <= 10 && pesoDoAnimal >= 4){
    console.log("Peso normal")
}
else{
    console.log("Abaixo do peso")
}
