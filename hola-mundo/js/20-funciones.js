'use strict'

// Trabajaremos con parametros de REST 

function listadoFrutas(fruta1, fruta2,...resto_de_furtas){ // ... es el parametro REST. se usa delante del parametro opcional
                                                    // para mostrar el resto de los elementos (coco, melon, pera)
    console.log("Fruta 1 es: " + fruta1);
    console.log("Fruta 2 es: " + fruta2);
    console.log(resto_de_furtas);

}
listadoFrutas("cambur", "patilla", "coco", "melon", "pera");


//Trabajaremos con parametros de SPREAD

var frutas = ["Manzana", "Cambur"]
listadoFrutas(...frutas, "patilla", "coco", "melon", "pera"); // al colocarle los tres puntos a frutas en SPREAD, permito que los
//elementos del array, en vez de ser presentados en la consola como un array, se vern de la forma Fruta 1 es Manzana
