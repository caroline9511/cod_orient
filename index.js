var leitor = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(motor, rodas, marca, cor) {
        this.motor = motor;
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
    }
    Carro.prototype.dirigir = function () {
        console.log("estou dirigindo meu ".concat(this.marca));
    };
    Carro.prototype.limpar = function () {
        console.log("estou limpando meu ".concat(this.marca));
    };
    Carro.prototype.consertar = function () {
        console.log("estou consertando meu ".concat(this.marca, ",").concat(this.motor));
    };
    return Carro;
}());
var marcaCarro = leitor.question('qual a marca do seu carro?');
var novoCarro = new Carro(1.6, 15, 'Toyota', 'preto');
console.log(novoCarro.marca);
var motor = leitor.question('qual a potência do seu carro?');
console.log(novoCarro.motor);
var rodagem = leitor.question('qual o diâmetro da roda do seu carro?');
console.log(novoCarro.rodas);
var cor = leitor.question('qual a cor do seu carro?');
console.log(novoCarro.cor);
novoCarro.dirigir();
novoCarro.limpar();
novoCarro.consertar();
var doadores = [];
// Função principal
var menu = true;
while (menu) {
    var opcao = leitor.question('1-dirigir, 2- limpar, 3-consertar');
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
            menu = false;
    }
}
// Chamada da função principal para iniciar o program
