var leitor = require('readline-sync')

class Carro{
    motor: number
    rodas: number
    marca: string
    cor: string

    constructor(motor: number, rodas: number, marca: string, cor: string){
        this.motor = motor
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
    }
    dirigir(){
        console.log(`estou dirigindo meu ${this.marca}`)
    }
    limpar(){
        console.log(`estou limpando meu ${this.marca}`)
    }
    consertar(){
        console.log(`estou consertando meu ${this.marca},${this.motor}`)
    }
}  

var marcaCarro= leitor.question('qual a marca do seu carro?')
const novoCarro = new Carro(1.6, 15, 'Toyota', 'preto')
console.log(novoCarro.marca)
var motor= leitor.question('qual a potência do seu carro?')
console.log(novoCarro.motor)
var rodagem= leitor.question('qual o diâmetro da roda do seu carro?')
console.log(novoCarro.rodas)
var cor= leitor.question('qual a cor do seu carro?')
console.log(novoCarro.cor)

novoCarro.dirigir()
novoCarro.limpar()
novoCarro.consertar()

let menu = true
while(menu){
        const opcao: number=leitor.question('1-dirigir, 2- limpar, 3-consertar')
        switch (opcao) {
            case 1:
                novoCarro.dirigir();
                break;
            case 2:
                novoCarro.limpar();
                break;
            case 3:
                novoCarro.consertar();
                break;
            case 4:
                console.log('saindo');
                menu=false
           
        }
    }


// Chamada da função principal para iniciar o program