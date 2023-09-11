//crea una clase personaje con las propiedades nombre, vida y energia.agrega los metodos atacar y curar
//que permitan atacar a otro personaje o curar al propio personaje.
//crea 2 clases adicionales que hereden de personaje: guerrero, mago. cada clase debe tener propiedades y metodos unicos para su tipo 
// de personaje. ejemplo: la clase guerrero podria tener propiedad fuerza y un metodo usar escudo.
//ña clase amgo podria tener una propiedad maña y un metodo lanzar hechizo.

class Personaje {
    protected nombre: string;
    private vida: number;
    private energia: number;
  
    constructor(nombre: string, vida: number, energia: number) {
      this.nombre = nombre;
      this.vida= vida;
      this.energia= energia;
   
    }
  
    atacar(objetivo:Personaje):void {
        this.energia --;;
        console.log(`${this.nombre} ataca a ${objetivo.nombre} y su energia disminuye a :${this.energia}`);
        //uso personaje como tipo de variable, y llamo cuando pongo objetivo.nombre al nombre del personaje que quiero atacar.
       
    }

    curar(puntosCuracion:number): void {  
        this.vida += puntosCuracion;
        console.log(`${this.nombre} se cura a sí mismo y recupera ${puntosCuracion} puntos de vida, vida actual: ${this.vida}`);
          
            
    }
  
  }
  
  const personaje01= new Personaje ("thor",100,100)
 
  class Guerrero extends Personaje{
    private fuerza: number;
  

    constructor (nombre: string, vida: number, energia: number, fuerza: number){
    super (nombre, vida,energia);
    this.fuerza= fuerza;
    }

    usarEscudo(): void{
        console.log (`${this.nombre} usa su escudo para protegerse y tiene una fuerza de: ${this.fuerza} puntos`);
    }

  }

  class Mago extends Personaje {
    private magia: number;
    

    constructor (nombre: string, vida: number, energia: number, magia: number){
    super (nombre, vida, energia);
    this.magia= magia;
  
    }


    lanzarHechizo(): void{
    console.log (`${this.nombre} lanza un hechizo de ${this.magia} puntos de magia`);

    }
  }

    const guerrero01=new Guerrero("Rudd", 85, 100,30);
    const mago01=new Mago ("Black",100, 90,80);
  guerrero01.usarEscudo();
  guerrero01.atacar(mago01);
  guerrero01.curar(15);
  mago01.lanzarHechizo();
  mago01.atacar(guerrero01);
  mago01.curar(20);
