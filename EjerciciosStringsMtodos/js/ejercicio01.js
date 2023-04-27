//1. Revertir un string:

//El método reverse() invierte el orden de los elementos de un array in place.
//El primer elemento pasa a ser el último y el último pasa a ser el primero.

let myString = 'All Right!';
console.log(myString);
myString = [...myString].reverse();

myString = String(myString)
console.log(myString);

//paso previo comprobar y quitar espacios en blanco trim
//averiguar si existe 
//si son de mas de una palabra el split seria el espacio