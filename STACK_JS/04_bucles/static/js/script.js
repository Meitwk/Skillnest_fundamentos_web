console.log("Prueba de conexión...");

/* Ejemplo Bucle For */
function contarHasta5() {
    for (let i = 1; i <= 5; i++) {
        alert(i);
    }
}
function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}
function recorrerLista() {
    // Lista es un tipo de dato (Array/Lista/Arreglos)
    // [] = ["nombre", 4, True, [2,4]]
    /* 
    let nombre = "Carlos"
    alert (nombre);
    let nombres = ["Carlos", "María"]
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres[1] --> Imprime María
    aler(nombres[0].length); --> 6 (largo 0)
    alert(nombres.length; --> 2 (largo nombre*/
    let usuarios = ["Ana", "Luis", "María", "Cesar"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}
/* Ejemplo Bucle While */
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}
function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos...${datosPendientes} de 5`);
        datosPendientes--;
    }

}
function validarContrasena() {
    let contrasenaCorrecta = false;
// !variables = variable es distinta a verdadero - dentro de una condición
    while (!contrasenaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
            break; //rompe el bucle
            alert("No se ejecuta"); 
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}