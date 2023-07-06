import { producto } from "../service/service_producto.js";

const contenedorProducto = document.querySelector('[data-contenido]');


const insertarProducto = (nombre, descripcion, precio, id) => {
    
const nuevoProducto=document.createElement("li");
    const contenido = `
<div class="productos__contenedor__img">
  <img src="./img/imagenprueba.jpg" alt="imgProgucto" />
</div>
<p class="producto__nombre">${nombre}</p>
<p class="producto__precio">${precio}</p>
<a class="producto__boton" href="#">Ver Producto</a>

`
nuevoProducto.innerHTML = contenido;
return nuevoProducto;
}

const listadoP = async () => {
    try {
        const productos = await producto.listaProducto();

        productos.forEach(({ nombre, descripcion, precio, id }) => {
           const nuevoDato= insertarProducto(nombre, descripcion, precio, id)
           console.log(nuevoDato);
           contenedorProducto.appendChild(nuevoDato);
        });


    } catch (error) {
        console.log(error)
    }

}

listadoP();

