"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }
    Auto.prototype.accelerate = function () {
        this.speed += 10; //al no tener console.log no muestra por consola el aumento de velocidad sino pongo el metodo getspeed
    };
    Auto.prototype.GetSpeed = function () {
        console.log(this.speed);
    };
    return Auto;
}());
exports.Auto = Auto;
