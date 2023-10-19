let jsondata = `{
    "empleados" : [
        {"nombre" : "juan", "apellido" : "perez"},
        {"nombre" : "karina", "apellido" : "gonzalez"},
        {"nombre" : "luz", "apellido" : "lopez"},
        {"nombre" : "marcos", "apellido" : "villalba"}
     ]
}`

//console.log(jsondata[5]); //esto mostraria la posicion 5 del arreglo que es un string

let processedData = JSON.parse(jsondata);// para poder ejecutar correctamente este archivo json y acceder a esas propiedades, lo convertimos a un objeto js mediante el parse

console.log(processedData.empleados[2]);//posicion 0 del arreglo de empleados

