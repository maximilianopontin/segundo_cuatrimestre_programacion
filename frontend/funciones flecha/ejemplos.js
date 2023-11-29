//estas funciones podemos llamarlas antes de ser creadas, porque es una funcion (hoisting)
function sumar(a, b) {
    return a + b;
}

const result = sumar(a, b);

function calculadora(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return "No se puede dividir por cero";
            }
        default:
            break;
        //return "Operador no válido";

    }
}

//funcion flecha-no se puede llamar antes de crearlas, porque primero ve que es una constante antes que una funcion

