/*Pedir al usuario una cantidad, convertirla a número y guardarla en una variable

Si la cantidad está entre 100 y 200 (incluidos) decirle que llegará en tres días

Pedir al usuario un nombre y una pass y guardarlas en dos variables

Si el usuario es 'Ana' con pass '1223' o 'Juan' con pass '1234' mostrar 'acceso correcto'
En caso contrario mostrar 'Acceso incorrecto'*/

let cantidad = prompt ('Introduzca una cantidad, por favor.');
console.log (cantidad);
cantidad = Number (cantidad);
if (cantidad >= 100 && cantidad <= 200) {
  console.log ('Llegará en tres dias');
}

let nombreUsuario = prompt ('Introduzca un nombre de usuario, por favor.');
let pass = prompt ('Introduzca una password, por favor.');

if ((nombreUsuario === 'Ana' && pass === '1223') || (nombreUsuario === 'Juan' && pass === '1234')) {
  console.log ('Acceso correcto');
}else{
  console.log ('Acceso incorrecto');
}
