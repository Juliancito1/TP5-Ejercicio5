const btnIniciar = document.getElementById("iniciar");
const btnReiniciar = document.getElementById("reiniciar");
const btnParar = document.getElementById("parar");
const lugarhoras = document.getElementById("horas");
const lugarminutos = document.getElementById("minutos");
const lugarsegundos = document.getElementById("segundos");

let horas = 0;
let aux;
let minutos = 0;
let segundos = 0;
btnIniciar.addEventListener("click", empezar);
btnReiniciar.addEventListener("click", reiniciar);
btnParar.addEventListener("click", detener);
btnReiniciar.disabled = true;
btnParar.disabled = true;
function empezar() {
  aux = setInterval(cronometro, 15);
  btnReiniciar.disabled = false;
  btnParar.disabled = false;
}

function cronometro() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  lugarhoras.innerHTML = String(horas).padStart(2, "0") + ":";
  lugarminutos.innerHTML = String(minutos).padStart(2, "0") + ":";
  lugarsegundos.innerHTML = String(segundos).padStart(2, "0");
}

function detener() {
  clearInterval(aux);
  btnParar.disabled = true;
}

function reiniciar() {
  detener();
  horas = 0;
  minutos = 0;
  segundos = 0;
  lugarhoras.innerHTML = String(horas).padStart(2, "0") + ":";
  lugarminutos.innerHTML = String(minutos).padStart(2, "0") + ":";
  lugarsegundos.innerHTML = String(segundos).padStart(2, "0");
  btnReiniciar.disabled = true;
}
