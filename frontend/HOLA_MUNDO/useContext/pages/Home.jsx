import Componente2 from "../componentes/componente2";
import { NumContextProvider } from "../context/context.jsx";
import React from "react";
function Home() {
    return (
        <div>
            <h1>UseContext</h1>
            <p>los datos estab fuera del arbol de componentes, en el contexto de la aplicacion.
                todos los componentes que estan envueltos en el proveedor de ese contexto pueden
                suscrbirsde al mismo. asi podran acceder a los datos, modoficarlos y ser notificados
                de cambios en los datos del contexto para volver a renderizarse con las
                actualizaciones pertinentes.
            </p>
            <NumContextProvider>
                <Componente2 />
            </NumContextProvider>
        </div>
    );
}
export default Home;