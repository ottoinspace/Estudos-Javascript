function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Joao');

console.dir(funcao(), funcao2());

//closure habilidade de acessar seu escopo lexico