
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
  nav.classList.toggle('active', window.scrollY > 0);
});






//ESTE ES EL BOTON DEL MUTE DE LA PAGINA PRINCIPAL!
let audio = document.getElementById("miAudio");
let boton = document.getElementById("botonAudio");
function controlarAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
//ESTE ES EL SONIDO DE LA CAJA DEL ANIMAL
function reproducirSonido() {
  let sonido = document.getElementById("miSonido");
  sonido.play();
}

// Asociar la función al evento clic de la imagen
let imagen = document.getElementById("miImagen");
imagen.addEventListener("click", reproducirSonido);


// JS PARA VERIFICAR EL ANIMAL
const animalCorrecto = "perro"
let r = ""
function verificarRespuesta(opcionSeleccionada) {
  if (opcionSeleccionada === animalCorrecto) {
    r = "GUAUWWW! SI ES UN PERRO "
  } else {
    r = "UPPS,DALE DE NUEVO:("
  }
  resp = document.getElementById("resp")
  resp.innerHTML = `${r}`
}