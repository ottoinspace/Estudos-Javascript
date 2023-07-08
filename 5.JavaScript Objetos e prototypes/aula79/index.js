const falar = {
    fala() {
        console.log(`'${this.nome} esta falando.`);
    }
}

const pessoaProtype = {...falar};
//const pessoaProtype = Object.assign({}, falar);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaProtype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1);