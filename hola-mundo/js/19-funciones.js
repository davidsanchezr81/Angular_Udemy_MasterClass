'use strict'

function calculadora(numero1, numero2, mostrar = false){
	

	if(mostrar == false){
		console.log("Suma " + (numero1 + numero2));
		console.log("Resta " + (numero1 - numero2));
		console.log("Division " + (numero1 / numero2));
		console.log("Multiplicacion " + (numero1 * numero2));
	}else
	{
	document.write("Suma " + (numero1 + numero2) + "</br>");
	document.write("Resta " + (numero1 - numero2) + "</br>");
	document.write("Division " + (numero1 / numero2) + "</br>");
	document.write("Multiplicacion " + (numero1 * numero2) + "</br>");
}
	
}

calculadora(1,4, false);

/* usando un for loop */

// for(var i=1; i<=10; i++){

// 	console.log(i);
// 	calculadora(i, 8);

// }