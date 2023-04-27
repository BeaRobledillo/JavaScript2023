//ARRAYS
//1. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color 
//introducido por el usuario a través de un prompt se encuentra dentro del array o no.
//usando método includes() busca el valor que le pasemos para saber si el array o cadena contiene ese valor

const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorUser = prompt("Introduce un color:");

// Validar que el usuario ingresa los conjuntos de números en el formato correcto
if (colorUser === null || colorUser === "") {
    console.log("Por favor introduce un color válido.");
} else
if (colores.includes(colorUser)) { //Array.prototype.includes() metodo Determina si el array contiene el valorBuscado y devuelve true o false según sea el caso.
    console.log(`El color ${colorUser} se encuentra en el array.`);
} else {
    console.log(`El color ${colorUser} NO se encuentra en el array.`);
}
console.log('__________________________');

//2. Existen dos arrays, cada uno con 5 elementos, generar un nuevo array con la unión de ambos elementos, (
//Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4])
//usando spread, es un operador que simplifica la recogida de valores en una estructura de datos. 
//Su representa con tres puntos: ...

const array1 = [1, 2, 3];
const array2 = [1, 2, 4];
let newArray = [...array1, ...array2];
console.log('La unión de ambos elementos es ' + newArray); // [1, 2, 3, 1, 2, 4]
console.log('__________________________');

//3. Crear una función que reciba un array y devuelva otro ordenado. 
//La función tendrá dos parámetros el array que recibe y otro parámetro para determinar orden del array devuelto.

function sortArray(arr, order) {
    if (order === "ascendente") {
        return arr.sort((elemento, b) => elemento - b); //sort()ordena
    } else
    if (order === "descendente") {
        return arr.sort((elemento, b) => b - elemento);
    } else {
        return "No válido";
    }
}
console.log('Array ascendente: ' + sortArray([3, 1, 2], "ascendente")); // [1, 2, 3]
console.log('Array descendente: ' + sortArray([3, 1, 2], "descendente")); // [3, 2, 1]
console.log('__________________________');

//4. Dado el array [1,2,3,4,5,6,7,8,9] volcar los 3 últimos elementos en otro array.

//usando metodo slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). 
//El array original no se modificará.

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ultis = originalArray.slice(-3);
console.log('Usando método slice:');
console.log('Los 3 últimos elementos son: ' + ultis); // [7, 8, 9]
console.log('__________________________');


//usando metodo splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//let originalArray = [1,2,3,4,5,6,7,8,9];
/* let ultis = originalArray.splice(-3);
console.log('Usando método splice:');
console.log('Los 3 últimos elementos son: ' + ultis); // [7, 8, 9]
console.log('__________________________');
 */

//5. Pedimos al usuario 5 valores que guardaremos en un array, 
//después extraeremos el primer elemento y lo mostraremos al usuario.
//usando El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

let valorUser = [];
for (let i = 1; i < 6; i++) {
    valorUser.push(prompt('Ingresa el valor ' + i + 'º :'));
}
console.log(valorUser);
console.log("El primer valor es: " + valorUser[0]);
console.log('__________________________');


//6. El usuario ingresa dos conjuntos de números separados por coma, 
//el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.
//El método split() divide (fragmenta) un string en dos o más sub cadenas usando un separador (divisor). 
//El separador puede ser un solo carácter, otra cadena, o una expresión regular.

const cadena1 = prompt("Ingresa el primer conjunto de números (separados por comas):")
const cadena2 = prompt("Ingresa el segundo conjunto de números (separados por comas):")
const arrayOne = cadena1.split(",")
const arrayTwo = cadena2.split(",")
if (arrayOne.length === arrayTwo.length) {
    console.log("Ambos conjuntos tienen la misma cantidad de números")
}
else {
    console.log("Los conjuntos NO tienen la misma cantidad de números")
}
console.log('__________________________');

//7. El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos 
//mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])
//El método split() divide (fragmenta) un string en dos o más sub cadenas usando un separador (divisor). 
//El separador puede ser un solo carácter, otra cadena, o una expresión regular.

let userArray1 = prompt("Ingresa el primer conjunto de números: (separados por comas)");
let userArray2 = prompt("Ingresa el segundo conjunto de números: (separados por comas)");

let coma1Array = userArray1.split(",");
let coma2Array = userArray2.split(",");

//función para sumar la cantidad de elementos del conjunto
if (coma1Array.length === coma2Array.length) {
    let sumArray = coma1Array.map(function (num, i) {
        return parseInt(num) + parseInt(coma2Array[i]);
    });
    console.log("La suma de los elementos es: " + sumArray);
} else {
    console.log("Los conjuntos NO tienen la misma cantidad de números, no se puede realizar la suma.");
}
console.log('__________________________');

//a la hora de sumar array1 de i + array2 push() parseInt
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


//8. Existen dos arrays, cada uno con 5 elementos, generar un nuevo array con la intersección de ambos elementos. 
//(Ejemplo: [1,2,3] unión [1,2,4] = [1,2])
//Verificar la presencia de cada elemento del primer array en el segundo array. 
//Esto se puede hacer fácilmente usando el indexOf() método con el filter() 

const primer = [1, 2, 3, 4, 5];
const segun = [1, 2, 3, 4, 5];

let comun = primer.filter(x => segun.indexOf(x) !== -1)
console.log("La intersección de ambos elementos: " + comun); //Resultado: 2,3
console.log('__________________________');