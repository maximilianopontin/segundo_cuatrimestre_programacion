"use strict";
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
exports.AutoDep = void 0;
var auto_1 = require("./auto"); //Importamos la clase auto, que es la clase
//general
var AutoDep = /** @class */ (function (_super) {
    __extends(AutoDep, _super);
    function AutoDep(make, model) {
        return _super.call(this, make, model) || this;
        //esto me permite crear un autodep igual al de la superclase auto, mismos atributos y metodo
    }
    AutoDep.prototype.accelerate = function () {
        this.speed += 50;
    };
    return AutoDep;
}(auto_1.Auto));
exports.AutoDep = AutoDep;
