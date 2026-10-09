const botonesVerMas = document.querySelectorAll(".btn-ver-mas");

botonesVerMas.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const card = boton.closest(".destino-card");

        const informacion = card.querySelector(".extra-info");

        if (informacion.classList.contains("oculto")) {

            informacion.classList.remove("oculto");

            boton.textContent = "Ver menos";

        } else {

            informacion.classList.add("oculto");

            boton.textContent = "Ver más";
        }

    });

});
