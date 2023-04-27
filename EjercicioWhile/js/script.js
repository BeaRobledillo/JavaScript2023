/*1.- Vamos a pedir al usuario un número y vamos a escribir todos los números desde el 1 hasta ese número
  2.- Vamos a hacer un programa que nos devuelva todos los múltiplos de 7 entre 1 y 100*/
let numero = prompt ('Introduzca un número, por favor.');
numero = Number (numero);
let contador = 0;
console.log ('Tu número es: ' + numero);
while (contador < numero) {
  contador++;
  console.log ('Número: ' + contador);
}

let otroContador = 1;
while (otroContador <= 100) {
  otroContador++;

  if (otroContador % 7 == 0) {
    console.log ('Un múltiplo de 7 es-> ' + otroContador);
  }
 
}
