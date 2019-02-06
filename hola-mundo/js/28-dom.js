'use strict'

// DOM Document Object Model

function cambiaColor(color){
    caja.style.backgroundColor = color;
}

//////Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja").innerHTML; // inner saca el texto de adentro
// var caja = document.getElementById("micaja") //# forma 1 de hacerlo

var caja = document.querySelector("#micaja"); // # forma 2 de hacerlo para seleccionar elementos por medio de la clase

caja.innerHTML = "Texto en la caja";  // esto permite cambiar el contenido del html

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola"; // para cambiar el nombre de la clase

// console.log(caja);

// seleccionar usando query Selector


//////Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDivs[2].textContent; // Para el ver el contenido de un elemento

console.log(contenidoEnTexto);

//**  Para cambiar el contenido de un elemento en una posicion especifica

var contenidoEnTexto1 = todosLosDivs[1];
contenidoEnTexto1.innerHTML = " Otro elemento para la segunda posicion";

console.log(contenidoEnTexto1);


var seccion = document.querySelector('#miseccion');

var hr = document.createElement("hr");


var valor;
for( valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){ // esto es para que se desplieguen solo los elementos de string
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    
    }
}

seccion.append(hr);

//////Conseguir elementos por su clase

var divsRojos = document.getElementsByClassName('rojo');
console.log(divsRojos);

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background = "yellow";

console.log(divsRojos);

// otra manera

var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}

//Query Selector // sirve para seleccionar un elemento/el primer elemento de 

var id = document.querySelector("#encabezado")
console.log(id)

var claseRojo = document.querySelector("div.rojo")
console.log(claseRojo)

var etiqueta = document.querySelector("div")
console.log(etiqueta)