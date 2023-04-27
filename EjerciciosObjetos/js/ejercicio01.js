//1.Crear un método para un objeto que verifique la existencia de una propiedad:
//El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.

let alumno={name:'Luis', edad:22, nota:5, apobado:false};

console.log(alumno.hasOwnProperty('nota'));   //true
console.log(alumno.hasOwnProperty('apellidos'));   //false


//gema:
/* const objeto1 = {
    nombre: "María",
    alumno: "127",
};
let propDireccion = (objeto1.hasOwnProperty('direccion')) ? 'Sí' : 'No';
console.log('¿Tenemos la dirección del alumno?: ' + propDireccion); */
/*otra opcion:
console.log(alumno.hasOwnProperty('direccion'));

const objeto1 = {
    nombre: "María",
    alumno: "127",
};

console.log(objeto1.direccion)


*/