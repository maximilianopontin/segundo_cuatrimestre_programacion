let btn = document.getElementById("aqui");

btn?.addEventListener("click", (event) => {
    console.log("Hola");   
})

btn?.addEventListener("click", intercambiarClase);

function intercambiarClase(){
    document.querySelector("p")?.classList.toggle("oculto");
}