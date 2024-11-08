document.addEventListener("DOMContentLoaded", function() {
    // Contenido de la página de inicio
    const inicioContent = `
        <h1>Página de Inicio</h1>
        <p>Este es el contenido de la página de inicio.</p>
    `;
    
    // Contenido de la página de comunidades
    const comunidadesContent = `
        <h1>Comunidades</h1>
        <p>Este es el contenido de la página de comunidades.</p>
    `;
    
    // Contenido de la página de novedades
    const novedadesContent = `
        <h1>Novedades</h1>
        <p>Este es el contenido de la página de novedades.</p>
    `;
    
    // Contenido de la página de juntadas
    const juntadasContent = `
        <h1>Juntadas</h1>
        <p>Este es el contenido de la página de juntadas.</p>
    `;
    
    // Función para cambiar el contenido de la página
    function cambiarContenido(contenido) {
        document.getElementById("contenido").innerHTML = contenido;
    }
    
    // Event listeners para cambiar el contenido al hacer clic en los enlaces del menú de navegación
    document.getElementById("inicio").addEventListener("click", function(event){
        event.preventDefault();
        cambiarContenido(inicioContent);
    });
    
    document.getElementById("comunidades").addEventListener("click", function(event){
        event.preventDefault();
        cambiarContenido(comunidadesContent);
    });
    
    document.getElementById("novedades").addEventListener("click", function(event){
        event.preventDefault();
        cambiarContenido(novedadesContent);
    });
    
    document.getElementById("juntadas").addEventListener("click", function(event){
        event.preventDefault();
        cambiarContenido(juntadasContent);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const zoomableElements = document.querySelectorAll('.zoomable');

    zoomableElements.forEach(element => {
        element.addEventListener('click', () => {
            const modal = element.nextElementSibling;
            modal.classList.toggle('show-modal');
            modal.addEventListener('click', () => {
                modal.classList.remove('show-modal');
            });
        });
    });
});
