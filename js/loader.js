document.addEventListener("DOMContentLoaded", () => {
    const pantallaCarga = document.getElementById("pantallaCarga");
    const progreso = pantallaCarga.querySelector(".progreso");

    let progresoActual = 0;

    const cargarPagina = setInterval(() => {
        progresoActual += 10; // Incrementa el progreso
        progreso.style.width = progresoActual + "%";

        if (progresoActual >= 100) {
            clearInterval(cargarPagina); // Detiene la animación
            pantallaCarga.style.opacity = "0"; // Desvanece la pantalla de carga
            setTimeout(() => {
                pantallaCarga.style.display = "none"; // Oculta la pantalla
            }, 500);
        }
    }, 300); // Incremento cada 300ms
});
