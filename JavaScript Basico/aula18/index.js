//aula introdutoria de objetos
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);
//ainda continua complicado por ter que criar varios objetos

//usando funcao
// function criaPessoa (nome, sobrenome, idade){
//     return{
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa('Otto', 'Pine', 32);
// const pessoa3 = criaPessoa('Carlos', 'Yuri', 55);
// const pessoa4 = criaPessoa('Dante', 'Moura', 44);
// const pessoa5 = criaPessoa('Carla', 'Silva', 82);

// console.log(pessoa1.nome, pessoa1.sobrenome)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual e ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();