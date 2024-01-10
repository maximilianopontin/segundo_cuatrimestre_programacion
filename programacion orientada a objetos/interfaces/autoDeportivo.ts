
import { AutoDeportivo,AutoCiudad } from "./vehiculo";

const Ferrari= new AutoDeportivo("ford","fiesta",2017, false, 0, ["aleron","vidrios polarizados"]);
console.log (Ferrari.obtenerInformacion());

Ferrari.acelerar();
Ferrari.acelerar();

console.log (Ferrari.obtenerInformacion());

const clio= new AutoCiudad ("renault", "clio",2020,false, 0);
console.log (clio.obtenerInformacion());

clio.acelerar();
clio.acelerar();

console.log (clio.obtenerInformacion());
console.log (Ferrari.accesoriosDeportivos);
