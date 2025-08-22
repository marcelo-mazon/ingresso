let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar() {
    // obtém o tipo de cadeira selecionada
    const cadeiraEscolhida = document.getElementById('tipo-ingresso').value;    

    // obtém quantidade de ingressos escolhida
    const entradaQuantidade = document.getElementById('qtd');
    const quantidade = Number(entradaQuantidade.value);

    // valida a quantidade escolhida
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida (maior que 0)');
        return;
    }

    // valida se há ingressos suficientes para o tipo de cadeira escolhida
    if ((cadeiraEscolhida == 'inferior' && quantidade > cadeiraInferior) ||        
        (cadeiraEscolhida == 'superior' && quantidade > cadeiraSuperior) ||
        (cadeiraEscolhida == 'pista' && quantidade > pista)) {
        alert('A quantidade disponível para esse tipo de ingresso é inferior ao número escolhido!');
        return;
    }

    // atualiza o número de ingressos disponíveis
    if (cadeiraEscolhida == 'pista') {
        pista -= quantidade;
        document.getElementById('qtd-pista').textContent = pista;
    } else if (cadeiraEscolhida == 'superior') {
        cadeiraSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = cadeiraSuperior;
    } else if (cadeiraEscolhida == 'inferior') {
        cadeiraInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = cadeiraInferior;
    }

    // exibe uma mensagem de sucesso (opcional, mas melhora a experiência do usuário)
    alert(`Compra realizada com sucesso! ${quantidade} ingresso(s) para ${cadeiraEscolhida} comprado(s).`);

    // limpa o campo de quantidade
    entradaQuantidade.value = '';
}