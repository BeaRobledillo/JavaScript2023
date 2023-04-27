/*Hagamos el siguiente ejercicio:

Vamos a pedir al usuario su nombre y lo vamos aguardar en una variable con el nombre que queráis
Si el nombre que nos han introducido es 'Ana' decimos que nombre correcto, en caso contrario que incorrecto
Lo escribimos por la consola

Vamos a pedir al usuario un precio y lo guardamos en una variable con el nombre que queráis. Como lo que nos mandan es una cadena convertirla a número.

Calcular el importe del iva (el precio multiplicado por 0.21)

Si el iva es mayor de 100 poner un mensaje que diga 'El pago se puede fraccionar' por la consola*/

let nombreUsuario = prompt ('Introduzca el nombre');
//console.log(nombreUsuario);
if (nombreUsuario === 'Ana') {
  console.log ('Nombre Correcto');
} else {
  console.log (nombreUsuario);
}

let precio = prompt ('Introduzca el precio');
//console.log(precio);
precio = Number (precio);
console.log (precio);

let iva = precio * 0.21;
console.log (iva);
if (iva > 100) {
  console.log ('El pago se puede fraccionar');
}


