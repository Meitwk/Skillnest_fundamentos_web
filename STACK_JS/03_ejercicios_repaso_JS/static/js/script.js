console.log("Conexion correcta...");

// Ejercicio 1: Calculadora de Envío

// Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Valor correspondiente al despacho

function ejercicio1(){
    let nombreCliente = prompt("Ingresar nombre de cliente: ");
    let peso = parseInt(prompt("Ingresar peso de paquete: "));
    let valorDespacho = 2000;
    let totalDespacho = 0;
    let mensaje = "";
    // Condiciones
    if(peso > 0 && peso <= 2){
        totalDespacho = peso * valorDespacho;
    } else if(peso > 2 && peso <= 5){
        totalDespacho = peso * valorDespacho;
    } else if(peso > 5 && peso <= 10){
        totalDespacho = peso * valorDespacho;
    } else if(peso > 10 && peso < 50){
        totalDespacho = peso * valorDespacho;
    } else{
        mensaje = "Ingrese valores válidos!!";
    }
    mensaje = `Nombre Cliente: ${nombreCliente} \nPaquete pesa: ${peso}kg \nValor despacho: ${valorDespacho * peso}`;
    alert(mensaje);
}


// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

// ---
function ejercicio2(){
    let usuario = prompt("Ingrese su tipo de usuario");
    let libros = parseInt(prompt("Ingrese la cantidad de libros solicitados"));
    let librosEstudiante = 5;
    let librosProfesor = 10;
    let mensaje = "";
    if (usuario === "estudiante" && libros <= librosEstudiante){
        mensaje = "Bienvenido estudiante"
    } else if(usuario === "estudiante" && libros > librosEstudiante){
        mensaje = `El prestamo supera el limite permitido`
    } else if(usuario === "profesor" && libros <= librosProfesor){
        mensaje = "Bienvenido profesor"
    } else if(usuario === "profesor" && libros > librosProfesor){
        mensaje = `El prestamo supera el limite permitido`
    } else{
        mensaje = "Ingrese un usuario válido"
    }
    alert(mensaje);
}

// Ejercicio 3: Clasificación Deportiva

// Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

// ---
function ejercicio3(){
    let nombre = prompt("Ingrese su nombre");
    let edad = parseInt(prompt("Ingrese su edad"));
    let mensaje = "";
    if(edad <= 12){
        mensaje = `Nombre: ${nombre} \nEdad: ${edad} \nCategoría: Niño`
    } else if(edad >= 13 && edad <= 17){
        mensaje = `Nombre: ${nombre} \nEdad: ${edad} \nCategoría: Adolescente`
    } else if(edad >= 18 && edad <= 60){
        mensaje = `Nombre: ${nombre} \nEdad: ${edad} \nCategoría: adulto`
    } else if(edad >= 61){
        mensaje = `Nombre: ${nombre} \nEdad: ${edad} \nCategoría: Adulto mayor`
    } else{
        mensaje = "Ingrese datos válidos"
    }
    alert(mensaje);
}

// Ejercicio 4: Sistema de Bonificación

// Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

// ---
function ejercicio4(){
    let nombre = prompt("Ingrese su nombre");
    let años = parseInt(prompt("Ingrese años de servivio"));
    let mensaje = "";
    if(años <= 2){
        mensaje = `Nombre: ${nombre} \nAños de servicio: ${años} \nSin bonificación`
    } else if(años > 2 && años <= 4){
        mensaje = `Nombre: ${nombre} \nAños de servicio: ${años} \nBonificación del 5%`
    } else if(años > 4 && años <= 6){
        mensaje = `Nombre: ${nombre} \nAños de servicio: ${años} \nBonificación del 10%`
    } else{
        mensaje = `Nombre: ${nombre} \nAños de servicio: ${años} \nBonificación del 15%`
    }
    alert(mensaje);
}
// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida

// ---
function ejercicio5(){
    let nombre = prompt("Ingrese su nombre");
    let velocidad = parseInt(prompt("Ingrese velocidad"));
    let limiteVelocidad = 90;
    let mensaje = "";
    if(velocidad >= 90){
        mensaje = "Velocidad límite"
    }else if(velocidad >= 65){
        mensaje = "Velocidad alta"
    } else if(velocidad > 30){
        mensaje = "Velocidad adecuada"
    } else{
        mensaje = "Velocidad lenta"
    }
    alert(mensaje);
}

// # Requisitos Técnicos

// Cada ejercicio debe cumplir con:

// - Una función independiente.
// - Uso de prompt().
// - Uso de alert().
// - Uso de variables.
// - Uso de if.
// - Uso de else if.
// - Uso de else.
// - Uso de operadores de comparación.
// - Uso de operadores lógicos cuando corresponda.

// ---

// # Desafío Extra

// Agregar una o más de las siguientes mejoras:

// - Validación de campos vacíos.
// - Validación de datos numéricos.
// - Mostrar mensajes utilizando emojis.
// - Mostrar resultados dentro del HTML utilizando `innerHTML`.
// - Cambiar colores o estilos mediante JavaScript según el resultado obtenido.