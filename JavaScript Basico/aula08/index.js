const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

//template string

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`)
console.log(`Tem ${alturaEmM} de altura e seu IMC e de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);