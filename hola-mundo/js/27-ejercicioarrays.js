'use strict'

// 1. Pide 6 numeros en pantalla y los meta en un array
// 2. Mostrar el array entero en el cuerpo de la pagina como en la consola
// 3. Ordenarlo y mostrarlo
// 4. Invertir su orden y mostrarlo
// 5. Mostrar cuantos elementos tiene el array 
// 6. Busqueda de un valor introducido por el usuario y que nos diga si esta en el array y ademas que nos diga su posicion (indice)



// var numeros = new Array(6); // en este especifico el tamaño del array

// for(var i = 0; i <=5; i++){
//     numeros[i] = parseInt(prompt("Introduce un numero : ", 0))
// }
// console.log(numeros);

// Este hace lo mismo que el de arriba pero usando Push
//Pedir seis numeros
var numeros1 = []; // aqui no se especifica tamaño

for(var i = 0; i <=5; i++){
    numeros1.push(parseInt(prompt("Introduce un numero : ", 0))) ;
}

//Mostrar en el cuerpo de la pagina
// document.write("<h1>El contenido de un array</h1>")
// numeros1.forEach((numero, index) =>{
//     document.write("<strong>"+numero+"</strong></br>");
// })


// //Mostrar el array en la console
// console.log(numeros1);

// // Ordenarlo y mostrarlo
// numeros1.sort();

// console.log(numeros1);


function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>El contenido de un array</h1>");
    document.write("<ul>");
elementos.forEach((elemento, index) => {
    document.write("<li>"+elemento+"</li>");
    });
document.write("</ul>");
}

//Para mostrar array se llama la funcion mostrarArray
// ** este metodo ordena de manera alphabetica, no numerica
//mostrarArray(numeros1); // el parametro del textoCustom es opcional

//Para mostrar array ordenado de manera numerica
numeros1.sort(function(a,b){return a-b});
mostrarArray(numeros1, 'ordenado');
//console.log(numeros1)

// Invertir y mostrar
numeros1.reverse();
mostrarArray(numeros1, 'reverso')