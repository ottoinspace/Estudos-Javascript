// const pessoa ={
//     nome: 'Luiz',
//     sobrenome: 'Otavio'
// };

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otavio';
// pessoa1.idade = 44;
// pessoa1.falarNome = function() {
//     return `${this.nome} esta falando seu nome.`;
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade
// };

// for(let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

// Factory functions / Constructor functions / Classes
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);
