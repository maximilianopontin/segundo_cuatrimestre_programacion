import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [centigrados, setCentigrados] = useState("");
  const [farenheit, setFarenheit] = useState("");

  const convertirFarenheit = (e) => {
    const nuevoValor = e.target.value;
    setCentigrados(nuevoValor);
    setFarenheit(nuevoValor * (9 / 5) + 32);
  }

  return (
    <>
      <div>
        <h2> Conversor de Grados Centigrados a Farenheit</h2>
        <div>
          <input type="text" placeholder="Grados Centigrados" value={centigrados} onChange={convertirFarenheit} />
        </div>
        <div>
          <input type="text" placeholder="Grados Farenheit" value={farenheit} />
        </div>
      </div>
    </>
  )
}

export default App
