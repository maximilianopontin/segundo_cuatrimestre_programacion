
import { Perro,Gato,Leon } from "./animal";
// instanciar nuevos objetos de cada clase: definir variable, llamarla, new tipo objeto, atributos de clase
const perro= new Perro("fredy");
const gato= new Gato("tom");
const leon= new Leon("alex");

//llamamos directamente al atributo nombre o metodo hablar porque son publicos
console.log(perro.nombre, "dice:", perro.hablar());
console.log(gato.nombre, "dice:", gato.hablar());
console.log(leon.nombre, "dice:", leon.hablar());