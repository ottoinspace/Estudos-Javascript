//Funcao
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel)

//funcao soma
function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(1, 2));
// console.log(resultado)//nao consigo acessar variaveis que estao dentro da funcao
console.log(soma(3, 4));
console.log(soma(5, 10));

//novos meios de criar uma funcao

const raiz = function (n){
    return n ** 0.5;
};

//const raiz = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(25));