console.log("Conexion exitosa...");
// Ejemplo Función simple (sin parámetros)
function saludar(/* Párametros */) {
    alert("¡Hola, bienvenido!");
}

//saludar(); // Ejecucion de una funcion

// 🎚️ Funciones con parámetros 
// El parámetro recibe un valor para trabajar en la función.
// El parámetro recibe el tipo de dato al momento de tomar valor.
function saludarParam(nombre) { // Parámetro nombre
    alert("¡Hola, " + nombre + "!");
}
//saludarParam("Catalina"); // Ejecución de la función con parámetros. ("argumento")
//saludarParam("Pusheen");

// 🎯 Funciones con return
function encontrarMayor(){
function encontrarMaximo(a, b) {
    if (a > b) {
        return a; // Este valor se devuelve porque cumple la condición
    } else {
        return b;
    }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
// Máximo guardará el valor de retorno!
alert(`El número mayor entre ${numero1} y ${numero2} es: ${maximo}`);

}

//Tarea
/*
Crear una función que reciba 3 parámetros, a, b y c.
Debe sumar a + b y el resultado final restarlo por c.
Devolver el valor final y mostrar con un alert.
*/
function resultadoFinal(){
function sumaResta(a, b, c){
let resultado = (a + b) -c;
return resultado;
}
let a = 3;
let b = 5;
let c = 7;
let resultadoFinal = sumaResta(a, b, c);
alert(`El resultado final es: ${resultadoFinal}`)

}

// Ejemplo en pizarra
function operaciones(a, b, c){
    return a + b - c;
}
function mostrarResultado(){
    // Creación de variables
let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));
let num3 = parseInt(prompt("Ingrese tercer número"));
let resultado = operaciones(num1, num2, num3);
alert(`La operación de ${num1} + ${num2} - ${num3} = ${resultado}`)
}

/*
Crear una función que reciba un parámetro y permita a través de un bucle contar hasta este.
Ej: Se recibe el número 5 y muestra 1 - 2 - 3 - 4 - 5
*/

function mostrarConteo(){
    // Creación de variables
    let parametro = parseInt(prompt(`Ingrese el limite del contador`));
    if (parametro <= 100){
    // Mostrar resultado
    resultado = contadorNumeros(parametro);
    alert(resultado.join(" - "))
    } else {
    alert("Ingrese un valor inferior a 100")
    }
}
function contadorNumeros(a){
    let numeros = []
    for(let i = 1; i <= a; i++){
        numeros.push(i)
    }
    return numeros;
}

