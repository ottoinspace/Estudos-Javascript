//em classes ja se pode colocar a funcao direto dentro dela que ela ira automaticamente para o proto do objeto

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.noem} ${this.sobrenome} esta falando`)
    }
}

const p1 = new Pessoa('Otto', 'Pine');
console.log(p1);