// argumentos que sustentan todos os argumentos enviados
// function funcao(a, b = 2, c = 4) {
//     // b = b || 0; //b obteve um valor padrao //forma antiga
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = {nome: 'luiz', sobrenome: 'otavio', idade: 20};
// funcao(obj);

// function funcao ([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Luiz Otavio', 'Miranda', 30]);

function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50); // arguments nao tem em arrow function