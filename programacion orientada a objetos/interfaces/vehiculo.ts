//creacion de superclase

abstract class Vehiculo {

    private marca: string;
    private modelo:string;
    private año: number;
    private estaPrendido: boolean;
    protected velocidadActual: number;

constructor(marca:string, modelo:string, año:number, estaPrendido:boolean, velocidadActual:number) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.estaPrendido = estaPrendido;
    this.velocidadActual= velocidadActual;
}

prender():void {

}
apagar(): void {

}

abstract acelerar(): void;


abstract frenar(): void;


obtenerInformacion(): void {
    console.log ("marca:" ,this.marca, "modelo:", this.modelo,"año:", this.año, "esta prendido:", this.estaPrendido, "velocidadActual:", this.velocidadActual)
}
}



export class AutoDeportivo extends Vehiculo {
accesoriosDeportivos :string[] ;
    
constructor(marca: string, modelo: string, año: number, estaPrendido: boolean, velocidadActual: number, accesoriosDeportivos: string[]) {
super (marca,modelo,año,estaPrendido,velocidadActual) 
this.accesoriosDeportivos=accesoriosDeportivos }
   
    acelerar (): void {
        this.velocidadActual +=50;
}

    frenar ():void {
        this.velocidadActual-=50;
    }
}

export class AutoCiudad extends Vehiculo {
    acelerar (): void {
        this.velocidadActual +=20;
}

    frenar ():void {
        this.velocidadActual-=20;
    }
}



