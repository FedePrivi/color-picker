const visualizar = document.querySelector(".view");
const valorHexa = document.querySelector(".paleta-color");
const numero = document.querySelector(".numero-hexadecimal");
const color = document.querySelector(".fondo");


visualizar.addEventListener("click", (e)=>{
    e.preventDefault();
    numero.innerHTML = valorHexa.value;
    color.style.backgroundColor = valorHexa.value
});






    
    



