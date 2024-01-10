//creamos una clase que tiene un metodo y una variable

class Animal {

    constructor(public nombre: string) {
}

hablar():string {
    return "sonido";
}
}

export class Perro extends Animal {
    hablar(): string {
        return "guau";
    }
}
export class Gato extends Animal {
    hablar(): string {
        return "miau";
    }
}
export class Leon extends Animal {
    hablar(): string {
        return "groarr";
    }
}

