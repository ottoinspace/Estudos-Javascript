function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject
const promises =  [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi('Promise 4', rand(1, 5))
];

//Promise.all
Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro) {
        console.log('ERROR: ', erro);
    });
//Promise.race
Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro) {
        console.log('ERROR: ', erro);
    });
//Promise.resolve
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    }else {
        return esperaAi("Baixei a pagina", 3000);
    }
}

baixaPagina()
    .then(dadosPaginas => console.log(dadosPaginas))
    .catch(e => console.log(e));
//Promise.reject
function baixaPagina2() {
    const emCache = true;
    
    if(emCache) {
        return Promise.reject('Pagina em cache');
    }else {
        return esperaAi("Baixei a pagina", 3000);
    }
}
    
baixaPagina2()
    .then(dadosPaginas => console.log(dadosPaginas))
    .catch(e => console.log('ERROR: ', e));