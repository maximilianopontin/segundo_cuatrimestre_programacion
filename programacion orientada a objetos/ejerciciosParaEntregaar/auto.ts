export class Auto {
    private make: string;
    private model: string;
    protected speed: number;//nos permite acceder desde el metodo de la subclase autoDep



    constructor(make:string, model: string) {
        this.make = make;
        this.model = model;
        this.speed = 0;
}
public accelerate (): void {

    this.speed +=10;//al no tener console.log no muestra por consola el aumento de velocidad sino pongo el metodo getspeed
}
public GetSpeed (): void {
    console.log ( this.speed);

}
}
