/*Hagamos el siguiente ejercicio:

Vamos a pedir al usuario su nombre y lo vamos aguardar en una variable con el nombre que queráis
Si el nombre que nos han introducido es 'Ana' decimos que nombre correcto, en caso contrario que incorrecto
Lo escribimos por la consola

Vamos a pedir al usuario un precio y lo guardamos en una variable con el nombre que queráis. Como lo que nos mandan es una cadena convertirla a número.

Calcular el importe del iva (el precio multiplicado por 0.21)

Si el iva es mayor de 100 poner un mensaje que diga 'El pago se puede fraccionar' por la consola*/
let nombre;
nombre = prompt ('Introduce nombre');
if (nombre === 'Ana') {
  console.log ('nombre correcto');
} else {
  console.log (nombre);
}

let precio;
precio = prompt ('Introduce precio');

let convertido = Number (precio);
console.log (convertido);

let precioConIVA = convertido * 0.21;
//console.log(precioConIVA);
if (precioConIVA >= 100) {
  console.log (precioConIVA + ' El pago se puede fraccionar');
}

