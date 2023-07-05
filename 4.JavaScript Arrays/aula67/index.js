// reduce - reduzir um array em um unico elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];


//some todos os numeros
// const total = numeros.reduce(function(acumulador, valor) {
//     acumulador += valor;
//     return acumulador;
// }, 0);
// console.log(total);

// retorne um array com os pares
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);
// console.log(total);

// retorne um array com o dobro do valor
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);
// console.log(total);




// retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },  
    {nome: 'Eduardo', idade: 55 }, 
    {nome: 'Leticia', idade: 19 }, 
    {nome: 'Rosana', idade: 32 }, 
    {nome: 'Wallace', idade: 47 }, 
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
});

console.log(maisVelha)