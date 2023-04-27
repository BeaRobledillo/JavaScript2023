//8.Dado el string "    Hello World    ", 
//quitar los espacios en blanco al principio y al final.

//El método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, 
//son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).

let myString = '    Hello World    ';
console.log(myString);
myString = myString.trim();
console.log(myString);