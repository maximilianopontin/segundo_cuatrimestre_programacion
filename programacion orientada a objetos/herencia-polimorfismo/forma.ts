// crear una clase base forma, que tenga 2 propiedades ancho y alto. luego 2 clases hijas derivadas: rectangulo y triangulo
//calcular el area de las instancias creadas de rectangulo y triangulo


export class Forma { 
    protected ancho: number;
    protected alto:number;


constructor (ancho: number, alto: number){
    this.ancho = ancho;
    this.alto = alto;
}
//no posee metodo para ser sobreescrito, se agregan en clases hijas
}

 
   


