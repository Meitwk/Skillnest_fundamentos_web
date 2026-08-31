const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "lightblue"; // Cambia el color de fondo al pasar el ratón
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "red"; 
});

//Tarea
/*
Crear dos botones con evento omouseover y onmouseout

- Cambia el texto de un boton
- Cambiar el color de fondo y color de texto del segundo boton.
*/


const boton1 = document.getElementById("cambiarTexto");

boton1.addEventListener("mouseover", function () {
    this.innerText = "Gracias por pasar el ratón"; 
});

boton1.addEventListener("mouseout", function () {
    this.innerText = "Pasa el ratón por aquí"; 
});



const boton2 = document.getElementById("cambiarColor");

boton2.addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightblue";
    this.style.color = "black";
});

boton2.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#ff7eb3";
    this.style.color = "white";
});





