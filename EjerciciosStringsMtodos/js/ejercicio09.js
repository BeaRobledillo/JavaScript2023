//9. Dado el string "Hello World", 
//convertir la primera letra a mayúscula.

//En Javascript, no existe una función .toCapitalize().
//El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
//El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
//El método slice() extrae una sección de una cadena y devuelve una cadena nueva.

let myString = 'hello world';
console.log(myString);
const capitalize = myString => myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(capitalize(myString));


/*
//Con una función:
let myString = 'Hello World';
console.log(myString);

function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizarPrimeraLetra(myString));*/

