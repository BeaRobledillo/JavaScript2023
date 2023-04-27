/* EJERCICIOS DE ARRAYS Y OBJETOS
Arrays: 
1. Dado el array = [1,2,3,4,5,6] */
//Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
const array = [1, 2, 3, 4, 5, 6];
let i = 0;
while (i < array.length) {
  console.log (array[i]);
  i++;
}
//Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
for (let i = 0; i < array.length; i++) {
  console.log (array[i]);
}

//Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
for (let i = 0; i < array.length; i++) {
  console.log (array[i] + 1);
}

var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number + 1);
});

var numbers2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i] + 1);
}


//Generar una copia de un array pero con todos los elementos incrementado en 1.
const newArray = array.map (item => item + 1);
console.log (newArray);


const newArray2 = array.slice().map(x => x + 1);
console.log(newArray2);


//Calcular la media de la suma total de sus elementos
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
const average = sum / array.length;
console.log ('La media de la suma total:' + average);

//2. Pediremos a través de un bluce 6 números al usuario que almacenaremos en un array
const arrayUser = [];
for (let i = 0; i < 6; i++) {
  arrayUser.push (parseInt (prompt ('Ingrese un número:')));
}
console.log (arrayUser);

//Imprimeros por pantalla la longitud del array, el número más alto y el número más bajo
console.log (`Longitud del array: ${array.length}`);
console.log (`Número más alto: ${Math.max (...array)}`);
console.log (`Número más bajo: ${Math.min (...array)}`);

/*1. Crearemos un objeto coche que tendra las siguientes propiedades: 
marca (String),
modelo (String), 
año de fabricación (Number), 
velocidad (Number), 
arrancado(Boolean)
Para este objeto deberemos definir los siguientes métodos:
-alecerar(incrementa en 10 la velocidad),
-parar(pone a 0 la velocidad),
-arrancarApagar(arranca o apaga el motor)*/

let coche = {
  marca: "",
  modelo: "",
  anio: 0,
  velocidad: 0,
  arrancado: false,
  acelerar: function () {
    if (this.arrancado) {
      this.velocidad += 10;
      console.log(`El coche ha acelerado a ${this.velocidad} km/h`);
    } else {
      console.log("El coche no esta encendido");
    }
  },

  parar: function () {
    this.velocidad = 0;
    console.log("El coche ha parado");
  },

  arrancarApagar: function () {
    this.arrancado = !this.arrancado;
    if (this.arrancado) {
      console.log("El coche ha sido encendido");
    } else {
      console.log("El coche ha sido apagado");
    }
  }
};

console.log(coche);

let cocheNuevo = {
  marca: "Citoen",
  modelo: "Xsara",
  anio: 2000,
  velocidad: 100,
  arrancado: true,
}
/*2. Crearemos un objeto persona que tendra las siguientes propiedades: 
nombre (String), 
2 apellidos (Array), 
edad (Number),
 direccion (String)
Añadiremos un método que imprima el siguiente mensaje por pantalla ('¡Hola! Me llamo David Lopez Hernandez, tengo 22 años y vivo en C/Ave del Paraíso Nº7')*/

let persona = {
  nombre: "",
  apellidos: ["", ""],
  edad: 0,
  direccion: "",
}

let nuevaPersona = {
  nombre: "David",
  apellidos: ["Lopez", "Hernandez"],
  edad: 22,
  direccion: "C/Ave del Paraíso Nº7",
}

function presentar(result) {
  result = console.log(`¡Hola! Me llamo ${persona.nombre} ${persona.apellidos[0]} ${persona.apellidos[1]}, tengo ${persona.edad} años y vivo en ${persona.direccion}`);
}


function presentar(result) {
  result = console.log(`¡Hola! Me llamo ${nuevaPersona.nombre} ${nuevaPersona.apellidos[0]} ${nuevaPersona.apellidos[1]}, tengo ${nuevaPersona.edad} años y vivo en ${nuevaPersona.direccion}`);
}

console.log(persona);
console.log(nuevaPersona);

//nuevaPersona.presentar(nuevaPersona);
//nuevaPersona.presentar();


let personaAgain = {
  nombre: "",
  apellidos: ["", ""],
  edad: 0,
  direccion: "",
  presentar: function() {
    console.log(`¡Hola! Me llamo ${this.nombre} ${this.apellidos[0]} ${this.apellidos[1]}, tengo ${this.edad} años y vivo en ${this.direccion}`);
  }
};

let nuevaPersonaAgain = Object.create(personaAgain);
nuevaPersonaAgain.nombre = "David";
nuevaPersonaAgain.apellidos = ["Lopez", "Hernandez"];
nuevaPersonaAgain.edad = 22;
nuevaPersonaAgain.direccion = "C/Ave del Paraíso Nº7";

console.log(nuevaPersonaAgain);
nuevaPersonaAgain.presentar();
console.log ('__________________________'); 


/* let persona = {
  nombre: "",
  apellidos: [],
  edad: 0,
  direccion: "",
};

/* persona.nombre = "Juan";
persona.apellidos = ["Perez","Garcia"];
persona.edad = 30;
persona.direccion = "Calle Falsa 123";
console.log(persona)
console.log ('__________________________'); */ 
/* 
let persona1 = {nombre:"Juan", apellidos:["Perez","Garcia"], edad:30, direccion:"Calle Falsa 123"};
let persona2 = {nombre:"David", apellidos:["Lopez","Hernandez"], edad:22, direccion:"C/Ave del Paraíso Nº7"};

function saludar(nombre, apellidos, edad, direccion) {
let saludo=console.log(`¡Hola! Me llamo ${nombre} ${apellidos[0]} ${apellidos[1]}, tengo ${edad} años y vivo en ${direccion}`);
return saludo;
}

//console.log(saludar({nombre:"David", apellidos:["Lopez","Hernandez"], edad:22, direccion:"C/Ave del Paraíso Nº7"}));
let saludo= saludar(persona2);
console.log(saludo);
console.log(persona2.saludar());
 */

/* let persona = {
  nombre: "",
  apellidos: ["",""],
  edad: 0,
  direccion: "",
}

let personaDavid={
  nombre: "David",
  apellidos: ["Lopez","Hernandez"],
  edad: 22,
  direccion: "C/Ave del Paraíso Nº7",
}

function imprimirMensaje(persona) {
  console.log(`¡Hola! Me llamo ${persona.nombre} ${persona.apellidos[0]} ${persona.apellidos[1]}, tengo ${persona.edad} años y vivo en ${persona.direccion}`);
}


console.log(persona);
console.log ('__________________________'); 
imprimirMensaje(personaDavid); */



/* 
let persona = {
  nombre: "David",
  apellidos: ["Lopez","Hernandez"],
  edad: 22,
  direccion: "C/Ave del Paraíso Nº7",
  saludar: function() {
      console.log(`¡Hola! Me llamo ${this.nombre} ${this.apellidos[0]} ${this.apellidos[1]}, tengo ${this.edad} años y vivo en ${this.direccion}`);
  }
};

persona.saludar();
console.log ('__________________________'); 
 */

