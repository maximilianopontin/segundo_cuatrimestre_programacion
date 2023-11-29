
const URL = "https://654430c85a0b4b04436c1ea3.mockapi.io/";
//Tomamos referencia del formulario
const form = document.getElementById("form");
form.addEventListener("submit", handleFormSubmit);

//generador de id porque no estamos usando node
function generateUUID() {
    let uuid = "";
    for (let i = 0; i < 32; i++) {
        uuid += Math.floor(Math.random() * 16).toString(16);
    }
    return uuid;
}

//función de procesamiento del formulario
function handleFormSubmit(e) {
    const movieData = new FormData(form);
    e.preventDefault();//para poder ver por consola
    const uuid = generateUUID();//crea id aleatorio
 

//tenemos que crear el genero de string a arreglo, como el backend
    const gens = movieData.get("genre").split(", ");//tranforma el string en un arreglo separado con coma
  
//creamos datos de la nueva pelicula 

    const newMovie = {
        id: uuid,
        title: movieData.get("title"),
        year: movieData.get("year"),
        director: movieData.get("director"),
        duration: movieData.get("duration"),
        poster: movieData.get("poster"),
        genre: gens,
        rate: movieData.get("rate"),
    };
    addNewMovie(newMovie);
}


//método POST para crear una nueva película en el backend

function addNewMovie(movie) {
    fetch(URL + "movies", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(movie),
    }).then(res => {
      res.ok ? alert("Movie Created") : alert("Error");
      
    });
  }