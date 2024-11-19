document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carrusel-boton.prev');
    const nextButton = document.querySelector('.carrusel-boton.next');
    const carruselItems = document.querySelector('.carrusel-items');
    let currentIndex = 0;

    // Función para mover el carrusel hacia la izquierda
    function moveToPrevious() {
        const itemWidth = document.querySelector('.carrusel-item').offsetWidth;
        currentIndex = (currentIndex === 0) ? carruselItems.children.length - 1 : currentIndex - 1;
        carruselItems.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }

    // Función para mover el carrusel hacia la derecha
    function moveToNext() {
        const itemWidth = document.querySelector('.carrusel-item').offsetWidth;
        currentIndex = (currentIndex === carruselItems.children.length - 1) ? 0 : currentIndex + 1;
        carruselItems.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }

    // Añadir eventos para los botones de "anterior" y "siguiente"
    prevButton.addEventListener('click', moveToPrevious);
    nextButton.addEventListener('click', moveToNext);
});
