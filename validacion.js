const formulario = document.querySelector("#form");
condole.log(formulario)

//crear evento
formulario.addEventListener("blur", validarFormulario);


//funciones
function validarFormulario(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    console.log(nombre)
}
















/* validacion formulario
const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("tel");
const inputEmail = document.getElementById("email");
const inputAsunto = document.getElementById("asunto");
const inputMensaje = document.getElementById("mensaje");


inputNombre.addEventListener("blur", (e) => {
    const valorCampo = e.target.value;
    if (valorCampo = "" ){
        console.log("hola");
    }else{
        console.log("error");
    }
}); */
