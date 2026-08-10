let botones = document.querySelectorAll(".megusta");

botones.forEach(function (boton) {
    let meGustas = 0;
    boton.addEventListener("click", function () {
        meGustas++;
        this.textContent = meGustas + " Me gusta";
    });
});

let boton = document.getElementById("iniciarSesion");

boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if (textoBoton === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
});

let botonPerfil = document.getElementById("verPerfil");

botonPerfil.addEventListener("click", function () {
    alert("Perfil\nUsuario: Juan Pérez\nEdad: 30 años\nUbicación: Ciudad de México");
});

