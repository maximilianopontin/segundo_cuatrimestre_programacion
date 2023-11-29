//primer componente principal, primero en ser ejecutado
import React from 'react'
import ReactDOM from 'react-dom/client'
import Nafta from './Nafta.jsx'

//crea raiz de nuestro proyecto, captura el div que tenemos en el html y ahi dentro renderiza todo nuestra app
//en este caso renderiza primero el componenete App, puedo haber  otros componentes 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nafta />
  </React.StrictMode>,
)
//App del componente apx.jsx