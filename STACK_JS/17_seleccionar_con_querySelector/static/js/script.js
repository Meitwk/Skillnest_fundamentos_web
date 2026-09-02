console.log("Conexión exitosa...");

//Selección de título con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del título es: ${title.textContent}`); // El contenido del título es: ¡Hola, mundo!

//Selección de párrafo con querySelector
let parrafo = document.querySelector("p");
console.log(parrafo);

//Seleccionar dentro de nav
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">


//Seleccionar párrafos
let parrafos = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."

//Elemento inexistente
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}


//Tarea
/* Crear un botón y aplicar condición al igual que el ejemplo.
- Debe cambiar su texto al momento de hacerle click
- Debe activarse un hover js cambiando el color de fondo
*/

let botonCambiar = document.querySelector("#boton");

botonCambiar.addEventListener("click", function () {
    if (botonCambiar !== null) {
        if (this.textContent === "Cambiar") {
            this.textContent = "Cambiado";
            this.style.backgroundColor = "#b67eff";
            this.style.color = "white";
        } else {
            this.textContent = "Cambiar";
            this.style.backgroundColor = "white";
            this.style.color = "black";
        }
    } else {
        console.log("El botón no existe.");
    }
});








