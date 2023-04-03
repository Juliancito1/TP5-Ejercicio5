const lugarhoras = document.querySelector('.horas');
const lugarminutos = document.querySelector('.minutos');
const lugarsegundos = document.querySelector('.segundos');
const btnIniciar = document.getElementById('iniciar');
const btnReiniciar = document.getElementById('reiniciar')
btnIniciar.addEventListener('click',accion);
btnReiniciar.addEventListener('click',reinicio)
let horas = 0;
let minutos = 0;
let segundos = 0;

let comenzar = null;

function tiempo(){
    lugarhoras.innerHTML = horas + ':'
    lugarminutos.innerHTML = minutos + ':'
    lugarsegundos.innerHTML =  segundos
}

function reinicio(){
    horas = 0;
    minutos = 0;
    segundos = 0;
    tiempo()
}


function accion(){
    if(comenzar)
    {
        parar()
        btnReiniciar.disabled = false
    }
    else{
        iniciar()
        btnReiniciar.disabled = true
    }
}

function iniciar(){

    function aumentarHoras(){
        if(horas < 99)
        {
            horas++;
        }
    }
    function aumentarMinutos(){
        if(minutos === 59)
        {
            minutos = 0;
            aumentarHoras();
        }
        else{
            minutos++; 
        }
    }

    const incrementar = () => {
    if(segundos === 99){
        segundos = 0;
        aumentarMinutos();
    }
    else{
        segundos++;
    }
        tiempo()
    }
    comenzar = setInterval(incrementar,15)
    btnIniciar.innerHTML = "Parar"
    btnIniciar.className = "btn btn-warning"
   
}

function parar(){
    clearInterval(comenzar);
    comenzar = null
    btnIniciar.innerHTML = "Iniciar"
    btnIniciar.className = "btn btn-primary"
}


   
    







