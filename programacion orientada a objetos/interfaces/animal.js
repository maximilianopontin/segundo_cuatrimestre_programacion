"use strict";
//creamos una clase que tiene un metodo y una variable
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leon = exports.Gato = exports.Perro = void 0;
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.hablar = function () {
        return "sonido";
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.hablar = function () {
        return "guau";
    };
    return Perro;
}(Animal));
exports.Perro = Perro;
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.hablar = function () {
        return "miau";
    };
    return Gato;
}(Animal));
exports.Gato = Gato;
var Leon = /** @class */ (function (_super) {
    __extends(Leon, _super);
    function Leon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leon.prototype.hablar = function () {
        return "groarr";
    };
    return Leon;
}(Animal));
exports.Leon = Leon;
