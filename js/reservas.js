const formulario = document.querySelector(".formulario-reservas");
const mensajeReserva = document.getElementById("mensaje-reserva");
const campoFecha = document.getElementById("fecha");

// Impedir que se elijan fechas anteriores a hoy
const hoy = new Date();
const anio = hoy.getFullYear();
const mes = String(hoy.getMonth() + 1).padStart(2, "0");
const dia = String(hoy.getDate()).padStart(2, "0");

campoFecha.min = `${anio}-${mes}-${dia}`;

// Mostrar la confirmación sin recargar la página
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const personas = document.getElementById("personas").value;
    const horario = document.getElementById("horario").value;

    const partesFecha = campoFecha.value.split("-");
    const fecha = `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;
    const cantidad = personas === "1" ? "1 persona" : `${personas} personas`;

    mensajeReserva.textContent =
        `¡Gracias, ${nombre}! Tu reserva para ${cantidad} está confirmada ` +
        `para el ${fecha} a las ${horario} hs. ¡Te esperamos en Barquillo!`;

    formulario.reset();
});