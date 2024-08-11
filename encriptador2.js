function updatecontent() {
  let text = document.getElementById("texto").value;
  document.getElementById("output").innerHTML = text;
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

function encriptarTexto(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

async function copyText () {
    let content = document.getElementById("output").innerHTML;
  
    
      try {
        await navigator.clipboard.writeText(content);
        console.log("contenido copiado portapapeles");
      } catch (err) {
        console.error("erroe al coppiar", er);
      }
    
  }