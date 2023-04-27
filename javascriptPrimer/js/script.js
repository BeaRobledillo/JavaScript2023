//Variables:
let edad;

edad = 70;

console.log(edad);

edad = 90;

console.log(edad);

edad = edad - 20;

console.log(edad);

let joven = edad / 2;

console.log(joven);

let nombre = 'Ana';

console.log(nombre);

let chequeado = false;

let cadenaIndefinida; //indefinida

let nada = null; //Tiene el valor nulo que es como decir que su valor es no tener valor

cadena = ''; //Tiene de valor la cadena vacía

console.log(nada);

cadena = 'hola';
cadena = 'hola';
cadena = `hola ${edad}`;
Cadena = 'Juan';
console.log(cadena);

let poblacion = "L'hospitalet";
console.log(cadena, Cadena);

//Js es casesensitive cadena != Cadena

console.log(typeof cadena);

/*comentarios 
de varias
lineas*/

let precio = 100;

precio = precio + 10;
precio = precio * 1.2;

console.log(precio);
precio += 20; //precio=precio+20, vale para todos los operadores
precio -= 15; //precio=precio-15
precio *= 100; //precio=precio*100
precio++; //precio=precio+1
precio--; //precio=precio-1

let resto = precio % 3; //Módulo o resto de la división
console.log(resto);

let cadenita = 'hola';
let otraCadena = ' qué tal?';

console.log(cadenita + otraCadena);

let miEdad = 20;
//if (condicipn a evaluar) {codigo a ejecutart si se cumple la condicion}

if (edad >= 18) {
  console.log('Puedes entrar a la web');
}

//if (condicipn a evaluar) {codigo a ejecutart si se cumple la condicion}
//else {codigo a ejecutart si No se cumple la condicion}
if (edad <= 18) {
  console.log('Puedes entrar a la web');
} else {
  console.log('NO puedes entrar a la web');
}

//alert
alert('Holi caracoli');

//confirm
confirm('Seguro?');

//prompt
prompt('Introduce argo payo');

//comparaciones
//>, <, >=, <=, ==, !=, ===, !==

let a = 5;
let b = '5';

console.log(a == b); //true
console.log(a === b); //false Opción recomendada

console.log(a != b); //false
console.log(a !== b); //true Opción recomendada

let c = a + b;
console.log(c);

let convertido = a + Number(b); //Para convertir es la opcion recomendada
console.log(convertido);

let variable_global = 5;

function mostrarVariables() {
  const variable_local = 1;
  console.log('valor global', variable_local);
  variable_global = 3;
  console.log('valor global dentro de la funcion', variable_global);
}

mostrarVariables();
console.log('valor global fuera de la funcion', variable_global);