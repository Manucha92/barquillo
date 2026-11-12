// Elementos del carrito
const lista = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const finalizar = document.getElementById("finalizar-compra");
const vaciar = document.getElementById("vaciar-carrito");
const mensaje = document.getElementById("mensaje-compra");

let carrito = [];

// Mostrar precios con formato argentino
function mostrarPrecio(valor) {
    return "$" + valor.toLocaleString("es-AR");
}

// Actualizar la lista y el total
function actualizarCarrito() {
    lista.replaceChildren();

    let total = 0;

    if (carrito.length === 0) {
        const item = document.createElement("li");
        item.textContent = "Todavía no agregaste productos.";
        lista.appendChild(item);
    }

    carrito.forEach(function (producto) {
        const item = document.createElement("li");

        item.textContent =
            producto.nombre + " — " + mostrarPrecio(producto.precio);

        lista.appendChild(item);
        total += producto.precio;
    });

    totalCarrito.textContent = mostrarPrecio(total);

    finalizar.disabled = carrito.length === 0;
    vaciar.disabled = carrito.length === 0;
}

// Agregar productos
document.querySelectorAll(".producto-compra .boton-comprar")
    .forEach(function (boton) {
        boton.addEventListener("click", function () {
            carrito.push({
                nombre: boton.dataset.nombre,
                precio: Number(boton.dataset.precio)
            });

            actualizarCarrito();

            mensaje.textContent =
                "Agregaste " + boton.dataset.nombre + " al carrito.";
        });
    });

// Vaciar el carrito
vaciar.addEventListener("click", function () {
    carrito = [];
    actualizarCarrito();
    mensaje.textContent = "Vaciaste el carrito.";
});

// Finalizar la compra simulada
finalizar.addEventListener("click", function () {
    if (carrito.length === 0) {
        return;
    }

    carrito = [];
    actualizarCarrito();

    mensaje.textContent =
    "¡Gracias por comprar en Barquillo! Ya podés pasar a retirar tu pedido.";
});

// Mostrar el estado inicial
actualizarCarrito();