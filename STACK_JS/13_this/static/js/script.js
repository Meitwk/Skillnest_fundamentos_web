// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");
// Guardando una referencia

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if(textoBoton === "Haz clic en mí"){
        this.innerText = "¡Texto cambiado!";
    } else{
        this.innerText = "Haz clic en mí";
    }
});