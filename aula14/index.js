let num1 = 1; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2); //usando cast
console.log(typeof num1);

//alterando o valor para sempre em uma string
num1 = num1.toString();

//arrendondando numeros
let num3 = 10.9103847107212;
console.log(num3.toFixed(2));

//saber se o numero e inteiro
console.log(Number.isInteger(num2));

//saber se e um numeroo
let temp = num1 * 'ola'; //nao e boa pratica usar string para conta
console.log(Number.isNaN(temp)) 
