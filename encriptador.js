function updatecontent() {
  let text = document.getElementById("texto").value;
  document.getElementById("output").innerHTML = text;
  let hasCleared = false;

  const message = document.getElementById("message");
  let copy = document.getElementById("contenido__paso2__copy");
  text = text.toLowerCase();

  if (!hasCleared) {
    message.style.display = "none";
    copy.style.display = "block";
    hasCleared = true;
  }
  if (text === "") {
    message.style.display = "block";
    copy.style.display = "none";
    hasCleared = false;
  }
}

function convertText() {
  let imputElement = document.getElementById("texto");
  let text = imputElement.value;
  let outputElement = document.getElementById("output");
  // Convertir el texto dependiendo de si está en mayúsculas o minúsculas
  if (text === text.toUpperCase() && text !== text.toLowerCase()) {
    // Convertir a minúsculas
    text = text.toLowerCase();
  } else {
    // Convertir a mayúsculas
    text = text.toUpperCase();
  }

  // Actualizar el valor del campo de entrada
  imputElement.value = text;
  outputElement.innerHTML = text;
}

function encriptar() {
  let text = document.getElementById("texto").value;
  let encrip = encryptedText(text);
  document.getElementById("output").innerHTML = encrip;
}

function desencriptarContenido() {
  const entrada = document.getElementById("texto").value;
  const desencriptado = desencriptarTexto(entrada);
  document.getElementById("output").innerText = desencriptado;
}

function encryptedText(texto) {
  for (let i = 0; i < texto.length; i++) {
    let encriptado = "";
    for (let i = 0; i < texto.length; i++) {
      switch (texto[i]) {
        case "e":
          encriptado += "enter";
          break;
        case "i":
          encriptado += "imes";
          break;
        case "a":
          encriptado += "ai";
          break;
        case "o":
          encriptado += "ober";
          break;
        case "u":
          encriptado += "ufat";
          break;
        default:
          encriptado += texto[i];
          break;
      }
    }
    return encriptado;
  }
}

function desencriptarTexto(texto) {
  let desencriptado = "";
  for (let i = 0; i < texto.length; ) {
    if (texto.startsWith("enter", i)) {
      desencriptado += "e";
      i += 5;
    } else if (texto.startsWith("imes", i)) {
      desencriptado += "i";
      i += 4;
    } else if (texto.startsWith("ai", i)) {
      desencriptado += "a";
      i += 2;
    } else if (texto.startsWith("ober", i)) {
      desencriptado += "o";
      i += 4;
    } else if (texto.startsWith("ufat", i)) {
      desencriptado += "u";
      i += 4;
    } else {
      desencriptado += texto[i];
      i++;
    }
  }
  return desencriptado;
}

async function copyText() {
  let content = document.getElementById("output").innerHTML;

  try {
    await navigator.clipboard.writeText(content);
    console.log("contenido copiado portapapeles");
  } catch (err) {
    console.error("erroe al coppiar", er);
  }
}
