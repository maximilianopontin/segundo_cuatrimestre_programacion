"use strict";
//importamos las clases perro y gato de la interface mascota
Object.defineProperty(exports, "__esModule", { value: true });
var interfaceMascota_1 = require("./interfaceMascota");
var perro = new interfaceMascota_1.Perro();
var gato = new interfaceMascota_1.Gato();
//no posee atributos no pasa nada por parametros
console.log(perro.jugar());
console.log(gato.jugar());
console.log(perro.comer());
console.log(gato.comer());
