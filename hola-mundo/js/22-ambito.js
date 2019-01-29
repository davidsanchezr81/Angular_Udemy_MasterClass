'use strict'



function holaMundo(texto){
    
    var texto1 = "Yo soy una variable local";
    console.log(texto1)
};

var texto = "Hola Mundo soy una variable global";
holaMundo(texto);
//holaMundo(texto1); // esto da un error porque no se puede llamar una variable local desde 