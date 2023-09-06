/*Ejercicio para empezar en clase y terminar de tarea sobre clase de deportistas olimpicos:
Crear un super clase llamada Deportista (que tenga al menos 3 atributos [al menos 1 atributo en protected] y 2 métodos ademas de los respectivos constructores. Crear 3 subclases hijas de esa superclase Deportista, cada una con al menos un nuevo método especifico y un atributo extra tambien.
Bonus: una de las sub clases podria estar compuesta por otras clases*/
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
var Deportista = /** @class */ (function () {
    function Deportista(nombre, edad, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
    Deportista.prototype.entrenar = function () {
        console.log("El deportista entrena 3 veces por semana");
    };
    Deportista.prototype.competir = function () {
        console.log("La competencia del deportista es por medallas olimpicas");
    };
    return Deportista;
}());
var Nadador = /** @class */ (function (_super) {
    __extends(Nadador, _super);
    function Nadador(nombre, edad, altura, estiloNado) {
        var _this = _super.call(this, nombre, edad, altura) || this;
        _this.estiloNado = estiloNado;
        return _this;
    }
    Nadador.prototype.nadar = function () {
        console.log("El nadador nada 100 mts en 45 segundos");
    };
    Nadador.prototype.cambiarNombre = function () {
        console.log("El nombre del nadador es", this.nombre);
    };
    return Nadador;
}(Deportista));
var disciplina1 = new Nadador("Tomas", 25, 1.75, "croll"); //instancia nueva creada
disciplina1.entrenar();
disciplina1.competir(); // metodos publicos de superclase deportista, es necesario ponerlo?
disciplina1.cambiarNombre(); //metodo de la subclase para modificar el nombre del deportista que esta en protected
console.log("Tiene", disciplina1.edad, "años de edad", "Mide", disciplina1.altura, "y nada estilo", disciplina1.estiloNado);
disciplina1.nadar(); //metodo publico especifico de la subclase nadador
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, edad, altura, posicion) {
        var _this = _super.call(this, nombre, edad, altura) || this;
        _this.posicion = posicion;
        return _this;
    }
    Futbolista.prototype.patearArco = function () {
        console.log("El futbolista pateó al arco en promedio de 10 veces por partido");
    };
    Futbolista.prototype.cambiarNombre = function () {
        console.log("El nombre del futbolista es", this.nombre);
    };
    return Futbolista;
}(Deportista));
var disciplina2 = new Futbolista("Juan Cruz", 32, 1.80, "delantero");
disciplina2.cambiarNombre();
console.log("Tiene", disciplina2.edad, "años de edad", "Mide", disciplina2.altura, "y juega en la posicion de", disciplina2.posicion);
disciplina2.patearArco();
var Tenista = /** @class */ (function (_super) {
    __extends(Tenista, _super);
    function Tenista(nombre, edad, altura, manoHabil) {
        var _this = _super.call(this, nombre, edad, altura) || this;
        _this.manoHabil = manoHabil;
        return _this;
    }
    Tenista.prototype.sacarDeArriba = function () {
        console.log("El tenista tiene un saque de arriba de 130 km por hora");
    };
    Tenista.prototype.cambiarNombre = function () {
        console.log("El nombre del tenista es", this.nombre);
    };
    return Tenista;
}(Deportista));
var disciplina3 = new Tenista("Nicolas", 28, 1.85, "derecha");
disciplina3.cambiarNombre();
console.log("Tiene", disciplina3.edad, "años de edad", "Mide", disciplina3.altura, "y su mano habil es la", disciplina3.manoHabil);
disciplina3.sacarDeArriba();
