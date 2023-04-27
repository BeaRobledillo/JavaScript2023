/*1.- Vamos a pedir al usuario un número y vamos a escribir todos los números desde el 1 hasta ese número
  2.- Vamos a hacer un programa que nos devuelva todos los múltiplos de 7 entre 1 y 100*/
let numero = prompt ('Dame un número, por favor.');
numero = Number (numero);
console.log ('Tu número es: ' + numero);
let contador = 0;
while (contador < numero) {
  contador++;
  console.log (contador);
}

let otroContador = 1;
while (otroContador <= 100) {
  otroContador++;

  if (otroContador % 7 == 0) {
    console.log ('Un múltiplo de 7 es-> ' + otroContador);
  }
}
