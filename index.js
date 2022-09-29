let entrada = document.getElementById("ingresar_texto");
let secundario = document.querySelector(".secondary");
let main = document.querySelector(".main");
let padre = document.getElementById("mostrar_texto");

function encriptar() {
    padre.removeChild(secundario);
    main.innerHTML = entrada.value;
    main.className = "salida";
}
