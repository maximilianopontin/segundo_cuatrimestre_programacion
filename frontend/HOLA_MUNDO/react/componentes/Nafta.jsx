/*maximo de litros 40.
mayor que 30. fondo verde
entre 20 y 30, fondo amarillo
entre 10 y 20 fondo naranja
entre 0 hasta 10 fondo rojo
*/

import React from "react";

const TanqueNafta =()=>{
    // numero aleatorio
    const numeroAleatorio=Math.floor(Math.random() * 40) + 1;

// Generar un color aleatorio en formato hexadecimal
const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// Array de frutas para la demostración
const frutas = ['Manzana', 'Plátano', 'Cereza', 'Naranja', 'Uvas', 'Piña'];

// Seleccionar un elemento aleatorio del array
const elementoAleatorio = frutas[Math.floor(Math.random() * frutas.length)];

// Ejemplos de JSX
return (
  <div>
    <h2>litros de tanque nafta</h2>
    <p>litros de nafta: {numeroAleatorio}</p>
    <div style ={{backgrounColor: colorAleatorio, padding: "10px", margin : "10px", color: "white"}}>
        litros de nafta: {colorAleatorio}
    </div>


    
    </div>
    );
}