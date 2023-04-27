const alumnos = [
    { name:'David', edad: 22, nota: 7, aprobado: true},
    { name:'Alicia', edad: 18, nota: 4, aprobado: false},
    { name:'Pedro', edad: 22, nota: 6, aprobado: true},
    { name:'Jorge', edad: 22, nota: 3, aprobado: false},
    { name:'Marina', edad: 22, nota: 5, aprobado: true},
    { name:'Rocio', edad: 22, nota: 8, aprobado: true},
    { name:'Luis', edad: 22, nota: 3, aprobado: false},
]

//1- Deberemos recorrer el array e imprimir por pantalla, nota más alta de clase, la más baja, media de la clase, 
//número de aprobados y número de suspensos.

//usando forEach() para recorrer el array

let maxNote = 0;
let minNote = 10;
let totalNotes = 0;
let numApproved = 0;
let numFailed = 0;

alumnos.forEach(alumno => { 
    if (alumno.nota > maxNote) { //nota más alta de clase
        maxNote = alumno.nota; 
    }
    if (alumno.nota < minNote) {
        minNote = alumno.nota; //nota más baja
    }
    totalNotes += alumno.nota;
    if (alumno.aprobado) {
        numApproved++; //número de aprobados
    } else {
        numFailed++; //número de suspensos.
    }
});

const averageNote = totalNotes / alumnos.length; //media de la clase

console.log(`Nota más alta de clase: ${maxNote}`); //8
console.log(`Nota más baja de clase: ${minNote}`); //3
console.log(`Media de la clase: ${averageNote}`); //5.14
console.log(`Número de aprobados: ${numApproved}`); //true 4
console.log(`Número de suspensos: ${numFailed}`); //false 3

