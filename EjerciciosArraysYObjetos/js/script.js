/* EJERCICIOS DE ARRAYS Y OBJETOS
Arrays: 
1. Dado el array = [1,2,3,4,5,6] */
//Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
const array = [1, 2, 3, 4, 5, 6];
let i = 0;
console.log('Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla:');
while (i < array.length) {
  console.log(array[i]);
  i++;
}
console.log('__________________________');

//Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
console.log('Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla:');
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log('__________________________');

//Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
console.log('Mostrar todos los elementos dentro de un array sumándole uno a cada uno:');
for (let i = 0; i < array.length; i++) {
  console.log(array[i] + 1);
}
console.log('__________________________');

//Generar una copia de un array pero con todos los elementos incrementado en 1.
console.log('Generar una copia de un array pero con todos los elementos incrementado en 1:');
const newArray = [];
for (let i = 0; i < array.length; i++) {
  newArray.push(array[i] + 1);
}
console.log(newArray);
console.log('__________________________');

//Calcular la media de la suma total de sus elementos
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
const average = sum / array.length;
console.log('La media de la suma total de los elementos del array: ' + average);
console.log('__________________________');

//2. Pediremos a través de un bluce 6 números al usuario que almacenaremos en un array
console.log('Pediremos a través de un bluce 6 números al usuario que almacenaremos en un array:');
let numeros = [];
for (let i = 0; i < 6; i++) {
  let numero;
  do {
    numero = parseFloat(prompt('Ingresa un número, por favor'));
  } while (isNaN(numero) || numero === null);
  numeros.push(numero);
}
console.log(numeros);
console.log('__________________________');

//Imprimiremos por pantalla la longitud del array, el número más alto y el número más bajo
//Sin usar length:
//con bucle while:
let contador = 0;
while (numeros[contador] !== undefined) {
  contador++;
}
console.log('Longitud del array usando un bucle: ' + contador);

console.log(`Longitud del array usando length: ${numeros.length}`);

//Se podrían utilizar la función Math.max() y Math.min() siendo más fácil.
//Usando el metodo sort() y obtener el ultimo elemento del array
let maxNum = numeros.sort((a, b) => b - a)[0];
console.log('El número más alto del array usando sort: ' + maxNum);

let maxNumber = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maxNumber) {
    maxNumber = numeros[i];
  }
}
console.log('El número más alto del array: ' + maxNumber);

//usando método reduce
let minNum = numeros.reduce((a, b) => Math.min(a, b));
console.log('El número más bajo del array usando reduce: ' + minNum);

//con bucle for:
let minNumber = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < minNumber) {
    minNumber = numeros[i];
  }
}
console.log('El número más bajo del array: ' + minNumber);
console.log('__________________________');

/*1. Crearemos un objeto coche que tendra las siguientes propiedades: 
marca (String),
modelo (String), 
año de fabricación (Number), 
velocidad (Number), 
arrancado(Boolean)
Para este objeto deberemos definir los siguientes métodos:
-acelerar(incrementa en 10 la velocidad),
-parar(pone a 0 la velocidad),
-arrancarApagar(arranca o apaga el motor)*/
let coche = {
  marca: '',
  modelo: '',
  anio: 0,
  velocidad: 0,
  arrancado: false,

  acelerar: function () {
    if (this.arrancado) {
      this.velocidad += 10;
      console.log(`El coche ha acelerado a ${this.velocidad} km/h`);
    } else {
      console.log('El coche no está arrancado');
    }
  },

  parar: function () {
    this.velocidad = 0;
    console.log('El coche ha parado');
  },

  arrancarApagar: function () {
    this.arrancado = !this.arrancado;
    if (this.arrancado) {
      console.log('El coche ha sido arrancado');
    } else {
      console.log('El coche ha sido apagado');
    }
  },
};

console.log('Objeto coche:');
console.log(coche); //El coche con todas las propiedades

console.log('Objeto coche con propiedades añadidas:');
coche.marca = 'Citroen'; //añadir nueva propiedad
coche.modelo = 'Xsara'; //añadir nueva propiedad
coche.anio = 2000; //añadir nueva propiedad
console.log(coche); //El coche con todas las propiedades
coche.velocidad = 150; //añadir nueva propiedad
coche.arrancado = false; //añadir nueva propiedad

console.log('Objeto coche con otras propiedades añadidas:');
coche.marca = 'Ford'; //añadir nueva propiedad
coche.modelo = 'Mondeo'; //añadir nueva propiedad
coche.anio = 2019; //añadir nueva propiedad
console.log(coche); //El coche con todas las propiedades

console.log('Métodos del Objeto: ');
coche.arrancarApagar(); // El coche ha sido encendido
coche.acelerar(); // El coche ha acelerado a 10 km/h
coche.acelerar(); // El coche ha acelerado a 20 km/h
coche.parar(); // El coche ha parado
console.log(coche); //El coche con todas las propiedades
console.log('__________________________');

/*2. Crearemos un objeto persona que tendra las siguientes propiedades: 
nombre (String), 
2 apellidos (Array), 
edad (Number),
direccion (String)
Añadiremos un método que imprima el siguiente mensaje por pantalla 
('¡Hola! Me llamo David Lopez Hernandez, tengo 22 años y vivo en C/Ave del Paraíso Nº7')*/
let persona = {
  nombre: 'David',
  apellidos: ['Lopez', 'Hernandez'],
  edad: 22,
  direccion: 'C/Ave del Paraíso Nº7',
  imprimirMensaje: function () {
    console.log(
      `¡Hola! Me llamo ${this.nombre} ${this.apellidos[0]} ${this.apellidos[1]}, tengo ${this.edad} años y vivo en ${this.direccion}`
    );
  },
};
persona.imprimirMensaje();