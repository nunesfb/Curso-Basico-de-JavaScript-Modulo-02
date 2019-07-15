function Produto(nome, descricao, quantidade, valor) {
    var produto = new Object();
    produto.nome = nome;
    produto.descricao = descricao;
    produto.quantidade = quantidade;
    produto.valor = valor;

    console.log("Nome: " + produto.nome);
    console.log("Descrição: " + produto.descricao);
    console.log("Quantidade: " + produto.quantidade);
    console.log("Valor: " + produto.valor);

    produto.dataValidade = "12/12/2020";
    console.log(produto);
}
