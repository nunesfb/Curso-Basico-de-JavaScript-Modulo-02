function VerObjeto(nome, idade, profissao) {
    var pessoa = new Object();
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.profissao = profissao;

    console.log(pessoa);
    console.log("Seu nome é " + pessoa.nome);
    console.log("Sua idade é " + pessoa.idade);
    console.log("Sua profissão é " + pessoa.profissao);

    pessoa.salario = 1560.32;
    console.log(pessoa);

    delete pessoa.idade;
    console.log(pessoa);
}

//usando o construtor
//this se refere ao objeto em si
//nao pode adicionar nova propriedade para funcao construtora depois, deve ser nela direto
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}