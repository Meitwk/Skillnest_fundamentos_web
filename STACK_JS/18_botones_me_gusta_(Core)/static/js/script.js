console.log("Conexión exitosa...")

const boton = document.querySelector(".megusta");
const contador = document.querySelector(".contador");
let likes = 0;
boton.onclick = () => {
    likes++;
    contador.innerText = `${likes} like(s)`;
}

const boton2 = document.querySelector(".megusta2");
const contador2 = document.querySelector(".contador2");
let likes2 = 0;
boton2.onclick = () => {
    likes2++;
    contador2.innerText = `${likes2} like(s)`;
}

const boton3 = document.querySelector(".megusta3");
const contador3 = document.querySelector(".contador3");
let likes3 = 0;
boton3.onclick = () => {
    likes3++;
    contador3.innerText = `${likes3} like(s)`;
}