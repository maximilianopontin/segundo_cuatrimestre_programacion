
const productslist = document.getElementById("productslist");
const getOneButton = document.getElementById("getOneButton"); // Correct the button selection
const getAllButton = document.getElementById("getAllButton"); // Correct the button selection
const randowProductsContainer = document.getElementById("randowProductsContainer");

getOneButton.addEventListener("click", getOne); // Change "btn[0]" to "getOneButton"
getAllButton.addEventListener("click", getAll); // Change "btn[1]" to "getAllButton"



// URL de la API que deseas consultar
const URL = "https://fakestoreapi.com/products/";

// Get all products
function getAll(endpoint) {
  fetch(URL, {//api que nos permite hacer peticiones http.  Nos devuelve una promesa: promete buscar esos datos que le pedimos 
    //no ponemos get porque por defecto busca la info 
    method: "get",
  }) //cuando termina el fetch se ejecuta el then
    .then(response => response.json())//la respuesta se muestra en formato json, no podemos usarla, por lo tanto la parseamos, esto devuelve otra promesa
    .then(products => render(products));// para cada promesa hay que establecer un then, ahora si la informacion esta como obejto javascript
}

function render(products) {
  clearProductsList(); // Call the clearProductsList function to remove existing items
  for (const item of products) {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.title} - ${item.price}`;
    productslist.appendChild(listItem);
  }
}
//get one product
function getOne() {
  const randomID = Math.floor(Math.random() * 20 + 1);// Correct "math" to "Math"
  fetch(URL + randomID, {// Add a slash before the random ID
    method: "get",
  })
    //api que nos permite hacer peticiones http. Nos devuelve una promesa:
    //no ponemos get porque por defecto busca la info 
    .then(response => response.json())//la respuesta esta en formato json
    .then(product => renderOne(product));
}


function renderOne(products) {
  randowProductsContainer.textContent = (products.title - products.price);// Use backticks for string interpolation

}


function clearProductsList() {
  productslist.querySelectorAll("*").forEach(child => child.remove());
}



