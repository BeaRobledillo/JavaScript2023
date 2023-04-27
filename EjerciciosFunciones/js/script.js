/*1.- Hacer una función a la que le pasemos un número y nos devuelva la suma desde uno hasta ese número
sumatorio(5)-->1+2+3+4+5=15*/

function sumatorio(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}
console.log(sumatorio(5)); // 15
console.log('__________________________');

/*2.- Hacer una función a la que le pasemos un nombre y una edad y nos devuelva un saludo y si es o no mayor de edad
portero('Ana',13)-->'Hola Ana, eres menor de edad, no puedes pasar'
portero('Eva',19)-->'Hola Eva, eres mayor de edad, puedes pasar'*/

function saludo(nombre, edad) {
    let result = 'Hola ' + nombre + ', ';
    if (edad >= 18) {
        result += 'eres mayor de edad, puedes pasar';
    } else {
        result += 'eres menor de edad, no puedes pasar';
    }
    return result;
}
console.log(saludo('Ana', 13)); // "Hola Ana, eres menor de edad, no puedes pasar"
console.log(saludo('Eva', 19)); // "Hola Eva, eres mayor de edad, puedes pasar"
console.log('__________________________');

//funcion saludo2 (SIN RESULT)
function saludo2(nombre, edad) {
    if (edad >= 18) {
        return 'Hola ' + nombre + ', eres mayor de edad';
    } else {
        return 'Hola ' + nombre + ', eres menor de edad';
    }
}
console.log(saludo2('Pedro', 25)); // "Hola Pedro, eres mayor de edad"
console.log(saludo2('María', 15)); // "Hola María, eres menor de edad"
console.log('__________________________');

/*3.- Hacer una función a la que le pasemos tres números y nos devuelva el del medio
medio(1,2,3)->2
medio(8,1,90)->8*/

function medio(numero1, numero2, numero3) {
    if (
        (numero1 >= numero2 && numero1 <= numero3) ||
        (numero1 >= numero3 && numero1 <= numero2)
    ) {
        return numero1;
    }
    if (
        (numero2 >= numero1 && numero2 <= numero3) ||
        (numero2 >= numero3 && numero2 <= numero1)
    ) {
        return numero2;
    } else {
        return numero3;
    }
}
console.log(medio(1, 2, 3)); // 2
console.log(medio(8, 1, 90)); // 8
console.log('__________________________');

/* 
function medio2(a, b, c) {
    if (a > b && a < c) {
      return a;
    }
    if (b > c && b < a) {
      return b;
    } else {
      return c;
    }
  }
  console.log(medio2(1, 2, 3));
  console.log(medio2(8, 1, 90));
  console.log('__________________________'); */

/* function medio3(num1, num2, num3){
    if(num1>num2 && num1<num3 || num1<num2 && num1>num3)
        return num1;
    else if(num2>num1 && num2<num3 || num2<num1 && num2>num3)
        return num2;
    else
        return num3;
}

if(num1>num2 && num1<num3 || num1<num2 && num1>num3)
                return num1;
            else if(num2>num1 && num2<num3 || num2<num1 && num2>num3)
                return num2;
            else
                return num3; */

/*En un parque de atracciones los niños pueden subir si:
1.- Son mayores de 12 años
o
2.- Miden más de 130 cm 
en caso contrario NO pueden pasar

admision(edad,altura) --> true si pueden pasar, false no puden pasar
*/

function admision(edad, altura) {
    //let res=false;
    if (edad > 12 || altura > 130) {
        return true;
    } else {
        return false;
    }
    //return res;
}

let edad = Number(prompt('Edad del niño'));
let altura = Number(prompt('Altura del niño'));
if (admision(edad, altura)) {
    console.log('Padentro');
} else {
    console.log('El niño No puede pasar');
}
console.log('__________________________');

/*Función factorial
Multiplicar todos los numeros hasta ese número
*/

function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

let fac5 = factorial(5);
console.log(fac5);