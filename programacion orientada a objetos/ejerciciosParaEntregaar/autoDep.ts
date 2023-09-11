import { Auto } from "./auto"; //Importamos la clase auto, que es la clase
//general
export class AutoDep extends Auto {
public constructor(make: string, model:string) {
super(make, model);
//esto me permite crear un autodep igual al de la superclase auto, mismos atributos y metodo
}

public accelerate(): void {
    this.speed +=50;
}
}