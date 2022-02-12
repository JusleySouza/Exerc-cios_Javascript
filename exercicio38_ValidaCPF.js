// escreva um algoritmo que valide um cpf

var cpf = validaCpf("576.524.020-85")

function validaCpf(cpf){
    if(cpf.match(/^\d{3}.\d{3}.\d{3}-\d{2}$/)) {
        return "CPF VÁLIDO!"
    } else {
        return "CPF INVÁLIDO!";
    }
}

console.log(cpf)