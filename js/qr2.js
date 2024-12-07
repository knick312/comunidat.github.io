document.addEventListener('DOMContentLoaded', function () {
    const botonQR = document.getElementById('botonQR');
    const qrOverlay = document.getElementById('qrOverlay');
    const cerrarQR = document.getElementById('cerrarQR');

    // Mostrar el QR flotante al hacer clic en el botón
    botonQR.addEventListener('click', () => {
        qrOverlay.style.display = 'flex';
    });

    // Ocultar el QR flotante al hacer clic en el botón de cerrar
    cerrarQR.addEventListener('click', () => {
        qrOverlay.style.display = 'none';
    });

    // Cerrar el QR al hacer clic fuera de la imagen
    qrOverlay.addEventListener('click', (e) => {
        if (e.target === qrOverlay) {
            qrOverlay.style.display = 'none';
        }
    });
});
