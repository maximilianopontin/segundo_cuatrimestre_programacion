class Calculadora {

public add(a:number,b:number): number{
return  a + b;
}

public subtract(a:number,b:number) : number{
    return a - b;  
}

public multiply(a:number,b:number):number{
    return a * b; 
}

public divide(a:number,b:number):number | string   {
    if (b==0) return "no se puede dividir por cero";
    return a / b;

}

}

const calc01: Calculadora= new Calculadora();

console.log (calc01.add (5,7));
console.log (calc01.subtract (6,2)); 
console.log (calc01.multiply ( 5,3));
console.log (calc01.divide ( 6,2)); 
