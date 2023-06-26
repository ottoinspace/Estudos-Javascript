//Escreva uma funcao que recebe um numero e retone o seguinte:
//numero e divisivel por 3 = Fizz
//numero e divisivel por 5 = Buzz
//numero e divisivel por 3 e 5 = FizzBuzz
//numero nao e divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero e realmente um numero
//use a funcao com nuemros de 0 a 100
function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0){
        return 'FizzBuzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    }
    return numero
}

console.log('a', fizzBuzz('a'));
for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}