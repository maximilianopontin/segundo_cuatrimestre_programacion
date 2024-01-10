import { useState } from 'react'
import './App.css'
/*
//cuando usamos react, se ejecuta y renderiza una sola vez al inicio de la funcion
//y luego no se vuelve a ejecutar esa parte del codigo, no ve cambio de estado en la variable, por lo tanto no veo el cambio en pantalla. 
//debemos volver a renderizar la variable cada vez que se modifica(cambia su valor), usamos variables de estado
// cuando react detecta ese cambio en la variable de estado, vuelve a montar todos los componentes donde esa variable de estado tiene impacto
//corre el codigo y retorna una nueva version de la interfas del usuario con los datos que cambiaron 
//y de esta manera el cambio se hace visible en pantalla
*/
  
function App() {
  //creo variable de estado 1:
  // arreglo con 2 posiciones. nombre de la variable y nombre de la funcion que cambia el valor a la variable
  const [counter, setCounter] = useState(0);
    //variable de estado 2:
  const [text, setText] = useState("");
//funcion manejar cambio en input
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const addOneHandler = () => {
    setCounter(counter + 1);
  };

  const subtractHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h3> Awesome counter</h3>
      <p>{counter}</p>
      <button onClick={addOneHandler}>Add One</button>
      <button onClick={subtractHandler}>Subtract One</button>

      <form>
        <input type="text" placeholder="ingrese texto..."
          onChange={handleInputChange}
        />
      </form>
      <p> ESTADO DEL INPUT</p>
      <p>{text}</p>

    </>
  );
}

export default App
