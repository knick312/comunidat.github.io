// Fecha del evento (puedes modificar la fecha y hora según sea necesario)
const fechaEvento = new Date("Dec 12, 2024 00:00:00").getTime();

// Actualización cada segundo
const x = setInterval(function() {
    // Obtener la fecha y hora actual
    const ahora = new Date().getTime();
    
    // Calcular la diferencia entre la fecha del evento y la actual
    const distancia = fechaEvento - ahora;
    
    // Calcular días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    // Mostrar la cuenta regresiva en el div con id "contador"
    document.getElementById("contador").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
    
    // Si la cuenta regresiva ha terminado
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);
