document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColor();
});

document.getElementById("colorButton1").addEventListener("click", function () {
    cambiarColorCaja1();
});

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColorCaja2();
});

function cambiarColorCaja2() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector(`#caja2`)
    elemento.style.backgroundColor = colorAleatorio;
}


function cambiarColorCaja1() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector(`#caja1`)
    elemento.style.backgroundColor = colorAleatorio;
}



function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = colorAleatorio;
}