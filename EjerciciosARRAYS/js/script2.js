//ARRAYS
//1. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color 
//introducido por el usuario a través de un prompt se encuentra dentro del array o no.

//Para determinar si un color introducido por el usuario se encuentra en un array en JavaScript, 
//puedes usar el método indexOf(). 
//Este método devuelve la posición del elemento en el array si se encuentra, o -1 si no se encuentra.

const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorUser = prompt("Introduce un color:");

if (colorUser === null || colorUser === "" || isNaN(colorUser)) {
    console.log("Por favor introduce un color válido.");
} else
if (colores.includes(colorUser)) { //Array.prototype.includes() metodo Determina si el array contiene el valorBuscado y devuelve true o false según sea el caso.
    console.log(`El color ${colorUser} se encuentra en el array.`);
} else {
    console.log(`El color ${colorUser} NO se encuentra en el array.`);
}
console.log('__________________________');


/* let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let userColor = prompt("Introduce un color:");
let colorIndex = colores.indexOf(userColor);

if (colorIndex !== -1) {
  console.log(`El color ${userColor} se encuentra en el array en la posición ${colorIndex}`);
} else {
  console.log(`El color ${userColor} no se encuentra en el array`);
} */

/*let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorUser = prompt("Introduce un color:");

if (colorUser === null || colorUser === "") {
console.log("Por favor introduce un valor válido.");
} else if (isNaN(colorUser)) {
if (colores.includes(colorUser)) {
console.log(El color ${colorUser} se encuentra en el array.);
} else {
console.log(El color ${colorUser} NO se encuentra en el array.);
}
} else {
console.log("Por favor introduce un valor válido.");
}
console.log('__________________________');

if (colores.includes(colorUser)) { /Array.prototype.includes() metodo Determina si el array contiene el valorBuscado y devuelve true o false según sea el caso.
    console.log(`El color ${colorUser} se encuentra en el array.`);
} else {
    console.log(`El color ${colorUser} NO se encuentra en el array.`);
}
console.log('__________________________');

*/

//Puedes también usar el método includes() que retorna un valor booleano si el valor especificado se encuentra dentro del array o no.

/* let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorUser = prompt("Introduce un color:");

if (colors.includes(colorUser)) {
  console.log(`El color ${colorUser} se encuentra en el array.`);
} else {
  console.log(`El color ${colorUser} no se encuentra en el array.`);
}
 */

//Sí, existen otros métodos para determinar si un elemento se encuentra en un array en JavaScript. Algunos ejemplos incluyen:
//find(): Este método devuelve el primer elemento del array que cumple con la función de prueba especificada. 
//Puedes usar esto para buscar un elemento específico en el array y devolverlo si se encuentra.
//let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]; //ya esta declarado
//let userColor = prompt("Introduce un color:"); //ya esta declarado
let foundColor = colors.find(color => color === userColor);

if (foundColor) {
  console.log(`El color ${userColor} se encuentra en el array.`);
} else {
  console.log(`El color ${userColor} no se encuentra en el array.`);
}

//filter(): Este método devuelve un nuevo array con todos los elementos que pasan la función de prueba especificada. 
//Puedes usar esto para buscar varios elementos en el array y devolverlos en un nuevo array.
//let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
//let userColor = prompt("Introduce un color:");
let foundColors = colors.filter(color => color === userColor);

if (foundColors.length > 0) {
  console.log(`El color ${userColor} se encuentra en el array.`);
} else {
  console.log(`El color ${userColor} no se encuentra en el array.`);
}

//some(): Este método devuelve true si al menos uno de los elementos del array cumple con la función de prueba especificada.
//let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
//let userColor = prompt("Introduce un color:");
let someColors = colors.some(color => color === userColor);

if (someColors) {
  console.log(`El color ${userColor} se encuentra en el array.`);
} else {
  console.log(`El color ${userColor} no se encuentra en el array.`);
}

//every(): Este método devuelve true si todos los elementos del array cumplen con la función de prueba especificada.
//let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
//let userColor = prompt("Introduce un color:");
let everyColors = colors.every(color => color !== userColor);

if (!everyColors) {
  console.log(`El color ${userColor} se encuentra en el array.`);
} else {
  console.log(`El color ${userColor} no se encuentra en el array.`);
}

//2. Existen dos arrays, cada uno con 5 elementos, generar un nuevo array con la unión de ambos elementos, 
//(Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4])
//Puedes utilizar el método concat() de JavaScript para unir dos arrays. Por ejemplo:
let array1 = [1, 2, 3];
let array2 = [1, 2, 4];
//let newArray = array1.concat(array2);
console.log(newArray); // [1, 2, 3, 1, 2, 4]

//También se puede utilizar el operador spread ... para unir dos arrays. Por ejemplo:
//let array1 = [1, 2, 3];
//let array2 = [1, 2, 4];
let newArray2 = [...array1, ...array2];
console.log(newArray2); // [1, 2, 3, 1, 2, 4]

//3. Crear una función que reciba un array y devuelva otro ordenado. 
//La función tendrá dos parámetros el array que recibe y otro parámetro para determinar orden del array devuelto.
//Puedes utilizar el método sort() de JavaScript para ordenar un array. 
//Por defecto, este método ordena los elementos de un array en orden alfabético (para valores de tipo string) o en orden numérico (para valores de tipo numérico).
//Aquí te dejo un ejemplo de una función que recibe un array y devuelve otro ordenado, con un segundo parámetro para determinar el orden del array devuelto:
function sortArray(arr, order) {
  if (order === "asc") {
    return arr.sort((a, b) => a - b);
  } else if (order === "desc") {
    return arr.sort((a, b) => b - a);
  } else {
    return "Invalid order";
  }
}

console.log(sortArray([3, 1, 2], "asc")); // [1, 2, 3]
console.log(sortArray([3, 1, 2], "desc")); // [3, 2, 1]


//Hecho por Oscar:
function ordenar(arrayTres = [1, 3, 2], orden = "ASC") {
  let array = [];
  if (orden === "ASC") {
    array = arrayTres.sort();
  }
  if (orden === "DSC") {
    array = arrayTres.sort().reverse();
  }
  return array;
}

//En este ejemplo, la función sortArray() recibe dos parámetros: el array a ordenar y un string que determina el orden del array devuelto. 
//Si el orden es "asc", se devuelve el array ordenado en orden ascendente (de menor a mayor); si el orden es "desc", se devuelve el array ordenado en orden descendente (de mayor a menor); 
//Si no se introduce un orden válido se devuelve un mensaje "Invalid order"

//Sí, también se puede utilizar el operador spread ... para crear una copia del array original y luego ordenarlo con el método sort() de JavaScript. Por ejemplo:
function sortArray(arr, order) {
  let sortedArray = [...arr];
  if (order === "asc") {
    return sortedArray.sort((a, b) => a - b);
  } else if (order === "desc") {
    return sortedArray.sort((a, b) => b - a);
  } else {
    return "Invalid order";
  }
}

console.log(sortArray([3, 1, 2], "asc")); // [1, 2, 3]
console.log(sortArray([3, 1, 2], "desc")); // [3, 2, 1]

//4. Dado el array [1,2,3,4,5,6,7,8,9] volcar los 3 últimos elementos en otro array.
//Puedes utilizar el método slice() de JavaScript para extraer los últimos tres elementos de un array y almacenarlos en otro array. 
//El método slice() toma dos parámetros: el índice inicial y el índice final del rango de elementos a extraer. Si no se especifica un índice final, slice() extraerá elementos hasta el final del array.
//Aquí te dejo un ejemplo de cómo volcar los últimos tres elementos de un array en otro array:
let originalArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray3 = originalArray1.slice(-3);
console.log(newArray3); // [7, 8, 9]

//En este ejemplo, se utiliza el índice -3 como parámetro para slice() para extraer los tres últimos elementos del array original.
//También se puede utilizar el método splice() para lograr lo mismo, específicamente el segundo y tercer parámetro del método.
let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = originalArray.splice(-3, 3);
console.log(newArray); // [7, 8, 9]

//5. Pedimos al usuario 5 valores que guardaremos en un array, después extraeremos el primer elemento y lo mostraremos al usuario.
let values = [];
for (let i = 0; i < 5; i++) {
    values.push(prompt("Ingresa un valor: "));
}
alert("El primer valor es: " + values[0]);
/*La primera línea crea un array vacío llamado "values". El ciclo "for" se ejecuta 5 veces, en cada iteración se pide al usuario que ingrese un valor y se agrega al array "values" usando el método "push()". 
Finalmente, se muestra al usuario el primer elemento del array "values" usando la sintaxis "values[0]".*/

//6. El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.

let set1 = prompt("Ingresa el primer conjunto de números: ");
let set2 = prompt("Ingresa el segundo conjunto de números: ");

let set1Array = set1.split(",");
let set2Array = set2.split(",");

if (set1Array.length === set2Array.length) {
    console.log("Ambos conjuntos tienen la misma cantidad de números");
} else {
    console.log("Los conjuntos no tienen la misma cantidad de números");
}

/*La primera línea pide al usuario que ingrese el primer conjunto de números, y la segunda línea pide el segundo conjunto.
Luego se utiliza el método split(",") para convertir la cadena de texto en un arreglo, separando los elementos por comas.
Finalmente se compara el tamaño de ambos arreglos con set1Array.length === set2Array.length si es verdadero los conjuntos tienen la misma cantidad de elementos
si no es verdadero no tienen la misma cantidad.*/

/* let conjunto1 = prompt("Ingresa el primer conjunto de números (separados por comas):");
let conjunto2 = prompt("Ingresa el segundo conjunto de números (separados por comas):");

// Validar que el usuario ingresa los conjuntos de números en el formato correcto
if (!conjunto1.includes(",") || !conjunto2.includes(",")) {
    console.log("Por favor ingresa los conjuntos de números en el formato correcto (separados por comas)");
}

let conjuntoArray1 = conjunto1.split(",");
let conjuntoArray2 = conjunto2.split(",");

//función para contar la cantidad de elementos del conjunto
function contarCantidad(conjunto) {
    return conjunto.length;
}

console.log('Cantidad de números del primer conjunto: ' + contarCantidad(conjuntoArray1));
console.log('Cantidad de números del segundo conjunto: ' + contarCantidad(conjuntoArray2));

if (contarCantidad(conjuntoArray1) === contarCantidad(conjuntoArray2)) {
    console.log("Ambos conjuntos tienen la misma cantidad de números");
} else {
    console.log("Los conjuntos NO tienen la misma cantidad de números");
}
console.log('__________________________');

 */

//7. El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])

let userArray1 = prompt("Ingresa el primer conjunto de números: ");
let userArray2 = prompt("Ingresa el segundo conjunto de números: ");

let coma1Array = userArray1.split(",");
let coma2Array = userArray2.split(",");

if (coma1Array.length === coma2Array.length) {
    let sumArray = coma1Array.map(function(num, i) {
        return parseInt(num) + parseInt(coma2Array[i]);
    });
    console.log("La suma de los elementos es: " + sumArray);
} else {
    console.log("Los conjuntos no tienen la misma cantidad de números, no se puede realizar la suma.");
}

/*La primera línea pide al usuario que ingrese el primer conjunto de números, y la segunda línea pide el segundo conjunto.
Luego se utiliza el método split(",") para convertir la cadena de texto en un arreglo, separando los elementos por comas.
Se usa if (set1Array.length === set2Array.length) para verificar si ambos conjuntos tienen la misma cantidad de elementos.
Si es verdadero, se utiliza el método map() para iterar a través de cada elemento del primer arreglo y sumarlo con el elemento correspondiente del segundo arreglo. El resultado se guarda en un nuevo arreglo "sumArray".
Finalmente se imprime el arreglo "sumArray" que contiene la suma de cada elemento.
Si no es verdadero, se imprime un mensaje indicando que los conjuntos no tienen la misma cantidad de elementos y no se puede realizar la suma.*/

//8. Existen dos arrays, cada uno con 5 elementos, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2])

var first = [1, 2, 3, 4, 5];
var second = [1, 2, 3, 4, 5];

var common = first.filter(x => second.indexOf(x) !== -1)
console.log("La intersección de ambos elementos: " + common);
console.log('__________________________');

//Resultado: 2,3

//Puedes utilizar la función filter() de JavaScript para filtrar los elementos que existen en ambos arrays y luego 
//utilizar la función Set() para eliminar los elementos duplicados.

let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = [3, 4, 5, 6, 7];

let intersection = arrayOne.filter(value => arrayTwo.includes(value));
intersection = [...new Set(intersection)];
console.log(intersection); // [3, 4, 5]

//Otra forma es usar la función filter() para filtrar los elementos de un array comparando con el otro array con la función some(), 
//lo que te permite obtener elementos que estan en ambos arrays.

let arrayUno = [1, 2, 3, 4, 5];
let arrayDos = [3, 4, 5, 6, 7];

let interseccion = arrayUno.filter(val => arrayDos.some(val2 => val2 === val));
console.log(interseccion); // [3, 4, 5]
