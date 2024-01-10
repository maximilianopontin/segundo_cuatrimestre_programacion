

function Input({ onAdd }) {//recibo el evento creado en app.jsx para cambia el valor de la variable
    //de estado  

    return ( //cuando le damos click al boton submit se procesa el evento onSubmit y
        // llama a la funcion onAdd que llego a traves de una prop desde el archivo app.jsx

        <form onSubmit={onAdd}>
            <label htmlFor="input"></label>
            <input type="text" id="input" name="input" />
            <input className="float-left" type="submit" value="crear" />
            <input className="float-right button-outline" type="reset" value="limpiar" />

        </form>
    )
}
//cada vez que actualizo el estado se obtiene una nueva copia. 
export default Input;