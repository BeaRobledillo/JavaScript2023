const alumnos = [
    { name:'David', edad: 22, nota: 7, aprobado: true},
    { name:'Alicia', edad: 18, nota: 4, aprobado: false},
    { name:'Pedro', edad: 22, nota: 6, aprobado: true},
    { name:'Jorge', edad: 22, nota: 3, aprobado: false},
    { name:'Marina', edad: 22, nota: 5, aprobado: true},
    { name:'Rocio', edad: 22, nota: 8, aprobado: true},
    { name:'Luis', edad: 22, nota: 3, aprobado: false},
]

//3- Volcar en un array todos los alumnos aprobados y en otro todos aquellos que tenga una nota superior o igual a 7.
//con filter()
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const approvedStudents = alumnos.filter(alumno => alumno.aprobado === true);
const highNoteStudents = alumnos.filter(alumno => alumno.nota >= 7);
console.log(`Alumnos Aprobados: ${approvedStudents.length}`);
console.log(approvedStudents.length ? approvedStudents : 'No hay alumnos aprobados');
console.log(`Alumnos con una nota superior o igual a 7: ${highNoteStudents.length}`);
console.log(highNoteStudents.length ? highNoteStudents : 'No hay alumnos con nota superior o igual a 7');