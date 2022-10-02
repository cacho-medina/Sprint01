let entrada = document.getElementById("ingresar_texto");
let main = document.querySelector(".main");
let padre = document.getElementById("mostrar_texto");
let muñeco = document.querySelector(".muñeco");
function encriptar() {
    muñeco.className = "muñeco_escondido";
    main.innerHTML = entrada.value;
    main.className = "salida";
}
