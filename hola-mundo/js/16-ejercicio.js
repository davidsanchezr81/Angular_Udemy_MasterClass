
/*
Que nos diga que si el numero es par o impar
1. Ventana Prompt
2. Si no es valido que nos pida el numero de nuevo
*/

var number = parseInt(prompt("Introduce un numero", 0));

while(isNaN(number)){
	number = parseInt(prompt("Introduce un numero", 0));
}

if(number%2 == 0){
	alert("El numero es par")
}
else{
	alert("El numero es impar")
}
	




