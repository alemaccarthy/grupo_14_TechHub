const carrito = document.getElementById('carrito');

window.onclick = function (event) {
    if (event.target == carrito) {
        carrito.style.display = "none";
    }
}