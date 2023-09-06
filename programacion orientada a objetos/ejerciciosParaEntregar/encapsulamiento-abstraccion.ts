// crea una clase llamada cuentabancaria que represente una cuenta bancaria. esta clase
//debe tener atributos privados para el titular de la cuenta (dueño), el saldo actual arranca en 0(balance)
// y el tipo de cuenta (tipodecuenta), implementa metodos publicos para depositar dinero (deposito),
//retirar dinero (retirar)y obtener el saldo actual (obtener balance).
//ademas utiliza la abstraccion para ocultar los detalles internos del funcionamiento de la cuenta

//modificar este ejercicio para que el tipo de cuenta se integre en la clase cuentabancaria mediante composicion, tipo de cuenta solo podra ser cuenta en pesos,cuenta corriente, cuenta dolares

//creacion de un tipo con opciones predefinidas:

enum tipoCuentaenum {
CuentaPesos= "cuenta en pesos",
CuentaCorriente="cuenta corriente en pesos",
CuentaDolares="cuenta en dolares",
}

class TipoCuenta {
 private tipo:tipoCuentaenum;
constructor (tipo: tipoCuentaenum){
    this.tipo=tipo;
}

}
export class CuentaBancaria {
    private titularCuenta: string;
    private tipoCuenta: TipoCuenta;
    private saldo:number;

    constructor(titularCuenta: string, tipoCuenta:tipoCuentaenum) {
this.saldo = 0;
this.titularCuenta = titularCuenta;
this.tipoCuenta= new TipoCuenta (tipoCuenta);
}

depositarDinero(cantidad:number):void {
    if (cantidad>0){
this.saldo = this.saldo + cantidad; // o this.saldo += cantidad

console.log ("usted deposito:" + cantidad, " en su ", JSON.stringify (this.tipoCuenta));//se pone porque ahora es un objeto
}
}

retirarDinero(cantidad:number):void {
    if (cantidad >0 && cantidad <=this.saldo) {

this.saldo -= cantidad;
console.log ("usted retiro:" , cantidad, "de su", JSON.stringify(this.tipoCuenta));
} else { "no posee saldo suficiente";
}

}

obtenerSaldo():void{

console.log ( "su saldo actual es:",this.saldo);
}
}

const cajaAhorro= new CuentaBancaria ("federico tomansen", tipoCuentaenum.CuentaPesos);// el parametro ahora es de tipocuentaenum, que a su vez tiene 3 opciones 
//obligatorias para eleccion, cuenta en pesos, dolares y cuenta corriente

cajaAhorro.depositarDinero(1000);
cajaAhorro.retirarDinero(50);
cajaAhorro.obtenerSaldo();
