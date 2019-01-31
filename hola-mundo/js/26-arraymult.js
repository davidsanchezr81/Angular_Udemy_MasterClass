'use strict'

// var categorias = ['Terror', 'Amor', 'Accion', 'Comedia'];

// var peliculas = ['La vida es bella', 'La verdad duele', 'Gran Torino'];

// var cine = [categorias, peliculas]; // este e sun array multidimensional

// console.log(cine[0][1]);

// //--Operaciones con array


// // WHILE
// // var elemento = prompt("Introduce tu pelicula");

// // while(elemento != "Acabar"){
// //     elemento = prompt("Introduce tu pelicula")
// //     peliculas.push(elemento); // para meter elementos en el array
// // }

// // // DO WHILE
// // do{
// //     elemento = prompt("Introduce tu pelicula")
// //     peliculas.push(elemento);
// // } while(elemento != "Acabar");


// console.log(peliculas);

// peliculas.pop(); // esto elimina el ultimo elemento del array

// peliculas[0] = undefined; // esto es para colocarlo undefined

// var ubicacion = peliculas.indexOf("La vida es bella");

// var ubicacion1 = peliculas[2];


// /// Borrar un elemento en especifico del array

// var index = peliculas.indexOf("La vida es bella");

// if(index > -1){
//     peliculas.splice(index,2);// splice te elimina elementos de un array en referencia al de indexOf y el numero de espacios que colocas
// }


// var peliculas_string = peliculas.join();
// console.log(peliculas_string);


///--- Convertir un string a un array

var cadena = "texto1, texto2, texto3";

var cadena_array = cadena.split(", ");

console.log(cadena_array);

//-- Ordenar array

var peliculas = ['La vida es bella', 'La verdad duele', 'Gran Torino'];

console.log(peliculas);

peliculas.sort(); // lo ordena por orden alfabetico o numerico

peliculas.reverse(); // lo ordena por orden invertido


//---- Recorrer arrays con "for in"

var lenguajes = ["Java","PHP","HTML", "C#", "JS"];

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguaje + "</li>") // esto despliega los bullet point con numeros del 0 al 4
};

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>") // esto despliega los bullet point con los lenguajes de programacion
                                                            // listeados. Eso se debe al index que esta entre los corchetes
};