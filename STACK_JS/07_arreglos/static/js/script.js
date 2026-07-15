console.log("Conexion exitosa...");

// Variables a lista

let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

// Transformar en array y mostar

let nombres = ["Ana", "Pedro", "María", "Carlos"]

// Mostrar a Maria en una alerta
console.log(nombres[2]); //Muestra Maria
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "josé"];
let datos = ["Carlos", 18, true];
let fruta = ["Manzana", "Pera", "Kiwi", "Sandía"]

// Desafío formar una oración con elementos de las distintas variables
// Pedro tiene 18 años, y compró una sandía a $2300

let mensaje = `${alumnos[1]} tiene ${datos[1]} años, y compró una ${fruta[3]} a $${compras[1]}`;
console.log(mensaje);

//La propiedad `.length` devuelve la cantidad de elementos.

let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];

console.log(frutas2.length); // 4 --> Conteo de elementos

//Obtener el último elemento
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
let ultima = frutas[frutas.length - 1];
// variable.length -1 siempre trae el último elemento

console.log(ultima);

// Desafío
// Del arreglo ["Hola", "a", "todos", "los", "programadores"]
// Mostrar el penultimo elemento y el último concatenado
function frase() {
    let frase = ["Hola", "a", "todos", "los", "programadores"];
    let penultimo = frase[frase.length - 2];
    let ultimo = frase[frase.length - 1];
    console.log(`${penultimo} ${ultimo}`);
}
frase()

let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
function manipularArreglo(){
// Modificar un elemento del arreglo
listaTareas[1] = "Construir";
// Añadir un elemento al final de la lista
listaTareas.push("Cocinar"); //Agrega un elemento al final .push()
// Eliminar el último elemento y mostrarlo
let eliminado = listaTareas.pop(); //Elimina último ,pop()
// Mostrar resultado
// Añadir un elemento al inicio de la lista
listaTareas.unshift("Boxear"); // Agrega al principio unshift
// Eliminar el primer elemento de la lista
eliminado += " - " + listaTareas.shift(); // .shift elimina el primero
// Mostrar resultado
alert(listaTareas.join(" - "));
alert("Elementos eliminados: " + eliminado);
}


function buscarMayoresDeEdad(){
    let edades = [12, 15, 18, 20, 25];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            console.log(edades[i]);
        }

    }
}

// Ejercicios

// Ejercicio 1

// Crear el siguiente arreglo.
// Mostrar:
// Primera edad.
// Última edad.
// Cantidad de elementos.
function edades(){
    let edades = [15,18,20,14,25];
    let primera = edades[0]
    let ultima = edades[edades.length -1]
    let cantidadElementos = edades.length
    alert(`Primera edad: ${primera} \nÚltima edad: ${ultima} \nCantidad de elementos: ${cantidadElementos}`)

}



// Ejercicio 2

// Crear un arreglo con cinco nombres.

//Mostrar todos utilizando un ciclo `for`.
function nombres5(){
    let 4 = ["Ana", "Luis", "María", "Cesar", "Diego"];
    for (let i = 0; i < nombres5.length; i++) {
        alert("Bienvenido, " + nombres5[i]);
    }
}
