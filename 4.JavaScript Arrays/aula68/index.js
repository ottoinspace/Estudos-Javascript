//retorne a soma do dobre de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar todos)
const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(obj => obj % 2 === 0)
                            .map(obj => obj * 2)
                            .reduce((ac, valor) => ac += valor, 0);
// const numerosParesDobrados = numerosPares.map(obj => obj * 2);
// const somaDobroNumerosPares = numerosParesDobrados.reduce((acumulador, valor) => {
//     acumulador += valor;
//     return acumulador;
// }, 0);
console.log(numerosPares);