//creacion superclase con atributos y metodo
class Televisor {
    private canalActual: number;
    protected volumenActual: number; //el atributo volumenActual ahora puede ser modificado desde una subclase
    private estaPrendido: boolean;

public constructor () {

this.canalActual = 0; // default
this.volumenActual = 10; // default
this.estaPrendido = false;

}


}

//creacion de clase hija o subclase

class SmartTV extends Televisor {
    public constructor () {
        super();//llama al contructor de la clase padre o superclase
}

public subirVolumen (): void {
    this.volumenActual ++;
// a traves de este metodo interno es que modificamos el valor de volumenActual por medio de la palabra this
}
}
let tele= new SmartTV();
console.log (tele);// el canalActual va a ser 0, volumenActual es 10 y estaPrendido false

tele.subirVolumen(); 
console.log (tele);// el canalActual va a ser 0, volumenActual es 10 + 1 y estaPrendido false