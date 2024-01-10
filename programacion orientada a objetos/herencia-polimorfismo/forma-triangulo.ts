import { Forma } from "./forma";
export class triangulo extends Forma {
    constructor (ancho: number, alto: number){
        super(ancho, alto);
      
    }
//metodo agregado y distinto para area del triangulo
    calcularArea():number{
        let result= (this.alto*this.ancho)/2;
        return result;
}
}