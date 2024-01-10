//importamos las clases perro y gato de la interface mascota


import { Perro,Gato } from "./interfaceMascota";

const perro = new Perro();
const gato = new Gato();
//no posee atributos no pasa nada por parametros
console.log (perro.jugar());
console.log (gato.jugar());
console.log (perro.comer());
console.log (gato.comer());
