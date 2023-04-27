/*1.- Pedir al usuario un número y mostrar la tabla de multiplicar de ese número
  2.- Pedir al usuario un número y mostrar la suma de todos los números hasta él. (ej, si pone el 5: 1+2+3+4+5)*/
let numero = prompt ('Introduzca un número, por favor.');
numero = Number (numero);
console.log ('Tu número es: ' + numero);
for (let i = 0; i <= 10; i++) {
  console.log (numero + ' x ' + i + ' = ' + numero * i);
}

let otroNumero = prompt ('Introduzca otro número, por favor.');
otroNumero = Number (otroNumero);
console.log ('Tu número es: ' + otroNumero);
let suma = 0;
for (let i = 1; i <= otroNumero; i++) {
  suma += i;
}
console.log ('La suma de todos los números hasta su número es: ' + suma);

//Pedir un número y saber si es primo
let anotherNumero = prompt ('Introduzca otro número de nuevo, por favor.');
anotherNumero = Number (anotherNumero);
//Algoritmo
let primo = true;
for (let i = 2; i < anotherNumero; i++) {
  if (anotherNumero % i == 0) {
    primo = false;
  }
}
if (primo) {
  console.log ('Tu número es: ' + anotherNumero + ', este número SÍ es primo');
} else {
  console.log ('Tu número es: ' + anotherNumero + ', este número NO es primo');
}
