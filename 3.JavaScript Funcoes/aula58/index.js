//constructor functions -> retorna objetos
//construtora -> Pessoa (new) (sempre esta em letra maiscula)
function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo');
    }
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');

p2.metodo();
