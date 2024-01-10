import { Forma } from "./forma";
export class Rectangulo extends Forma{
    constructor (ancho: number, alto: number){
        super(ancho, alto);
      
    }

//metodo agregado pra el calculo de area de rectangulo
    calcularArea():number {
        let result = (this.alto*this.ancho);
        return result;
        
    }
    
}