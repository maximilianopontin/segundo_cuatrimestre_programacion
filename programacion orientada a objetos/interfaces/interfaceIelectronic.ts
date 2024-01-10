//vamos a utilizar interfaces para asegurarnos de que los dispositivos cumplan con ciertos metodos especificos.
//Desarrollar un sistema que modele diferentes dispositivos electronicos como tv y telefonos.
//Cada dispositivo tendra propiedades como marca, modelo, año de fabricacion, y funciones especificas.
// (cambiar de canal, hacer llamada)


interface IElectronic {
  //todos los datos que pongamos en la interfaz son publicos, por lo tanto solo ponemos los metodos
    getBrand(): string;
    getModel(): string;
    getYear(): number;
  }
  //la clase electronic que implementa nuestra interfaz ielectronic, debe cumplir como contrato tener los mismo metodos que dicha intefaz
  class Electronic implements IElectronic {
    private brand: string;
    private model: string;
    private year: number;
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    //implemento los metodos antes definidos el la interfaz:
    getBrand(): string {
      return this.brand;
    }
    getModel(): string {
      return this.model;
    }
    getYear(): number {
      return this.year;
    }
  }
  class Phone extends Electronic {
    private color: string;
    public constructor(
      brand: string,
      model: string,
      year: number,
      color: string
    ) {
      super(brand, model, year);
      this.color = color;
    }
    makeCall(number: string): void {
      console.log(`Calling to ${number}...`);
    }
    getColor(): string {
      return this.color;
    }
  }
  
  const motorola=new Phone("motorola", "v3",2005,"azul");
  console.log(motorola.getColor());
  

  class Television extends Electronic {
    private channel: number;
    public constructor(brand: string, model: string, year: number) {
      super(brand, model, year);
      this.channel = 0;
    }
    changeChannel(channel: number): void {
      this.channel = channel;
    }
    getChannel(): number {
      return this.channel;
    }
  }

  const philcoTv = new Television("philco","h10",2003);
  philcoTv.changeChannel(52);
console.log (philcoTv.getChannel());

  //Dado el código que construimos en clase, hacer modificaciones para reemplazar la herencia por la implementación de interfaces.

  interface IElectronic {
    //todos los datos que pongamos en la interfaz son publicos, por lo tanto solo ponemos los metodos
      getBrand(): string;
      getModel(): string;
      getYear(): number;
    }
   
      
    class IPhone implements IElectronic {
      private brand: string;
      private model: string;
      private year: number;
      private color: string;
      constructor(brand: string, model: string, year: number, color:string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color=color;
      }

      getBrand(): string {
        return this.brand;
      }
      getModel(): string {
        return this.model;
      }
      getYear(): number {
        return this.year;
      }
     
      makeCall(number: string): void {
        console.log(`Calling to ${number}...`);
      }
      getColor(): string {
        return this.color;
      }
      
    }
    const celular= new IPhone("LG","Android", 2001, "GRIS");
   console.log ( celular.getModel());
    
  
    class TelevisionN implements IElectronic {
      private channel: number;
      private brand: string;
      private model: string;
      private year: number;

      constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.channel=0;
      }

      getBrand(): string {
        return this.brand;
      }
      getModel(): string {
        return this.model;
      }
      getYear(): number {
        return this.year;
      }
     
      changeChannel(channel: number): void {
        this.channel = channel;
      }
      getChannel(): number {
        return this.channel;
      }
    }