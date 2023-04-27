const alumnos = [
    { name:'David', edad: 22, nota: 7, aprobado: true},
    { name:'Alicia', edad: 18, nota: 4, aprobado: false},
    { name:'Pedro', edad: 22, nota: 6, aprobado: true},
    { name:'Jorge', edad: 22, nota: 3, aprobado: false},
    { name:'Marina', edad: 22, nota: 5, aprobado: true},
    { name:'Rocio', edad: 22, nota: 8, aprobado: true},
    { name:'Luis', edad: 22, nota: 3, aprobado: false},
]

//4- Realizaremos una copia del array incrementando en 1 punto las notas de cada uno.

//con map()
//Map es una función que te permite transformar los elementos de una lista y que 
//devuelve una nueva lista con los elementos transformados.

const copyArray = alumnos.map(alumno => {
    return {
        ...alumno,
        nota: alumno.nota + 1,
    };
});

console.log(`Copia del array con notas +1:`);
console.log(copyArray);
