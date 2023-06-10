//capturar evento do submit
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado ('peso Invalido', false);
        return;
    } 

    if (!altura) {
        setResultado ('Altura invalida', false);
        return;
    }


    console.log('Cheguei aqui')
    //continua o codigo
});

function criaP () {
    const p = document.createElement('p');
    return p
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
  
    const p = criaP();
  
    p.innerHTML = msg;
    resultado.appendChild(p);
  }
  