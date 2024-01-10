import { useState, useEffect } from 'react' // huks para crear variables de estado y para manejar cambios secundarios
import './App.css'
import Input from './components/input';
import { v4 as uuidv4 } from "uuid";
import { TbTrashOff } from "react-icons/tb";
import { getItems } from './utils/getItems';
import { Historial } from './components/historias';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Inicio}  from './components/inicio.jsx';

//LISTA DE TAREAS
function App() {
  //variable de estado
  //Cuando declaramos una variable de estado con useState, 
  //devuelve un array con dos elementos. El primero es el valor actual y 
  //el segundo es una función que nos permite actualizarlo. Usar [0] y [1] 
  //para acceder a ello es un poco confuso porque tienen un significado específico. 
  //Por ello usamos la desestructuración de arrays en su lugar.

  const [todos, setTodos] = useState(getItems());

  //CREAR NUEVA TAREA
  //escuchamos el evento en el submit, es decir escucha todo el formulario
  const handleAdd = (e) => {
    e.preventDefault();//evitamos el comportamiento por defecto de navegacion del form
    if (e.target.input.value === "") return; // si el valor del input (lo que escribe el usuario) es string vacio no agrega tarea
    const newTodo = {
      id: uuidv4(),
      title: e.target.input.value,
      isCompleted: false
    };
    // validacion para no dejar crear tareas con solo espacios en blanco 
    const name = e.target.input.value;
    if (!name.trim().length) { //Si la longitud de la cadena name después de quitar los espacios en blanco es cero (cadena vacía)
      alert("solo espacios en blanco");
      return;
    }
    e.target.reset(); //borrar el label luego de agregar tarea
    //cuando setees el nuevo estado crea un arreglo que contenga a new todo y cada uno de los alementos que antes estaban en todos anteriormnente
    setTodos([
      ...todos,
      newTodo
    ]);
  };

  //FUNCION PARA MANEJO DE CAMBIO DE ESTADO
  const handleStatusChange = (id) => {
    //creamos nuevo arreglo y mapeamos las tareas cuyo id coincida con el que entra por parametro
    //si coincide trae todos los elementos del todo (id, title) y modifica el iscompleted
    //sino coincide el id, dame el todo como estaba antes
    const modifiedTodos = todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    //arreglo con todos los elementos que estan en el todo modificado
    setTodos([...modifiedTodos]);
  };

  //FUNCION PARA ELIMINAR UNA TAREA
  const handleDeleteTodo = (id) => {
    const remainingTodos = todos.filter(todo => todo.id !== id);
    //arreglo con todos los elementos que estan en el todo modificado
    setTodos([...remainingTodos]);
  };

  //GUARDAR TAREAS EN LOCALSTORAGE
  useEffect(() => {
    //si el arreglo de tareas esta vacio guardar tarea uso: if (todos.length) para que no sobreescriba las tareas que ya estan creadas
    //useEffect corre cuando se momta el componente app
    window.localStorage.setItem("todo-list", JSON.stringify(todos));//nombre del objeto y lista de tareas
    //como estas son un objeto, las convierto en texto para poder almacenar
  }, [todos]); //arreglo de dependencias, variable todos, le indicamos a useeffect que corra cada vez que hay cambio en sus dependencias
  //en este caso un cambio en todos, cuando creo, borro, o cambio de estado (funcion guardar que esta dentro del useffect)

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="">Inicio</Link>
          <Link to="/componentes/historias">Historial</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/componentes/historias" element={<Historial />} />
        </Routes>

      </BrowserRouter>

      <main className='container'>
        <header>
          <h1> Lista de Tareas</h1>
        </header>
        <Input onAdd={(e) => handleAdd(e)} />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {/* ...si existe el arreglo de todos mapea todos  */}
            {todos && todos.map(todo => (
              <tr key={todo.id} className={todo.isCompleted ? "completed" : null}>
                <td>{todo.id.substring(0, 6)}</td>
                <td>{todo.title}</td>
                <td className="status" onClick={() => handleStatusChange(todo.id)} >{todo.isCompleted ? "hecho" : " pendiente"}</td>
                <td><TbTrashOff color="tomato" size={18} className='status' onClick={() => handleDeleteTodo(todo.id)}
                />
                </td>
              </tr>)
            )}
          </tbody>
        </table>

      </main>

      <footer>@listaDeTareas</footer>
    </>
  );

}

export default App

