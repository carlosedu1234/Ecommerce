const url=" http://localhost:3000/producto";

const registrarProducto=async (nombre,precio,descripcion,portada)=>{
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: uuid.v4(),
                nombre: nombre,
                precio: precio,
                descripcion:descripcion,
                portada: portada
            }),
        });

        return response.json();
    } catch (error) {
        throw new Error("Error al registrar el usuario");
    }
    };


    const listaProducto = async () => {
        try {
          const response = await fetch(url);
          return await response.json();
        } catch (error) {
          console.error(error);
          throw new Error("Error al obtener la lista de clientes");
        }
      };


export const producto={
registrarProducto,
listaProducto

}