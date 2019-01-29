'use strict'

//Funciones anonimas - es una funciom que no tiene nombre y se puede guardar en una variable
// se usa para los call-backs

// var pelicula = function(nombre){

//     return "La pelicula es " + nombre;
// }

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;

    
}

//console.log(sumame(1,2));

sumame(5,7,function(dato){
    console.log("La suma es: ",dato)
},
function(dato){
    console.log("La suma por dos es :", (dato*2))
}
);