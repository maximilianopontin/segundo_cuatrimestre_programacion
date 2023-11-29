//funcion que devuelve una promesa
function hacerAlgoPromesa() {
    return new Promise(function (resolve, reject) {
        console.log(" hacer algo que ocupa un tiempo...");
        //simulacro de llamado asincrono exitoso
        setTimeout(resolve, 1500);
        //simulacro de llamado asincrono no exitoso
        setTimeout(reject, 3500);
    })
}
//se espera un resultado de la promesa, exitoso o fallido, solo uno. no puede ejecutar las dos a la vez
hacerAlgoPromesa()
    .then(function () {// respuesta al camino exitoso
        console.log("promesa finalizada con exito, ejecucion de pseudocodigo con respuesta exitosa");
    })
    .catch(function (err) {//respuesta al camino no exitoso
        console.log("se acabo su sesion, usuario no autorizado", err);
        //el catch podemos hacerlo dinamico o ademas del msj podemos darle mas informacion y poner un numero del error como el 404 
    });

// console.log (" hago algo despues de que empezo la promesa");// este console.log se ejecuta a la misma vez que se ejecuta la funcion haceralgopromesa,
//se muestra antes que el conmsole log de la funcion porque la funcion tiene un tiempo de respuesta. y como no es bloqueante se ejecuta el console.log del ultimo bloque, sin que halla terminado la respuesta del bloque anterior(funcion promesa)
