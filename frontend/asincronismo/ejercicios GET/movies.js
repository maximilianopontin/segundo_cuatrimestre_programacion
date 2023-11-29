const moviesContainer = document.getElementById("moviesContainer");

const URL = "https://654430c85a0b4b04436c1ea3.mockapi.io/movies";

function getAll() {
  fetch(URL, "movies" ,{
    method: "get",
  })
    .then(res => res.json())
    .then(movies => render(movies));
}

function getOne() {
  const randomID = Math.floor(Math.random() * 20 + 1);
  fetch(URL + randomID, {
    method: "get",
  })
    .then(res => res.json())
    .then(product => renderOne(product));
}

function renderMovies(movies) {
  for (const movies of movies) {

    const movieCard= document.createElement("article");
    
  }
}

function renderOne(pepote) {
  randomProductContainer.textContent = `${pepote.title} - $${pepote.price}`;
}

