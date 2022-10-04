let muñeco = document.querySelector(".muñeco");
let copyButton = document.querySelector(".copy__button");
let main = document.querySelector(".main");

function aplicarCambios() {
    muñeco.style.display = "none";
    copyButton.style.display = "block";
    main.className = "salida";
}

function encriptarTexto(texto) {
    let text = texto;
    let textoEncriptado = "";
    //logica del encriptador
    for (let index = 0; index < text.length; index++) {
        if (text[index] == "a") {
            textoEncriptado += "ai";
        } else if (text[index] == "e") {
            textoEncriptado += "enter";
        } else if (text[index] == "i") {
            textoEncriptado += "imes";
        } else if (text[index] == "o") {
            textoEncriptado += "ober";
        } else if (text[index] == "u") {
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += text[index];
        }
    }
    return textoEncriptado;
}

function encriptar() {
    //esconde la imagen, aplica clase a la salida y muestra el boton de copiar
    aplicarCambios();
    //toma el texto de entrada y lo convierte a minusculas
    let entrada = document.getElementById("ingresar_texto").value.toLowerCase();
    //encriptacion
    main.innerHTML = encriptarTexto(entrada);
}

function desencriptarTexto(texto) {
    let text = texto;
    let textoEncriptado = "";
    //logica del encriptador
    for (let index = 0; index < text.length; index++) {
        if (text[index] == "a") {
            textoEncriptado += "a";
            index++;
        } else if (text[index] == "e") {
            textoEncriptado += "e";
            index += 4;
        } else if (text[index] == "i") {
            textoEncriptado += "i";
            index += 3;
        } else if (text[index] == "o") {
            textoEncriptado += "o";
            index += 3;
        } else if (text[index] == "u") {
            textoEncriptado += "u";
            index += 3;
        } else {
            textoEncriptado += text[index];
        }
    }
    return textoEncriptado;
}

function desencriptar() {
    //esconde la imagen, aplica clase a la salida y muestra el boton de copiar
    aplicarCambios();
    //toma el texto de entrada y lo convierte a minusculas
    let entrada = document.getElementById("ingresar_texto").value.toLowerCase();
    //encriptacion
    main.innerHTML = desencriptarTexto(entrada);
}

function copiar() {
    let fakeInput = document.createElement("input");
    fakeInput.setAttribute("value", main.innerHTML);
    document.body.appendChild(fakeInput);
    fakeInput.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    document.body.removeChild(fakeInput);
    Swal.fire({
        icon: "success",
        title: "hola!",
        timer: 1500,
        showConfirmButton: false,
    });
}
