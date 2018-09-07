'use strict'

/* Programa que muestre todos los numeros que existen entre los dos numeros introducidos por el usuario*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write("<h1>De"+numero1+" a "+numero2+" estan estos numeros</h1>") // esto permitte añadir texto en la pagina
for(var i = numero1; i<= numero2; i++){
	document.write(i+"</br>");

}