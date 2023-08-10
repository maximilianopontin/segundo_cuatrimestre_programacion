class Televisor {
  private estaPrendido: boolean; //estas variables internas no pueden ser modificadas desde la clase, para eso se necesitan las funciones
  private volumeActual: number;
  private channelActual: number;
  private horaActual:Date;
 
  constructor(on: boolean = false, vol: number = 0, chn: number = 0, hora?: Date) {
    this.estaPrendido = on;
    this.volumeActual = vol;
    this.channelActual = chn; 
    this.horaActual= hora || new Date;
   
  
  } // el constructor es una funcion que permite crear el objeto a partir de los parametros que se les pase, estos parametros se le asignan a las variables internas
  // sino definimos los parametros, se establacen los parametros por defecto en el nuevo objeto que se crea
  switchOnOff(): void {
    this.estaPrendido = !this.estaPrendido;
    console.log(this.estaPrendido ? "encendido" : "apagado");
  }
  volUp(): void { 
    if (!this.estaPrendido) return;
    if (this.volumeActual <100){
      this.volumeActual ++;
      console.log("volumen aumentado:", this.volumeActual);
    }
}
  
  volDown(): void {
    if (!this.estaPrendido) return;
    if (this.volumeActual > 0) {
      this.volumeActual--;
      console.log("Volumen disminuido:", this.volumeActual);
    }
  }
  channelUp(): void {
    if (!this.estaPrendido) return;// sino esta prendido return

    if (this.channelActual >1 && this.channelActual < 99) {
      this.channelActual++;
      console.log("Canal aumentado:", this.channelActual);
    }
  }
  channelDown(): void {
    if (!this.estaPrendido) return;
    if (this.channelActual > 1 && this.channelActual < 99) {
      this.channelActual--;
      console.log("Canal disminuido:", this.channelActual);
    }
  }
  pickChannel(channel: number): void {
    if (!this.estaPrendido) return;
    this.channelActual = channel;
      console.log("Cambiado al canal:", this.channelActual);
  }
 
  /*HoraActual(hora: Date): void {
    if (!this.estaPrendido) return;
    this.horaActual = hora;
    console.log("Hora actual establecida:", this.horaActual);
  }*/
  info(): void {
    if (!this.estaPrendido) return;
    const formatoHora = `${this.horaActual.getHours()}:${this.horaActual.getMinutes()}`;
    console.log("Canal:", this.channelActual, "Volumen:", this.volumeActual,"Hora actual:", formatoHora);
  }
}

const tv01:Televisor = new Televisor();
tv01.switchOnOff();
tv01.volUp();
tv01.volDown();
tv01.volDown();
tv01.channelUp();
tv01.channelDown();
tv01.channelDown();
tv01.pickChannel(10);
tv01.info();

//tv01.volumeActual=10; se puede acceder de afuera a una variable interna 
//pero conviene encapsular los datos (modoficadores de acceso: private) para proteger los datos 
//
