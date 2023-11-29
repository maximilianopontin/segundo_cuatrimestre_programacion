const moviesContainer = document.getElementById("moviesContainer");
const URL = "https://654430c85a0b4b04436c1ea3.mockapi.io/";

function getAll() {
    fetch(URL + "movies")
        .then(res => res.json())
        .then(movies => renderMovies(movies));
}
getAll();

//DELETE - eliminar una pelicula


document.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const id = e.target.dataset.id;
        const actualCard = e.target.closest("article");
        deleteOne(id, actualCard);
    }
});

function deleteOne(id, actualCard) {
    fetch(URL + `movies/${id}`, {
        method: "delete",
    }).then(res => {
        if (res.ok) actualCard.remove();
    });
}

function renderMovies(movies) {
    for (const movie of movies) {
        const movieCard = document.createElement("article");
        movieCard.classList.add("movie-card"); // Agregar una clase para estilizar la tarjeta completa

        const movieData = `    
      <img src="${movie.poster}" alt="${movie.title}"/>
      <h2>${movie.title}</h2>
      <p>${movie.year}</p>
      <p>Directed by ${movie.director}</p>
      <p>${movie.genre.join(", ")}</p>
      <p>Rating: ${movie.rate}</p>
      <div class="button-container">
        <button class="delete-btn" data-id="${movie.id}">Delete</button>
        <button class="edit-btn" data-id="${movie.id}">Edit</button>
      </div>
    `;

        movieCard.innerHTML = movieData;
        moviesContainer.appendChild(movieCard);
    }
}


// post de una nueva pelicula

function postNewMovie(newMovie) {
    fetch(URL + 'movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    }).then((res) => {
        if (res.ok) {
            // If successful, refresh the movie list
            console.log(newMovie);
            getAll();
        }
    });
}

document.addEventListener("click", e => {
    if (e.target.matches("#newMovieBtn")) {
        // Create form elements for adding a new movie
        const addForm = document.createElement("form");
        addForm.id = "addForm"; // Set an ID for styling
        const titleInput = createInputField("Title");
        const yearInput = createInputField("Year");
        const directorInput = createInputField("Director");
        const duration = createInputField("Duration");
        const posterInput = createInputField("Poster URL");
        const genreInput = createInputField("Genres (comma-separated)");
        const rateInput = createInputField("Rating");
        const submitBtn = document.createElement("button");
        const cancelBtn = document.createElement("button");

        submitBtn.textContent = "Agregar una nueva pelicula";
        cancelBtn.textContent = "Cancelar";


        addForm.appendChild(createLabel("Title"));
        addForm.appendChild(titleInput);
        addForm.appendChild(createLabel("Year"));
        addForm.appendChild(yearInput);
        addForm.appendChild(createLabel("Director"));
        addForm.appendChild(directorInput);
        addForm.appendChild(createLabel("Duration"));
        addForm.appendChild(duration);
        addForm.appendChild(createLabel("Poster URL"));
        addForm.appendChild(posterInput);
        addForm.appendChild(createLabel("Genres (comma-separated)"));
        addForm.appendChild(genreInput);
        addForm.appendChild(createLabel("Rating"));
        addForm.appendChild(rateInput);
        addForm.appendChild(submitBtn);
        addForm.appendChild(cancelBtn);

        cancelBtn.addEventListener("click", () => {
            addForm.remove();
        });

        addForm.addEventListener("submit", event => {
            event.preventDefault();

            const newMovie = {

                title: titleInput.value,
                year: parseInt(yearInput.value),
                director: directorInput.value,
                duration: duration.value,
                poster: posterInput.value,
                genre: genreInput.value.split(","), // Assuming genres are comma-separated
                rate: parseFloat(rateInput.value)
            };
            // Call the post method
            postNewMovie(newMovie);

            // Remove the form after adding the new movie
            addForm.remove();
        });

        document.body.appendChild(addForm); // Append the form to the body or another container
    }
});

function createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
}

function createInputField(placeholder) {
    const input = document.createElement("input");
    input.placeholder = placeholder;
    return input;
}




function updateMovie(Movie,id) {
    fetch(URL +`movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Movie),
    }).then((res) => {
        if (res.ok) {
            // If successful, refresh the movie list
            console.log('Pelicula Editada: ', Movie);
            getAll();
        }
    });
}

document.addEventListener("click", e => {
    if (e.target.matches(".edit-btn")) {
        console.log (e);
        const id = e.target.dataset.id;
        const movieToEdit = findMovieById(id);
        editMoviePrompt(movieToEdit,moviesData);
        console.log ("id de la pelicula a editar: ",id);
    }
});


