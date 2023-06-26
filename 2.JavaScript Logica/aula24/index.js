const hora = 78;
if (hora <= 12 && hora > 6){
    console.log('Bom dia!');
} else if (hora > 12 && hora <= 17 ){
    console.log('Boa tarde')
} else if(hora > 17 && hora <= 24){
    console.log('Boa noite')
} else if(hora <= 6 && hora >= 0){
    console.log('Boa madrugada')
} else {
    console.log('Hora invalida')
}