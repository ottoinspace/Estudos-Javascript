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

    const imc = getImc(peso, altura);
    const NivelImc = getNivelImc(imc);

    const msg = `Seu IMC e ${imc} (${NivelImc})`;

    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesudade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel [5]; 
    if (imc >= 34.9) return nivel [4];
    if (imc >= 29.9) return nivel [3];
    if (imc >= 25.9) return nivel [2]; 
    if (imc >= 18.5) return nivel [1];
    if (imc < 18.5) return nivel [0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
  
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
  
    p.innerHTML = msg;
    resultado.appendChild(p);
  }
  