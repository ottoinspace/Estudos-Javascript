// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mosra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: true // pode reconfigurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true 
         }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));