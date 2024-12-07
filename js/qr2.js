document.addEventListener("DOMContentLoaded", function () {
    const botonQR = document.getElementById('botonQR');
    const qrOverlay = document.getElementById('qrOverlay');
    const cerrarQR = document.getElementById('cerrarQR');

    // Mostrar el overlay del QR al hacer clic en el botón
    botonQR.addEventListener('click', () => {
        qrOverlay.style.display = 'flex';
    });

    // Cerrar el overlay al hacer clic en el botón de cerrar
    cerrarQR.addEventListener('click', () => {
        qrOverlay.style.display = 'none';
    });

    // Cerrar el overlay al hacer clic fuera de la imagen
    qrOverlay.addEventListener('click', (e) => {
        if (e.target === qrOverlay) {
            qrOverlay.style.display = 'none';
        }
    });
});
