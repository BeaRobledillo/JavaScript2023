/*2. Creamos una página similar a la utilizada en la explicación de clase, es decir una cabecera, 
menú con sus ítems un wrapper o envoltorio donde tendremos un listado de elementos idénticos entre sí,
pueden ser rectángulos, cuadrados o círculos, cada uno de ellos tendrá un texto dentro que deberá ser correlativo al texto que contienen sus hermanos, 
es decir, (TEXT 1, TEXT 2, TEXT 3, TEXT 4)
Una vez esto desarrollaremos una botonera: 
- Botón añadir elemento: Sumará un elemento más al listado con sus especificaciones correctas respecto a sus hermanos (id, clase, contenido del texto)
 -Borrar elemento: Borrará el elemento que responda al número que se haya definido en el input.
 - Input: Este input aceptará valores únicamente numéricos (servirá para definir el número que identificará el elemento a borrar)    
 - Borrar último elemento: Borrará el último elemento del listado
Deberemos validar si el número que ha introducido el usuario es válido, es decir, si existe un elemento que responda a ese identificador. En caso de no existir, deberemos mostrar un mensaje al usuario (este mensaje no pude mostrarse ni por consola ni a través de un alert) advirtiendo que el número no corresponde a ningún elemento.*/

//Variable para contar el número de elementos en el listado
let elementCounter = 0;

//Función para crear un nuevo elemento
function addElement () {
  elementCounter++;
  let newElement = document.createElement ('div');
  newElement.classList.add ('element');
  newElement.id = 'element-' + elementCounter;
  newElement.innerHTML = 'TEXT ' + elementCounter;
  document.getElementById ('wrapper').appendChild (newElement);
}

//Función para borrar un elemento específico
function deleteElement (elementId) {
  let element = document.getElementById (elementId);
  if (element) {
    element.remove ();
  } else {
    //Mostrar mensaje al usuario
    let errorMessage = document.createElement ('div');
    errorMessage.classList.add ('error-message');
    errorMessage.innerHTML = 'El elemento con ID ' + elementId + ' no existe.';
    document.getElementById ('wrapper').appendChild (errorMessage);
  }
}

//Función para borrar el último elemento
function deleteLastElement () {
  let elements = document.getElementsByClassName ('element');
  if (elements.length > 0) {
    let lastElement = elements[elements.length - 1];
    lastElement.remove ();
  } else {
    //Mostrar mensaje al usuario
    let errorMessage = document.createElement ('div');
    errorMessage.classList.add ('error-message');
    errorMessage.innerHTML = 'No hay elementos para borrar.';
    document.getElementById ('wrapper').appendChild (errorMessage);
  }
}

//Validación de input numérico
document.getElementById ('input').addEventListener ('input', function () {
  let inputValue = this.value;
  if (isNaN (inputValue)) {
    this.value = '';
  }
});

//Eventos de botones
document
  .getElementById ('add-element-button')
  .addEventListener ('click', addElement);
document
  .getElementById ('delete-element-button')
  .addEventListener ('click', function () {
    let inputValue = document.getElementById ('input').value;
    deleteElement ('element-' + inputValue);
  });
document
  .getElementById ('delete-last-element-button')
  .addEventListener ('click', deleteLastElement);
