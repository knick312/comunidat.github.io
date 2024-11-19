document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carrusel-boton.prev');
    const nextButton = document.querySelector('.carrusel-boton.next');
    const carruselItems = document.querySelector('.carrusel-items');
    let currentIndex = 0;
    const items = document.querySelectorAll('.carrusel-item');
    const totalItems = items.length;

    // Función para mostrar el siguiente item del carrusel
    function showNext() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al primer item
        }
        updateCarruselPosition();
    }

    // Función para mostrar el item anterior del carrusel
    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Va al último item
        }
        updateCarruselPosition();
    }

    // Actualiza la posición del carrusel (desplaza las imágenes)
    function updateCarruselPosition() {
        const newTransformValue = -currentIndex * 100; // Desplaza por 100% para mostrar el siguiente item
        carruselItems.style.transform = `translateX(${newTransformValue}%)`;
    }

    // Event listeners para los botones de navegación
    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);

    // Autoplay (opcional): cambia de imagen automáticamente cada 5 segundos
    setInterval(showNext, 5000);
});
