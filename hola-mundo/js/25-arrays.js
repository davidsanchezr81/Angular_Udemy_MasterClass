'use strict'

// Arrays, arreglos

var nombres = ["Antonio","Pedro","Juan", "Camila", "Elisol"];

var lenguajes = ["Java","PHP","HTML", "C#", "JS"];

console.log(nombres[0]);

console.log(nombres.length);

console.log(nombres[2].length);

// var elemento = parseInt(prompt("Que elemento del array quieres?", 0))
// if(elemento >= nombres.length){
//     alert("Introduce un numero correcto menor que " + nombres.length)
// }else{
//     alert("El nombre seleccionado es : " + nombres[elemento]);
// }


document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");

for(var i = 0; i<lenguajes.length; i++)
{
document.write("<li>" + lenguajes[i] + "</li>")
}

document.write("</ul>");