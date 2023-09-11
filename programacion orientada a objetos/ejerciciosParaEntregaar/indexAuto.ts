import { Auto } from "./auto";
import { AutoDep } from "./autoDep";

//creamos instancias

const car = new Auto ("ford","fiesta");
car.GetSpeed();// llama al metodo de la superclase auto y muestra su velocidad inicial por consola mediante el console.log
car.accelerate();// llama al metodo de la superclase auto y aumenta su velocidad en 10, no muestra por consola
car.GetSpeed();//permite mostrar por consola la velocidad de aceleracion

const fastCar= new AutoDep ("Alfa romeo","giuletta");
fastCar.GetSpeed();
fastCar.accelerate();// llama al metodo de la clase autoDep y aumenta su velocidad en 50
fastCar.accelerate();
fastCar.GetSpeed();