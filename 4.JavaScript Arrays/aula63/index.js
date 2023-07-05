const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];


// nome.splice(indice, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-2, 1);

//shift
// const removidos = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otavio');

//unshift
nomes.splice(0, 0, 'Luiz', 'Otavio');

console.log(nomes);