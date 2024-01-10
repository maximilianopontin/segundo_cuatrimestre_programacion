class Animal {

    protected nombre: string; //permite cambiar el nombre sin necesidad de tener un metodo especifico en la superclase que me permita acceder al nombre

    constructor(nombre: string ) {
    
    this.nombre = nombre;

    }
    
    emitirSonido ():void {
        console.log ("el animal emite un sonido");
    }
    
    }
    
    class Perro extends Animal {
    
        constructor ( nombre: string){
    super (nombre);
   
        }
    
    mostrarNombre(): void {
        console.log ("el nombre del perro es: " , this.nombre);
        //metodo que me permite modificar el nombre de la superclase porque es protected
    
    }
    
    }
    
    const miPerro = new Perro ("tom");
    miPerro.mostrarNombre(); //funciona porque estamos en la clase perro, nombre es protected y accedemos desde metodo de la subclase
    miPerro.emitirSonido();// funciona porque emitirsonido es publico en la clase animal
    
//console.log (miPerro.nombre); da un error porque nombre es protected y estamos fuera 