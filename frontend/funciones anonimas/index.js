//buscamos boton con selector de elemento
const boton = document.querySelector('button');

boton.addEventListener("click", alertar);
function alertar () {
   alert ("hiciste click");
}

/*

//buscamos boton con id- 
boton.addEventListener("click", ()=>alert ("hiciste click"));//dispara la funcion cuando escuche el evento click



let botonEnviar= document.getElementById("boton");
//funcion anonima: declaramos la funcion dentro de las llaves
botonEnviar.addEventListener("click", function (event) {
    console.log (event);
    console.log(this.innerText);
    console.log(event.currentTarget=== this);//deberia dar true
})

boton.addEventListener("click", ()=>alert ("hiciste click"));//dispara la funcion cuando escuche el evento click


//this representa el elemento involucrado en el evento
*/