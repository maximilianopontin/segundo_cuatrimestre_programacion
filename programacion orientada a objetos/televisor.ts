class Televisor {
  estaPrendido: boolean; //estas variables internas no pueden ser modificadas desde la clase, para eso se necesitan las funciones
  volumeActual: number;
  channelActual: number;
 
  constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
    this.estaPrendido = on;
    this.volumeActual = vol;
    this.channelActual = chn; 
   
  
  } // el constructor es una funcion que permite crear el objeto a partir de los parametros que se les pase, estos parametros se le asignan a las variables internas
  // sino definimos los parametros, se establacen los parametros por defecto en el nuevo objeto que se crea
  switchOnOff(): void {
    this.estaPrendido = !this.estaPrendido;
    console.log(this.estaPrendido ? "encendido" : "apagado");
  }
  volUp(): void { 
    if (!this.estaPrendido) return;
    if (this.volumeActual >=100)return; 
    else {this.volumeActual=this.volumeActual + 1;
  
    console.log("vol up", this.volumeActual);   
    }
  }
  volDown(): void {
    if (!this.estaPrendido) return;
    if (this.volumeActual <=0)return;
    this.volumeActual=this.volumeActual- 1;
    console.log("vol down", this.volumeActual);
  }
  channelUp(): void {
    if (!this.estaPrendido) return;
    if (this.channelActual >=99)return;
    this.channelActual =this.channelActual+1;
    console.log("channel up", this.channelActual);
  }
  channelDown(): void {
    if (!this.estaPrendido) return;
    if (this.channelActual <=1)return;
    this.channelActual=this.channelActual - 1;
    console.log("channel down", this.channelActual);
  }
  pickChannel(channel: number): void {
    if (!this.estaPrendido) return;
    this.channelActual = channel;
    console.log("Cambiaste al canal", this.channelActual);
  }
  /*horaaActual(hora:number): void {
    if (!this.estaPrendido) return;
    this.horaActual = hora;
    console.log("Hora", this.horaActual);
  } */
  info(): void {
    if (!this.estaPrendido) return;
    console.log("canal:", this.channelActual, "volumen", this.volumeActual, "hora actual", /*this.horaActual*/);
  }
}

const tv01 = new Televisor();
tv01.switchOnOff();
tv01.volUp();
tv01.volDown();
tv01.volDown();
tv01.channelUp();
tv01.channelDown();
tv01.channelDown();
tv01.pickChannel(10);
//tv01.horaaActual (22);
tv01.info();