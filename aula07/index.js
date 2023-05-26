// nao podemos criar constantes com palavras reservadas como "let let" "let console"
// constante precisam ter nomes significativos (nao e uma boa pratica)
// nao pode comecar o nome de uma constante com um numero
// nao podem conter espacos ou tracos
//case-sensitive(letra maiscula e minicusla fazem a diferena)
// NAO UTILIZE VAR, UTILIZE CONST.
//constante precisa ja ser inicializada de inicio
//nao pode ser modificada
const nome = 'Joao';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero + segundoNumero;
console.log(primeiroNumero, ' + ', segundoNumero, conta);

console.log(typeof segundoNumero);//typeof para saber o tipo da constante