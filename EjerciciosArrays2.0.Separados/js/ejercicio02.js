const alumnos = [
    { name:'David', edad: 22, nota: 7, aprobado: true},
    { name:'Alicia', edad: 18, nota: 4, aprobado: false},
    { name:'Pedro', edad: 22, nota: 6, aprobado: true},
    { name:'Jorge', edad: 22, nota: 3, aprobado: false},
    { name:'Marina', edad: 22, nota: 5, aprobado: true},
    { name:'Rocio', edad: 22, nota: 8, aprobado: true},
    { name:'Luis', edad: 22, nota: 3, aprobado: false},
]

//2- Crearemos un algoritmo que pida al usuario un nombre, en caso de existir en nuestro array de alumnos, 
//imprimiremos los datos oportunos, en caso de no existir mostramos un mensaje por pantalla.

//usando metodo find():
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const nombre = prompt("Ingrese el nombre del alumno:");

const alumno = alumnos.find(alumno => alumno.name.toLowerCase() === nombre.toLowerCase()); 
//El método toLowerCase() convierte una cadena de texto en letras minúsculas. 

if (alumno) {
    console.log(`Alumno encontrado:`);
    console.log(`Nombre: ${alumno.name}`);
    console.log(`Edad: ${alumno.edad}`);
    console.log(`Nota: ${alumno.nota}`);
    console.log(`Aprobado: ${alumno.aprobado}`);
}else{
    console.log(`No se encontró un alumno con el nombre ${nombre}`);
}
