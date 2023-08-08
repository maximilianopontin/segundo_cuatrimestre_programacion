var Televisor = /** @class */ (function () {
    function Televisor(on, vol, chn) {
        if (on === void 0) { on = false; }
        if (vol === void 0) { vol = 0; }
        if (chn === void 0) { chn = 1; }
        this.estaPrendido = on;
        this.volumeActual = vol;
        this.channelActual = chn;
    } // el constructor es una funcion que permite crear el objeto a partir de los parametros que se les pase, estos parametros se le asignan a las variables internas
    // sino definimos los parametros, se establacen los parametros por defecto en el nuevo objeto que se crea
    Televisor.prototype.switchOnOff = function () {
        this.estaPrendido = !this.estaPrendido;
        console.log(this.estaPrendido ? "encendido" : "apagado");
    };
    Televisor.prototype.volUp = function () {
        this.volumeActual + 1;
        console.log("vol up", this.volumeActual);
    };
    Televisor.prototype.volDown = function () {
        this.volumeActual - 1;
        console.log("vol down", this.volumeActual);
    };
    Televisor.prototype.channelUp = function () {
        this.channelActual + 1;
        console.log("channel up", this.channelActual);
    };
    Televisor.prototype.channelDown = function () {
        this.channelActual - 1;
        console.log("channel down", this.channelActual);
    };
    Televisor.prototype.pickChannel = function (channel) {
        if (!this.estaPrendido)
            return;
        this.channelActual = channel;
        console.log("Cambiaste al canal", this.channelActual);
    };
    Televisor.prototype.info = function () {
        console.log("canal, volumen, hora actual");
    };
    return Televisor;
}());
var tv01 = new Televisor();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.pickChannel(45);
