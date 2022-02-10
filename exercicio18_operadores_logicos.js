//crie um código que ajude o usuário a saber se ele pode comprar um produto
//ou não. Para acontecer a venda, a quantidade do produto no estoque tem que ser maior
//que zero e o produto está ativo.

var produtoQtd = 5
var produtoAtivo = true

if(produtoQtd > 0 && produtoAtivo == true){
    console.log("Você pode finalizar essa compra")
}
else{
    console.log("Produto não está disponível para compra")
}