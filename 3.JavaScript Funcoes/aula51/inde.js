// return
// retorna um valor
// terminar funcao

// function criaPessoa (nome, sobrenome) {
//     return {nome, sobrenome}
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// const p2 = {
//     nome: 'joao',
//     sobrenome: 'oliveira'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Ola'); // olaMundo acaba virando uma funcao
// console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));