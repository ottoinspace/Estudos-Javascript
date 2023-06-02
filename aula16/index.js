//arrays

const nome = 'Luiz Otavio'
console.log(nome[10]);

//               0       1        2
let alunos = ['Luiz', 'Maria', 'Joao'];//tentar sempre manter so um tipo de variavel na mesma lista

console.log(alunos);
console.log(alunos[2])

alunos[0] = 'Eduardo';
console.log(alunos)

alunos[3] = 'Luiza';
console.log(alunos)

// alunos[6] = 'bepi'
// console.log = (alunos) nao funciona

//como adicionar sem saber do tamanho do array
//sem funcao
alunos[alunos.length] = 'Carlos';
//com funcao
alunos.push('Fabio');

console.log(alunos)

//adicionar elemento no inicio do array
alunos.unshift('Luiza');
console.log(alunos)

//remover elemento do final
alunos.pop();
console.log(alunos);

//remover elemento do comeco
alunos.shift();
console.log(alunos)

//apagar qualquer indice
delete alunos[1];
console.log(alunos);

//js pode acessar indices nao existentes
console.log(alunos[90]);

//fatiar array
console.log(alunos.slice(0, 2));

//saber se e um array
console.log(alunos instanceof Array);

//e possivel fazer uma array mudar para uma constante 