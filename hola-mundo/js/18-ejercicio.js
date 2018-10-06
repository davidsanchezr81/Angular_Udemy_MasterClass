'use strict'

/*
Hacer una calculadora que pide dos numeros por pantallas
- si metemos mal un numero nos pedira el nuemro de nuevo
- que nos muertre en el cuerpo (body) de la pagina en una alerta y por la consola el resultado de sumar, 
restar, multiplicar y dividir de las dos cifras
*/

var numero1 = parseInt(prompt("Introduzca el primer numero", 0));
var numero2 = parseInt(prompt("Introduzca el segundo numero", 0));


while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2 )){
	var numero1 = parseInt(prompt("Introduzca el primer numero", 0));
	var numero2 = parseInt(prompt("Introduzca el segundo numero", 0));
}

var resultado = "La suma de los dos numero es: "+(numero1 + numero2)+"<br/>"+
				"La resta de los dos numeros es: "+(numero1 - numero2)+"<br/>"+
				"La multiplicacion de los dos numeros es: "+(numero1 * numero2)+"<br/>"+
				"La division de los dos numeros es: "+(numero1 / numero2)+"<br/>";
/* Para poder colocar un break en el cuerpo de la pagina se usa </br>
Sin, embargo para poder ver el salto en la alerta o la consola es necesario usa "\n"
*/



var resultado1 = "La suma de los dos numero es: "+(numero1 + numero2)+"\n"+
				"La resta de los dos numeros es: "+(numero1 - numero2)+"\n"+
				"La multiplicacion de los dos numeros es: "+(numero1 * numero2)+"\n"+
				"La division de los dos numeros es: "+(numero1 / numero2)+"\n";

document.write(resultado);

alert(resultado1);
console.log(resultado1)