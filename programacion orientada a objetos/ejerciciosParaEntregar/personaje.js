var Personaje = /** @class */ (function () {
    function Personaje(nombre, edad, pais, movimientoEspecial) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.movimientoEspecial = movimientoEspecial;
        this.salud = 100;
        this.nivel = 1;
        //cada vez que creemos un new objeto personaje, todos van a empezar con la salud en 100 y el nivel en 1 por defecto
    }
    Personaje.prototype.recibirDanio = function (danio) {
        this.salud -= danio;
        console.log("".concat(this.nombre, " recibi\u00F3 ").concat(danio, " puntos de da\u00F1o. Salud actual: ").concat(this.salud));
    };
    Personaje.prototype.incrementarNivel = function () {
        this.nivel++;
        console.log("".concat(this.nombre, " subi\u00F3 al nivel ").concat(this.nivel, "!"));
    };
    Personaje.prototype.usarMovimientoEspecial = function (objetivo) {
        console.log("".concat(this.nombre, " us\u00F3 ").concat(this.movimientoEspecial, " contra ").concat(objetivo, "!"));
    };
    return Personaje;
}());
var Enemigo = /** @class */ (function () {
    function Enemigo(nombre, tipo, danio, personaje) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.danio = danio;
        this.energia = 100;
        this.personaje = personaje;
    }
    Enemigo.prototype.recibirDanio = function (danio) {
        this.energia -= danio;
        console.log("".concat(this.nombre, " recibi\u00F3 ").concat(danio, " puntos de da\u00F1o. Energ\u00EDa actual: ").concat(this.energia));
        console.log(this.tipo);
    };
    Enemigo.prototype.atacar = function () {
        this.personaje.recibirDanio(this.danio);
    };
    return Enemigo;
}());
// Crear un personaje y probar sus métodos
var personaje1 = new Personaje("Luchador1", 25, "Japón", "Puño de Fuego");
personaje1.recibirDanio(20);
personaje1.usarMovimientoEspecial("Enemigo1");
personaje1.incrementarNivel();
// Crear un enemigo y probar sus métodos
var personajeEnemigo = new Personaje("Enemigo1", 30, "Mundo Oscuro", "Maldición Oscura");
var enemigo1 = new Enemigo("Ogro", "Fuerza Bruta", 32, personajeEnemigo);
enemigo1.atacar();
enemigo1.atacar();
enemigo1.recibirDanio(20);
