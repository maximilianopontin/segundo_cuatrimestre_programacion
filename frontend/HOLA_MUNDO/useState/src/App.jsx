/*Pesos a dólares:
Hay que realizar un conversor de pesos a dólares. Supondremos que un peso son tres cientos dólares. El usuario introducirá un valor en pesos y se mostrará un mensaje en pantalla con el correspondiente valor en dólares.
La solución debe ir imprimendose a medida que vamos introduciendo los datos, sin que sea necesario pulsar ningún botón de «calcular».
*/

import './App.css'
import React, { useState } from 'react';

function App() {

  const [cantidad, setCantidad] = useState(0);
  const [divisa, setDivisa] = useState("USD");
  const tasaCambio = 350;


    // Calcular y mostrar el equivalente en dólares
    const conversorDolares = () => {
      return cantidad / tasaCambio;

    };

    // Calcular y mostrar el equivalente en pesos
    const conversorPesos = () => {
      return cantidad * tasaCambio;

    };

    return (
      <div className='App'>
        <h2>Conversor de Pesos a Dólares </h2>
        <label>
          <h3>Ingrese el monto a convertir:</h3>
          <input
            type="number"
            value={cantidad}
            onChange={(e)=> setCantidad (e.target.value)}
            placeholder='ingrese monto a convertir'
          />
        </label>
        <label className='divisa'>
          <h3>Seleccione Divisa:</h3>
         <select value ={divisa} onChange={(e)=> setDivisa (e.target.value)}>
          <option value = "USD"> Dolares</option>
          <option value = "ARS"> Pesos</option>
         </select>
        </label>
        <h3>Resultado: </h3>
        {divisa === "USD" ? (
          <p>{cantidad} Pesos son aproximadamente {conversorPesos()} Dolares</p>
        ) : (
          <p>{cantidad} Dolares son aproximadamente {conversorDolares()} Pesos</p>

        )}
      </div> 
    );
  };


export default App;
