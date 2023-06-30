//escopo lexico
// a funcao era lembrar sempre aonde a variavel foi declarada

function falaNome() {
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Luiz';
    falaNome();
}

usaFalaNome();