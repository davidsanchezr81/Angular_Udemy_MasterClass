'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso de JS de Victor Robles";
var texto2 = "Es muy buen curso";

// // Como transformar numeros a string

// var dato = numero.toString();

// var dato = texto1.toUpperCase();

// //console.log(dato);


// // console.log(texto1.length);

// var textoTotal = texto1+ "eso" +texto2;
// var textoTotal1 = texto1.concat("eso" +texto2) ;
// console.log(textoTotal1);

//----------------------------------

var busqueda = texto1.indexOf("al");
var busqueda1 = texto1.search("al");


var busqueda2 = texto1.match("Vi");
console.log(busqueda2);


var busqueda3 = texto1.includes("Bienvenido"); // true or false, boolean type
console.log(busqueda3);


//----------------------

var busqueda4 = texto1.replace("Bienvenido", "Mamenlo")
console.log(busqueda4);

var busqueda5 = texto1.split(" ");
console.log(busqueda5);

var busqueda6 = texto1.trim();
console.log(busqueda6);

//------------------ 
