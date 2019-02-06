'use strict'

// DOM Document Object Model

function cambiaColor(color){
    caja.style.backgroundColor = color;
}

//para seleccionar elementos en ek DOM

//var caja = document.getElementById("micaja").innerHTML; // inner saca el texto de adentro
// var caja = document.getElementById("micaja") //# forma 1 de hacerlo

var caja = document.querySelector("#micaja"); // # forma 2 de hacerlo para seleccionar elementos por medio de la clase

caja.innerHTML = "Texto en la caja";  // esto permite cambiar el contenido del html

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola"; // para cambiar el nombre de la clase



console.log(caja);

// seleccionar usando query Selector


