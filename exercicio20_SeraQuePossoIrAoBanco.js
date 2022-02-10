//crie um código que ajude os usuários a saber se podem ir ao banco, sendo que não funciona aos finais de semana.
// Dias da semana pro sistema: segunda, terca, quarta, quinta, sexta, sabado e domingo.

var diaSemana = "terca"

if (diaSemana == "segunda" || diaSemana == "terca" || diaSemana == "quarta"
    || diaSemana == "quinta" || diaSemana == "sexta" && diaSemana != "sabado" 
    && diaSemana != "domingo"){
        console.log("Você pode ir ao banco")
}
else{
    console.log("O banco está fechado, tente outro dia")
}
