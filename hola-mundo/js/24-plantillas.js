'use strict'

// hacer plantillas de texto

var nombre = prompt(" Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");
var texto = " Mi nombnre es " + nombre + " y mi apellido es "+ apellidos;
document.write(texto);


//puedo hacer lo mismo que arriba y uso una plantilla--- hay que usar comillas invertidas para esto ``
var texto = `<h1>Hola que tal</h1>
<h3>Mi nombre es : ${nombre}</h3>
<h3>Mi apellido es : ${apellidos}</h3>`;