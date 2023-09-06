/*Ejercicio para empezar en clase y terminar de tarea sobre clase de deportistas olimpicos:
Crear un super clase llamada Deportista (que tenga al menos 3 atributos [al menos 1 atributo en protected] y 2 métodos ademas de los respectivos constructores. Crear 3 subclases hijas de esa superclase Deportista, cada una con al menos un nuevo método especifico y un atributo extra tambien.
Bonus: una de las sub clases podria estar compuesta por otras clases*/

class Deportista {
    protected nombre: string;
    public edad: number;
    public altura: number;

    public constructor (nombre: string, edad: number, altura: number) {

        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
}

entrenar():void {
console.log ("El deportista entrena 3 veces por semana");

}

competir(): void {
console.log ("La competencia del deportista es por medallas olimpicas");

}

}



class Nadador extends Deportista {
    public estiloNado: string; //atributo agregado 

constructor(nombre: string, edad: number, altura: number, estiloNado: string) {
    super (nombre, edad, altura);
    this.estiloNado = estiloNado;
}

nadar():void {
    console.log("El nadador nada 100 mts en 45 segundos");
}

cambiarNombre (): void {
    console.log ("El nombre del nadador es", this.nombre);
}
}

const disciplina1 = new Nadador("Tomas", 25, 1.75, "croll"); //instancia nueva creada

disciplina1.entrenar();disciplina1.competir();// metodos publicos de superclase deportista, es necesario ponerlo?

disciplina1.cambiarNombre();//metodo de la subclase para modificar el nombre del deportista que esta en protected
console.log ("Tiene", disciplina1.edad , "años de edad", "Mide" , disciplina1.altura, "y nada estilo", disciplina1.estiloNado);
disciplina1.nadar(); //metodo publico especifico de la subclase nadador


class Futbolista extends Deportista {
    public posicion: string;

constructor(nombre: string, edad: number, altura: number, posicion: string) {
    super (nombre, edad, altura);
    this.posicion=posicion;
}

patearArco():void {
    console.log("El futbolista pateó al arco en promedio de 10 veces por partido");
}

cambiarNombre (): void {
    console.log ("El nombre del futbolista es", this.nombre);
}
}

const disciplina2 = new Futbolista("Juan Cruz", 32, 1.80, "delantero");

disciplina2.cambiarNombre();
console.log ("Tiene", disciplina2.edad , "años de edad", "Mide" , disciplina2.altura, "y juega en la posicion de", disciplina2.posicion);
disciplina2.patearArco();


class Tenista extends Deportista {
    public manoHabil: string;

constructor(nombre: string, edad: number, altura: number, manoHabil: string) {
    super (nombre, edad, altura);
    this.manoHabil=manoHabil;
}

sacarDeArriba():void {
    console.log("El tenista tiene un saque de arriba de 130 km por hora");
}

cambiarNombre (): void {
    console.log ("El nombre del tenista es", this.nombre);
}
}

const disciplina3 = new Tenista("Nicolas",28, 1.85, "derecha");

disciplina3.cambiarNombre();
console.log ("Tiene", disciplina3.edad , "años de edad", "Mide" , disciplina3.altura, "y su mano habil es la", disciplina3.manoHabil);
disciplina3.sacarDeArriba();


