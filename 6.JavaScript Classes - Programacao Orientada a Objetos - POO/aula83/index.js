class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' ja ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' ja desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositoEletronico  {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, voce alterou o metodo ligar');
    }
}

const s1 = new Smartphone('Iphone', 'Rosa', '13plus');
console.log(s1);