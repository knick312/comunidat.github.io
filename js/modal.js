document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-btn");
    const detallesBtns = document.querySelectorAll(".boton-detalles");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalOrganizer = document.getElementById("modal-organizer");
    const modalChannel = document.getElementById("modal-channel");

    // Información de las juntadas (añadí las anteriores)
    const juntadasInfo = {
        1: {
            title: "Juntada en Parque Central",
            description: "Únete a nosotros para disfrutar de una tarde al aire libre en el Parque Central. Habrá música, juegos y buena compañía.",
            organizer: "Juan Pérez",
            channel: "https://www.youtube.com/juanperez"
        },
        2: {
            title: "Juntada en Plaza Mayor",
            description: "Nos reunimos en la Plaza Mayor para una tarde llena de actividades recreativas. Ven con amigos y participa en las dinámicas que tenemos preparadas.",
            organizer: "Maria García",
            channel: "https://www.instagram.com/mariagarcia"
        },
        3: {
            title: "Juntada en Plaza Mayor (Anteriores)",
            description: "Un encuentro espectacular con actividades recreativas en Plaza Mayor.",
            organizer: "Carlos López",
            channel: "https://www.youtube.com/carloslopez"
        },
        4: {
            title: "Juntada en la Playa (Anteriores)",
            description: "Un día de sol, diversión y deportes en la playa.",
            organizer: "Laura Martínez",
            channel: "https://www.instagram.com/lauramartinez"
        },
        5: {
            title: "Juntada en Club Social (Anteriores)",
            description: "Un evento exclusivo en el Club Social con música y buena comida.",
            organizer: "Andrés Fernández",
            channel: "https://www.twitch.tv/andresfernandez"
        }
    };

    // Mostrar modal con la información de la juntada
    detallesBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const id = this.getAttribute("data-id");
            const juntada = juntadasInfo[id];

            modalTitle.textContent = juntada.title;
            modalDescription.textContent = juntada.description;
            modalChannel.setAttribute("href", juntada.channel);
            modalChannel.textContent = juntada.organizer;

            modal.style.display = "block";
        });
    });

    // Cerrar el modal
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
