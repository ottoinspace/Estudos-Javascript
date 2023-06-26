// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

//... rets, ... spread
// const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [um, , tres, , cinco, , sete] = numero;
// console.log(um, tres, cinco, sete);

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);