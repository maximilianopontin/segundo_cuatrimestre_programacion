
export interface Mascota {
    jugar(): string; //no devuelve nada, no esta implementado
}

//implementamos la clase mascota en la clase perro para poder implementar el metodo
//jugar que es por contrato

export class Perro implements Mascota {

    jugar():string {
        return "el perro juega con la pelota";
        }
    //aca podemos agregar otro metodo implementado que sea de la clase perro
    comer():string {
        return "el perro come 2 kilos de alimento por dia";
    }
}
export class Gato implements Mascota {
    jugar():string {
        return "el gato esta persiguiendo una rata de juguete";
        }

    comer():string {
            return "el gato come 0,2 kilos de alimento por dia";
        }
    }

