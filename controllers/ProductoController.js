import { producto } from "../service/service_producto.js";


const listaProductos = document.querySelector("[data-form]");

listaProductos.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;
    const portada = document.querySelector("[data-imagen]").value;
    try {
        await producto.registrarProducto(nombre,precio,descripcion,portada);
        window.location.href="../screens/registro_completado.html"

    } catch (error) {
        window.location.href="../screens/registro_error.html"
        console.log("error al registrar"+error);
    }



});

