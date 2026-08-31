const imagen = document.getElementById("cambiarImagen");
const descripcion = document.getElementById("descripcion");

const imagenOriginal = "static/images/campo-de-trigo-con-cipreses.png";
const textoOriginal = "Campo de trigo con cipreses, Vincent van Gogh (1889)";

const imagenNueva = "static/images/arte2.png";
const textoNuevo = "La gran ola de Kanagawa, Katsushika Hokusai (1830)";

imagen.addEventListener('mouseover', () => {
    imagen.src = imagenNueva;
    descripcion.textContent = textoNuevo;
});

imagen.addEventListener('mouseout', () => {
    imagen.src = imagenOriginal;
    descripcion.textContent = textoOriginal;
});