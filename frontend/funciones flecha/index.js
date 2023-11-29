
//la funcion flecha a diferencia de la anonima, no pone la palabra function y agrega la flecha despues del parametro
let botonEnviar= document.getElementById("boton");
//funcion anonima: declaramos la funcion dentro de las llaves
botonEnviar.addEventListener("click",  (event)=> {
    console.log (event);
    console.log(this.innerText);
    console.log(event.currentTarget=== this);//deberia dar true
})


let botonSaludar = document.getElementById("saludo");

let saludar = nombre => "Hola " + nombre;

botonSaludar.addEventListener("click", function () {
  let nombre = prompt("Ingrese su nombre:");
  console.log(saludar(nombre));
});

