import { clientes } from "../service/service-usuario.js";

const registrar=document.querySelector("[data-form]");

registrar.addEventListener("submit",async evento =>{
   
    evento.preventDefault();
    console.log("probando");
    const nombre=document.querySelector("[data-nombre]").value;
    const password=document.querySelector("[data-password]").value;
   
console.log(nombre);
    try {
        await clientes.registroClientes(nombre,password);
        window.location.href="../screens/registro_completado.html"


    } catch (error) {
        window.location.href="../screens/registro_error.html"
        console.log("error al registrar"+error);
    }

});
