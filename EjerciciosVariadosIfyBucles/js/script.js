//1.- Pedir dos números al usuario y decir cual es el mayor.

let numero1 = prompt('Introduzca primer número, por favor.');
numero1 = Number(numero1);
console.log('Tu primer número es: ' + numero1);
let numero2 = prompt('Introduzca segundo número, por favor.');
numero2 = Number(numero2);
console.log('Tu segundo número es: ' + numero2);

if (numero1 > numero2) {
  console.log('El número mayor es: ' + numero1);
}
if (numero2 > numero1) {
  console.log('El número mayor es: ' + numero2);
}
if (numero1 == numero2) {
  console.log(numero1 + ' y ' + numero2 + ' son iguales.');
}
console.log('__________________________');

//2.- Pedir tres números al usuario y decir cual es el mayor
numero1 = prompt('Introduzca primer número, por favor.');
numero1 = Number(numero1);
console.log('Tu primer número es: ' + numero1);

numero2 = prompt('Introduzca segundo número, por favor.');
numero2 = Number(numero2);
console.log('Tu segundo número es: ' + numero2);

let numero3 = prompt('Introduzca segundo número, por favor.');
numero3 = Number(numero3);
console.log('Tu tercer número es: ' + numero3);

if (numero1 > numero2) {
  ronda = numero1;
} else {
  ronda = numero2;
}
if (ronda > numero3) {
  mayor = ronda;
} else {
  mayor = numero3;
}
console.log('El número mayor de la ronda es: ' + mayor);
if (numero1 == numero2 && numero2 == numero3) {
  console.log(numero1 + ' y ' + numero2 + ' y ' + numero3 + ' son iguales.');
}
console.log('__________________________');

//3.- Pedir la edad al usuario y decir si es o no mayor de edad

edad = prompt('Introduzca su edad, por favor.');
edad = Number(edad);
if (edad >= 18) {
  console.log('Su edad es: ' + edad + '. Usted es mayor de edad.');
} else {
  console.log('Su edad es: ' + edad + '. Usted es menor de edad.');
}
console.log('__________________________');

/*4.- Una progresión geométrica empieza con un número al que se le va
multiplicando otro, por ejemplo: Si empezamos por el 2 y la razón (el
número que se multiplica) es 3 la serie sería: 2,6,18,54….

Hagamos un programa que le pida al usuario un número inicial y una razón
y nos muestre todos los términos de esa razón geométrica menores de
100.
pedimos un numero inicial
pedimos una razon
y vamos calculando hasta llegar a 100

Inicial es 2
Razon es 3

2,6,18,54,162,me he pasado
*/
/* 
let inicial = prompt ('Introduzca el número inicial:');
console.log ('Tu número inicial es: ' + inicial);

let razon = prompt ('Introduzca la razón:');
console.log ('Tu número razón es: ' + razon);

let termino  = inicial;

while (termino  < 100) {
  console.log ('Los términos de esa razón geométrica menores de 100: ' + termino );
  termino  *= razon;
}
console.log("La progresión geométrica se ha detenido porque el término siguiente es mayor a 100.")
console.log ('__________________________'); 
 */

//Solución del profe(usando una función)
function geometrica(inicial, razon, numero) {
  let resultado = inicial;
  for (let i = 1; i < numero; i++) {
    resultado *= razon;
  }

  return resultado;
}
console.log(geometrica(1, 2, 10));
console.log('__________________________');

//5.- Escribir un programa que calcule la suma de todos los múltiplos de 5 menores de 100

let suma = 0;
for (let i = 5; i < 100; i += 5) {
  suma += i;
}
console.log('La suma de todos los múltiplos de 5 menores de 100 es: ' + suma);
console.log('__________________________');

//6.- Escribir un programa que nos cuente la cantidad de múltiplos de 5 menores de 100
let cantidad = 0;
for (var i = 5; i < 100; i++) {
  if (i % 5 === 0) {
    cantidad++;
  }
}
console.log('La cantidad de múltiplos de 5 menores de 100 es: ' + cantidad);
console.log('__________________________');

//6.- Escribir un programa que le pida al usuario un número nos cuente la cantidad de divisores de ese número menores de 100

let introduceNumero = prompt('Introduzca un número, por favor.');
introduceNumero = Number(introduceNumero);
console.log('Tu número es: ' + introduceNumero);
for (let i = 2; i < 100 / 2; i++) {
  if (introduceNumero % i === 0) {
    console.log('Los divisores de tu número son: ' + i);
  }
}
console.log('__________________________');

/* 7.- Pedimos dos números al usuario y le decimos si los dos tienen la
misma paridad (o sea, si los dos son pares o los dos son impares) o
diferente. */

numero1 = prompt('Introduzca primer número, por favor.');
numero1 = Number(numero1);
console.log('Tu primer número es: ' + numero1);
numero2 = prompt('Introduzca segundo número, por favor.');
numero2 = Number(numero2);
console.log('Tu segundo número es: ' + numero2);

if (numero1 % 2 === numero2 % 2) {
  console.log('Los números tienen la misma paridad.');
} else {
  console.log('Los números tienen diferente paridad.');
}
console.log('__________________________');

//8.- Escribir un programa que le pida textos al usuario, los imprima por la consola, y acabe cuando el usuario escriba ‘FIN’

//con break, jeje
while (true) {
  let input = prompt(
    'Introduzca un texto, por favor. (O escriba FIN para terminar'
  );
  if (input === 'FIN') {
    console.log('Introdujiste FIN.');
    break;
  }
  console.log('Introdujiste: ' + input);
}
console.log('__________________________');

//sin break
let continuar = true;
while (continuar) {
  let input = prompt(
    'Introduzca un texto, por favor. (O escriba FIN para terminar'
  );
  if (input === 'FIN') {
    console.log('Introdujiste FIN.');
    continuar = false;
  } else {
    console.log('Introdujiste: ' + input);
  }
}
console.log('__________________________');

/* 9.- Escribir un programa que le pida números al usuario, los sume, y
acabe cuando el usuario escriba 0 y nos muestre la suma total de los
números */

let sum = 0;
let input = 1;

while (input !== 0) {
  input = prompt("Ingrese un número para sumar (ingrese 0 para finalizar)");
  sum += input;
}

console.log("La suma total es: " + sum);
console.log('__________________________');

/* 10.- Escribir un programa en javascript que nos muestre lo siguiente:

1

22

333

4444

55555 */

for (let i = 1; i <= 5; i++) {
  let fila = '';
  for (let j = 0; j < i; j++) {
    fila += i;
  }
  console.log(fila);
}

//Solución del profe(usando una función que llama a otra función)
function repetirNumero(numero) {
  let resultado = '';
  for (let i = 1; i < numero; i++) {
    resultado += numero;
  }
  return resultado;
}

function arbolNumerico(numero) {
  let resultado = '';
  for (let i = 1; i < numero; i++) {
    resultado += repetirNumero(i) + '\r\n';
  }
  return resultado;
}

let arbol = arbolNumerico(5);
console.log(arbol);