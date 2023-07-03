const url = "http://localhost:3000/usuarios";

const registroClientes = async (nombre, password) => {
    try {
        const response = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: uuid.v4(),
                nombre: nombre,
                password: password,
            }),
        });

        return response.json();
    } catch (error) {
        throw new Error("Error al registrar el usuario");
    }
};

export const clientes = {
    registroClientes
};
