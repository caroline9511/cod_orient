var leitor = require('readline-sync');
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
        console.log("Ol\u00E1 me chamo ".concat(this.nome, ", e tenho ").concat(this.idade));
    };
    return Pessoa;
}());
var novaPessoa = new Pessoa('caroline', 30);
novaPessoa.cumprimentar();
