const verdadeira = true;

//Let tem escopo de bloco {... bloco}
//var so tem escopo de funcao

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otavio';//criando
    var nome2 = 'Rogerio';//redeclarando
    console.log(nome, nome2);

    if (verdadeira){
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);

var sobrenome = 'miranda';

function falaOi(){
    var nome2 = 'Ronaldo';
    console.log(`${nome2} ${sobrenome}`);
}

falaOi();
