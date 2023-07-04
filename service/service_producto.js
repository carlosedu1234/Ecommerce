const url=" http://localhost:3000/producto";

const registrarProducto=(nombre,precio,descripcion)=>{
    fetch(url,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: uuid.v4(),
            nombre:nombre,
            precio:precio,
            descripcion:descripcion
        }),
    })
}


export const producto={
registrarProducto,

}