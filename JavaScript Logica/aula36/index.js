//
// const frutas = ['Pera', 'Maca', 'uva'];

// for (let index in frutas) {
//     console.log(frutas[index]);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}

for(let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}