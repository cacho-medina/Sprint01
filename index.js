let entrada = document.getElementById("ingresar_texto");
let main = document.querySelector(".main");
let muñeco = document.querySelector(".muñeco");
let copiar = document.querySelector(".copy__button");

function encriptar() {
    muñeco.style.display = "none";
    copiar.style.display = "block";
    main.innerHTML = entrada.value;
    main.className = "salida";
}
