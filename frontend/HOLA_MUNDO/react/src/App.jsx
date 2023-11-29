
//todo lo que escribo en este componente se va a encontrar dentro del div del archivo html, capturado con id root. react cuando compila la app mete los elementos dentro del div
import "./App.css";
import Messenger from "../componentes/Messenger";
function App() {

  const name = "Maxi";//para mostrar lo que dice mi constante, pongo entre llaves el nombre de ella
  //dentro del return
  //para mostrar un arreglo 
  const colors = [{ id: 1, name: "red" }, { id: 2, name: "green" }, { id: 3, name: "orange" }, { id: 4, name: "yellow" }, { id: 5, name: "pink" },];

  return (//entre parentesis porque muestro mas de una solo elemento, para que me lo muestre tiene que tener un padre esos elementos
    //por eso ponemos un div,session,article o un fragmento de react (<> etiqueta vacia q no se renderiza)

    <>
      <h1>Hola Mundo</h1>
      <p>lorem impum dolor sit amet, consectetur adipiscing el aspect et non proident.
      </p>

      <p>Hola {name}</p>
      <ol>
        {colors.map(c => <li key={c.id}><Messenger mensaje={c.name}></Messenger>
        </li>)}
      </ol>
      <Messenger mensaje={"hola como estan"} />
    </>)

  //mapeamos arreglo de colores, por cada color quiero una lista que adentro tenga el color
  //cada hijo de la lista debe tener una key unica, usamos el id
  //componente messenger le pasamos una property( variable que se le pasa a un componente)
  //
}


export default App;
