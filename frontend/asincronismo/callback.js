/*ASYNCHRONOUS CALLBACKS - CALLBACKS ASINCRÓNICOS 
Un callback asincrónico es ejecutado después de la ejecución de la función de orden superior que invoca a dicho callback.
Asincronismo significa que si JavaScript tiene que esperar a que una operación finalice, ejecutará el resto del código mientras espera esa conclusión.
Supongamos que necesitamos desarrollar un script que descargue una foto de un servidor remoto y la procese después de que la descarga finalice (obvio chango, no la va a procesar si no la tiene 😅)
*/

function download(url) {
    setTimeout(() => {
      console.log(`\nDescargando ${url} ...`);
      pic = url;
    }, 2000);
  }
  
  function process(pic) {
    console.log(`\nProcesando imagen: ${pic} ...`);
  }
  
  const url = "https://en.wikipedia.org/Day_of_the_Tentacle_artwork.jpg";
  let pic;
  
  // download(url);
  // process(pic);
  
  /* Problema, no puedo procesar una imagen que aún no se ha descargado. Como la función download tiene una demora, la función process se ejecuta sin recibir realmente la imagen que viene de la descarga... porque todavía no llegó
   */
  
  function downloadB(url, success, failure) {
    setTimeout(() => {
      console.log(`\nDescargando ${url} ...`);
      !url ? failure(url) : success(url);
    }, 2000);
  }
  
  downloadB(
    "",
    url => console.log(`Procesando imagen: ${url} ...`),
    url => console.log(`La url '${url}' no es válida`)
  );
  
  function success() {}
  
  /*callback hell*/