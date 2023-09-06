//crea una clase personaje con las propiedades nombre, vida y energia.agrega los metodos atacar y curar
//que permitan atacar a otro personaje o curar al propio personaje.
//crea 2 clases adicionales que hereden de personaje: guerrero, mago. cada clase debe tener propiedades y metodos unicos para su tipo 
// de personaje. ejemplo: la clase guerrero podria tener propiedad fuerza y un metodo usar escudo.
//ña clase amgo podria tener una propiedad maña y un metodo lanzar hechizo.
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
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, energia) {
        this.nombre = nombre;
        this.vida = vida;
        this.energia = energia;
    }
    Personaje.prototype.atacar = function (objetivo) {
        this.energia--;
        ;
        console.log("".concat(this.nombre, " ataca a ").concat(objetivo.nombre, " y su energia disminuye a :").concat(this.energia));
        //uso personaje como tipo de variable, y llamo cuando pongo objetivo.nombre al nombre del personaje que quiero atacar.
    };
    Personaje.prototype.curar = function (puntosCuracion) {
        this.vida += puntosCuracion;
        console.log("".concat(this.nombre, " se cura a s\u00ED mismo y recupera ").concat(puntosCuracion, " puntos de vida, vida actual: ").concat(this.vida));
    };
    return Personaje;
}());
var personaje01 = new Personaje("thor", 100, 100);
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre, vida, energia, fuerza) {
        var _this = _super.call(this, nombre, vida, energia) || this;
        _this.fuerza = fuerza;
        return _this;
    }
    Guerrero.prototype.usarEscudo = function () {
        console.log("".concat(this.nombre, " usa su escudo para protegerse y tiene una fuerza de: ").concat(this.fuerza, " puntos"));
    };
    return Guerrero;
}(Personaje));
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, vida, energia, magia) {
        var _this = _super.call(this, nombre, vida, energia) || this;
        _this.magia = magia;
        return _this;
    }
    Mago.prototype.lanzarHechizo = function () {
        console.log("".concat(this.nombre, " lanza un hechizo de ").concat(this.magia, " puntos de magia"));
    };
    return Mago;
}(Personaje));
var guerrero01 = new Guerrero("Rudd", 85, 100, 30);
var mago01 = new Mago("Black", 100, 90, 80);
guerrero01.usarEscudo();
guerrero01.atacar(mago01);
guerrero01.curar(15);
mago01.lanzarHechizo();
mago01.atacar(guerrero01);
mago01.curar(20);
