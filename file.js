// Funciones solas.
//1.
/***********************************************
 * 
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion me 
 *    pide un nombre
 * 3. Toma ese nombre y me dice 
 *    "Hola <nombre>" en un alert. 
 * 
 ***********************************************/

const saludar = () => {
    let name = prompt("Ingresar nombre");
    alert(`¡Hola, ${name}!`)
}
saludar();



 //2.
 /***********************************************
 *
 * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 * 
 ***********************************************/

const squareNum = () => {
    let num = prompt("Ingresá un número");
    num = Number(num);
    alert(`${num} al cuadrado es ${num*num}`)
}
squareNum();



 //3.
 /***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt. Cada vez
 *    que invoco la función, me muestra UN prompt y
 *    lo carga en el array.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array.
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * 
 ************************************************/

const animalArray = [];

const animalPrompt = () => {
    let animal = prompt("Ingresá un animal");
    animalArray.push(animal);
}

const showLastItem = () => {
    alert(`El último ítem agregado es ${animalArray[animalArray.length - 1]}`);
}

const printArray = () => {
    alert(`Los valores ingresados son: ${animalArray}`);
}

animalPrompt();
animalPrompt();
animalPrompt();
animalPrompt();
showLastItem();
printArray();