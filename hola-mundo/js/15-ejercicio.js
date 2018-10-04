'use strict'

/*
Muestre todos los numeros divisores de un numero introducido en 


*/

var numero = parseInt(prompt("Mete un numero", 1)); // el numero que introduce el usuario

for (var i = 1; i <= numero; i++){

	if(numero%i == 0){
		  console.log("Divisor:" + i)
	}


  
}






