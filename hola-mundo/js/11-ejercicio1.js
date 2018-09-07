'use strict'

/* Programa qwue pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales*/


var numero1 = parseInt(prompt('Introduce el primer numero', 0));// prompt ayuda a pedirle al usuario los datos de ingreso. 0 sera el valor por defecto
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));// ya que prompt recoje un string, hay que convertirlo a numero y eso se hace usando parseInt

console.log(numero1, numero2);


if(numero1 == numero2){
	alert("Los Numeros son Iguales");
}else if(numero1 > numero2){
	alert("Numero 1 es mayor que Numero 2");
}else if(numero2 > numero1){
	alert("Numero 2 es mayor que el Numero 1")
}else{
	alert("Introducir numeros validos")
}


/* Plus: si los numeros no son un numero o son menores o iguales a cero, que nos vuelva a pedir los numeros*/


var numero1 = parseInt(prompt('Introduce el primer numero', 0));// prompt ayuda a pedirle al usuario los datos de ingreso. 0 sera el valor por defecto
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));// ya que prompt recoje un string, hay que convertirlo a numero y eso se hace usando parseInt

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){  // este while lo que hace es pedir a que se inserten los numeros hasta que los acepte
	numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}


if(numero1 == numero2){
	alert("Los Numeros son Iguales");
}else if(numero1 > numero2){
	alert("Numero 1 es mayor que Numero 2");
}else if(numero2 > numero1){
	alert("Numero 2 es mayor que el Numero 1")
}else{
	alert("Introducir numeros validos")
}
