"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = exports.Perro = void 0;
//implementamos la clase mascota en la clase perro para poder implementar el metodo
//jugar que es por contrato
var Perro = /** @class */ (function () {
    function Perro() {
    }
    Perro.prototype.jugar = function () {
        return "el perro juega con la pelota";
    };
    //aca podemos agregar otro metodo implementado que sea de la clase perro
    Perro.prototype.comer = function () {
        return "el perro come 2 kilos de alimento por dia";
    };
    return Perro;
}());
exports.Perro = Perro;
var Gato = /** @class */ (function () {
    function Gato() {
    }
    Gato.prototype.jugar = function () {
        return "el gato esta persiguiendo una rata de juguete";
    };
    Gato.prototype.comer = function () {
        return "el gato come 0,2 kilos de alimento por dia";
    };
    return Gato;
}());
exports.Gato = Gato;
