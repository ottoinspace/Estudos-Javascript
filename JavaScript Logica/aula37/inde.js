const nome = ['Luiz', 'Otavio', 'Henrique'];

//for classico - geralmente com iteraveis (arrays ou strings)
console.log('------for-------')
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

//for in - retorna o indice ou chave (string, array ou objetos)
console.log('-----for in-----');
for (let i in nome) {
    console.log(nome[i]);
}

//for of - retorna o valor em si (iteravaie, arrays ou strings)
console.log('-----for of-----');
for (let valor of nome) {
    console.log(valor);
}

console.log('-----forEach-----');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})