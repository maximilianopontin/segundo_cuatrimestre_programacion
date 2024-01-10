class Animal {

nombre: string;
edad: number;

constructor(nombre: string, edad: number ) {

this.nombre = nombre;
this.edad = edad;
}

emitirSonido ():void {
    console.log ("el animal emite un sonido");
}

}

class Perro extends Animal {
    raza: string;

    constructor ( nombre: string, edad: number, raza: string){
super (nombre, edad);//al llamar al contructor con super, trae todos los atributos y metodos de la superclase
this.raza = raza;
    }

emitirSonido(): void {
    console.log ("el perro ladra: guau guau");//podemos modificar el metodo en nuestra subclase porque el metodo de la superclase es publico

}

}

class Gato extends Animal {
    color: string;

    constructor ( nombre: string, edad: number, color: string ) {
        super ( nombre,edad,);
        this.color = color;
    }

    emitirSonido(): void {
        console.log ("el gato maulla: miau miau");
    
    }
}

//crear instancias para cada cada clase

const miPerro = new Perro ("tom", 2, "coli");// debemos pasarle los parametros obligatorios ya que fueron inicializados en el constructor de la clase padre
const miGato = new Gato ("mish", 3, "blanco");

// atributos heredados permite acceder porque son publicos
console.log (miPerro);
//usamos instancia creada sin especeficar atributos (me va a mostrar todos los atributos heredados)

console.log (miPerro.nombre, "es un perro de raza", miPerro.raza);
//usamos instancia creada punto atributo que quiero mostrar por consola
miPerro.emitirSonido();
//usamos instancia creada punto metodos

console.log (miGato.nombre, "es un gato de color", miGato.color);
miGato.emitirSonido();