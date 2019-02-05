'use strict'

// Arrays, arreglos

var nombres = ["Antonio","Pedro","Juan", "Camila", "Elisol"];

var lenguajes = ["Java","PHP","HTML", "C#", "JS"];

// console.log(nombres[0]);

// console.log(nombres.length);

// console.log(nombres[2].length);

// var elemento = parseInt(prompt("Que elemento del array quieres?", 0))
// if(elemento >= nombres.length){
//     alert("Introduce un numero correcto menor que " + nombres.length)
// }else{
//     alert("El nombre seleccionado es : " + nombres[elemento]);
// }


// usando for para los loops
// document.write("<h1>Lenguajes de programacion</h1>");
// document.write("<ul>");

// for(var i = 0; i<lenguajes.length; i++){
// document.write("<li>" + lenguajes[i] + "</li>")
// }

// document.write("</ul>");

// // usando foreach para los loops

// document.write("<h1>Lenguajes de programacion</h1>");
// document.write("<ul>");

// lenguajes.foreach((element, index, arr) =>{
// document.write("<li>" + element + "</li>")
// });


//---- Recorrer arrays con "for in"
// document.write("</ul>");

// var lenguajes = ["Java","PHP","HTML", "C#", "JS"];

// for(let lenguaje in lenguajes){
//     document.write("<li>" + lenguaje + "</li>") // esto despliega los bullet point con numeros del 0 al 4
// };

// for(let lenguaje in lenguajes){
//     document.write("<li>" + lenguajes[lenguaje] + "</li>") // esto despliega los bullet point con los lenguajes de programacion
//                                                             // listeados. Eso se debe al index que esta entre los corchetes
// };

//--- busqueda dentro de un array

var busqueda = lenguajes.find(function(lenguaje)
{
return lenguaje == "PHP";
})

console.log(busqueda);

// Esto hace lo MISMO que ARRIBA

var busqueda1 = lenguajes.find( lenguaje => lenguaje == "PHP");

console.log(busqueda1);

//Esto consigue el index de un elemento. Con ese indice se pueden hacer muchas cosas

var busqueda1 = lenguajes.find( lenguaje => lenguaje == "PHP");

console.log(busqueda1);

///

var precios = [10, 20, 30, 50, 80]

var busqueda2 = precios.some(precio => precio < 80);

console.log(busqueda2);