let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar (){
    const maxIgressoPermitido = 0;

    // obtém o tipo de cadeira selecionada
    const cadeiraEscolhida = document.getElementById('tipo-ingresso').value;    

    // obtém quantidade de ingressos escolhida
    const quantidade = Number(document.getElementById('qtd').value);

    // valida a quantidade escolhida
    if (!Number.isInteger(quantidade) || quantidade <= 0){
        alert ('Por favor, insira uma quantidade válida (maior que 0)');
        return;
    }

    // valida se há ingressos suficientes para o tipo de cadeira escolhida



}