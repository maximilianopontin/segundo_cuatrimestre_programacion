/*Calcular la superficie de un rectángulo
Tendremos dos inputs que recogerán el ancho y el alto de un rectángulo y calculará su superficie.
La solución debe imprimirse al pulsar el botón de «calcular».
*/

import './App.css'
import React, { useState } from 'react';


const CalculadoraRectangulo = () => {
  const [ancho, setAncho] = useState('');
  const [alto, setAlto] = useState('');
  const [superficie, setSuperficie] = useState(null);

  const calcularSuperficie = () => {
    if (isNaN(ancho) || isNaN(alto)) {
      alert('Por favor, ingrese valores numéricos para ancho y alto.');
      return;
    }

    const resultado = parseFloat(ancho) * parseFloat(alto);
    setSuperficie(resultado);
  };

  return (
    <div className="calculadora-rectangulo-container">
      <h2>Calculadora de Superficie de Rectángulo</h2>
      <label>
        Ancho:
        <input
          type="text"
          value={ancho}
          onChange={(e) => setAncho(e.target.value)}
        />
      </label>
      <br />
      <label>
        Alto:
        <input
          type="text"
          value={alto}
          onChange={(e) => setAlto(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calcularSuperficie}>Calcular</button>
      {superficie !== null && (
        <p>La superficie del rectángulo es: {superficie}</p>
      )}
    </div>
  );
};

export default CalculadoraRectangulo;
