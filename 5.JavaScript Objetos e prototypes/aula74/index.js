// Construtora -> molde(classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrbenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// instancias
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- pessoa = funcao construtora 
const pessoa2 = new Pessoa('Maria', 'A.'); // <- pessoa = funcao construtora

console.dir(pessoa1);

