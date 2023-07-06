/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// ja visto
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.definePropertie (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8};
// spread(...)
// const outraCoisa = { ...produto, material: 'porcelana'};

// Object.assign
// const outraCoisa = Object.assign({}, produto, {material: 'porcelana'});

// Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
