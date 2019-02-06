'use strict'

// BOM - Browse Object Model

function getBom(){

console.log(window.innerHeight);//para ver el tamaño de la ventana
console.log(innerWidth);
console.log(window.location); //muestra la url de la pagina en cuestion
}

getBom();

function redirect(url){ // en la consola usas este metodo redirect(url) 
    window.location.href = url; // la url sera la quq quieras navegar
}


// function abrirVentana(url){ // cuando se corre en consola abre otra pestaña del navegador
//     window.open(url);
// }

function abrirVentana(url){ // en consola abre otra pestaña del navegador con las medidas especificadas
    window.open(url,"","width=400, height=300");
}

getBom();

