
//creacion superclase con atributos y metodo
class Televisor {
    private canalActual: number;
    private volumenActual: number;
    private estaPrendido: boolean;

public constructor () {

this.canalActual = 0; // default
this.volumenActual = 10; // default
this.estaPrendido = false;

}

public cambiarCanal (canal: number): void {
    this.canalActual = canal;// usando el this puedo inicialiar canalActual para luego poder modificarlo en la subclase smart tv

}
}

//creacion de clase hija o subclase

class SmartTV extends Televisor {
    public constructor () {
        super();//llama al contructor de la clase padre o superclase, no pasa nada por parametro porque ya estan definidos por default en el constructor de la clase padre
}
}

let tele= new SmartTV();//no pasamos parametros, ya que ya fueron inicializados por defecto en el constructor de la clase padre
console.log (tele);// el canalActual va a ser 0, volumenActual es 10 y estaPrendido false

tele.cambiarCanal(30); // podemos modificar el metodo desde la clase hija, porque el metodo de la superclase es publico y me permitio acceder a los atributos internos aunque sean privados
console.log (tele);// el canalActual pasa a ser 30, volumenActual es 10 y estaPrendido false