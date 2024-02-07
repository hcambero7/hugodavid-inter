const imagen = document.querySelectorAll(".galleria .contenedr-imagen");
const imagenModal = document.getElementById("imagen-modal");

imagenes.forEach((imagen)=>{
    imagen.addEventListener('click', ()=>{
        const ruta = imagen.querySelector('img').src;
        imagen.src=ruta;
    });
});