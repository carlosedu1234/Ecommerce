
const imagenPreview = document.querySelector("[data-imagen");
const imagenLoad = document.querySelector("[data-loadImagen]");
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/du9tgw4tm";
const Upload_presets = "yug8djow";
console.log("probando");

imagenLoad.addEventListener("change", async (evento) => {
    const file = evento.target.files[0];
    const reader = new FileReader();
    reader.onload = (evento) => {
        imagenPreview.src = evento.target.result;
        console.log(evento.target.result)
    }
   reader.readAsDataURL(file);
    
});

