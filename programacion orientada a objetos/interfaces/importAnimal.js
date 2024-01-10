"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
// instanciar nuevos objetos de cada clase: definir variable, llamarla, new tipo objeto, atributos de clase
var perro = new animal_1.Perro("fredy");
var gato = new animal_1.Gato("tom");
var leon = new animal_1.Leon("alex");
//llamamos directamente al atributo nombre o metodo hablar porque son publicos
console.log(perro.nombre, "dice:", perro.hablar());
console.log(gato.nombre, "dice:", gato.hablar());
console.log(leon.nombre, "dice:", leon.hablar());
