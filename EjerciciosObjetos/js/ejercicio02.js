//2.Crear un método para un objeto que devuelva una lista de todas sus propiedades:

let alumno = { name: 'Luis', edad: 22, nota: 5, apobado: false }

for (const property in alumno) {
  console.log(`${property}: ${alumno[property]}`)
}

/* console.log(alumno['name']);
console.log(alumno['edad']);
console.log(alumno['nota']);
console.log(alumno['apobado']); */

/* const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
 */


//gema
/* const objeto1 = {
  nombre: "María",
  alumno: "127",
};
for (const prop in objeto1) {
  console.log(`objeto1.${prop} = ${objeto1[prop]}`);
} */