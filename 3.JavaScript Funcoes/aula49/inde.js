//declaracao de funcao (function hoisting)
falaOi();
function falaOi(){
    console.log('oie');
}

//fist-class objects (objetos de primeira classe)

const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

// arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    fala: function() {
        console.log('Estou falando...');
    }
};