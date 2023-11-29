//aqui renderizamos los datos que llegan del backend
const moviesContainer = document.getElementById("moviesContainer");

const URL = "https://654430c85a0b4b04436c1ea3.mockapi.io/";//aqui va la url base de nuestro proyecto de mockapi

//metodos GET

function getAll() {
  fetch(URL + "movies")//pasamos el endpoint movies que queremos traer
    .then(res => res.json())
    .then(movies => renderMovies(movies));//imprimir los datos en pantalla
}
getAll();

//detectamos el click en los botones delete y levantamos el id del recurso
//que previamente adherimos al propio boton con el atributo data (asi sabemos el id del recurso a borrar)
document.addEventListener("click", e => {//escuchamos todo el documento
  if (e.target.matches("button")) {//si el evento click.target coincide con el elemento button
    const id = e.target.dataset.id;//lugar del elemento.dataset.id, para ver el id del boton creado anteriormente, cada vez que precioneos el boton nos muestra el id
    const actualCard = e.target.closest("article");// busca el elemento que este mas cerca del boton (e.target), que es la propia tarjeta que lo contiene
    switch (e.target.id) {
      case "botonDelete": //borramos la tarjeta y limpia la pantalla

        //borra la pelicula de la base de datos y de la pantalla
        deleteOne(id, actualCard);
        break;

      case "botonEdit":
        const img = actualCard.querySelector("img");
        console.log(img.getAttribute("src"));
        const ttl = actualCard.querySelector("h2");
        console.log(ttl.innerText);
        const children = actualCard.querySelectorAll("p");
        for (const child of children) {
          console.log(child.innerText);
        }
        break;
      default:
        break;
    }
  }
});
/*
*metodo DELETE
*@param {id} id del recurso a borrar
*@param {actualCard} elementos del dom que contiene el recurso a borrar
*/
function deleteOne(id, actualCard) {
  fetch(URL + `movies/${id}`, {
    method: "delete",
  }).then(res => {
    if (res.ok) actualCard.remove();//si la respuesta es ok, es decir si se elimino la pelicula, elimino la tarjeta
  });


}
/*
*@param {movies} array de elementos a renderizar
*/

function renderMovies(movies) { //muestra peliculas en pantalla
  for (const movie of movies) {
    const movieCard = document.createElement("article");
    movie;
    const movieData = `    
    <img src="${movie.poster}" alt="${movie.title}"/>
    <h2>${movie.title}</h2>
    <p>${movie.year}</p>
    <p>Directed by ${movie.director}</p>
    <p>${movie.genre.join(", ")}</p>
    <p>rating: ${movie.rate}</p>
    <button data-id="${movie.id}"id="botonDelete">Delete</button> 
    <button data-id="${movie.id}"id="botonEdit">Edit</button>
    `// cuando usamos data podemos cargarle a los elementos una variable interna (id), que luego podemos usarla con datased

      ;
    movieCard.innerHTML = movieData;//cada data la agregamos a cada tarjeta
    moviesContainer.appendChild(movieCard);//cargamos las tarjetas al html moviescontainer
  }
}



