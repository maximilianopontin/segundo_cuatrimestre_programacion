var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.add = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.divide = function (a, b) {
        if (b == 0)
            return "no se puede dividir por cero";
        return a / b;
    };
    return Calculadora;
}());
var calc01 = new Calculadora();
console.log(calc01.add(5, 7));
console.log(calc01.subtract(6, 2));
console.log(calc01.multiply(5, 3));
console.log(calc01.divide(6, 2));
