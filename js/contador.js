// Indicar si el evento está cancelado
const eventoCancelado = true; // Cambia a `false` si el evento no está cancelado

// Fecha del evento (si no está cancelado)
const fechaEvento = new Date("Dec 25, 2024 00:00:00").getTime();

const actualizarMensaje = () => {
    if (eventoCancelado) {
        // Si el evento está cancelado, mostrar el mensaje correspondiente
        document.getElementById("contador").innerHTML = "¡Estreno cancelado!";
        document.querySelector(".cuenta-regresiva p").innerHTML = "Lo sentimos, el estreno no se llevará a cabo.";
        
        // Habilitar la interacción con el contenido inmediatamente
        document.querySelector('.contenido-principal').classList.add('habilitado');
        return;
    }
    
    // Si el evento no está cancelado, continuar con la cuenta regresiva
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    if (distancia < 0) {
        // Cuando la cuenta llega a cero
        document.getElementById("contador").innerHTML = "¡El evento ha comenzado!";
        document.querySelector('.contenido-principal').classList.add('habilitado');
    } else {
        // Actualizar el tiempo restante
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
        document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
};

// Actualizar cada segundo
if (eventoCancelado) {
    actualizarMensaje();
} else {
    const intervalo = setInterval(actualizarMensaje, 1000);
}
