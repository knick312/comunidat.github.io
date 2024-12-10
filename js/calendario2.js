document.addEventListener('DOMContentLoaded', () => {
    const calendario = document.getElementById('calendario');
    const mesAnio = document.getElementById('mesAnio');
    const prevMes = document.getElementById('prevMes');
    const nextMes = document.getElementById('nextMes');
    const fechaActual = new Date();

    let mes = fechaActual.getMonth();
    let anio = fechaActual.getFullYear();

    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const eventos = [
        { fecha: new Date(anio, mes, 19), descripcion: "Streaming Especial con Nick" },
        { fecha: new Date(anio, mes, 17), descripcion: "CIENDI (17/12 SHOW EN VIVO en CABA)" },
        { fecha: new Date(anio, mes, 20), descripcion: "prox" },
    ];

    function renderizarCalendario() {
        calendario.innerHTML = '';
        mesAnio.textContent = `${meses[mes]} ${anio}`;

        diasSemana.forEach(dia => {
            const tituloDia = document.createElement('div');
            tituloDia.textContent = dia;
            tituloDia.classList.add('titulo-dia');
            calendario.appendChild(tituloDia);
        });

        const primerDia = new Date(anio, mes, 1).getDay();
        const diasEnMes = new Date(anio, mes + 1, 0).getDate();

        for (let i = 0; i < primerDia; i++) {
            const espacio = document.createElement('div');
            calendario.appendChild(espacio);
        }

        for (let dia = 1; dia <= diasEnMes; dia++) {
            const celda = document.createElement('div');
            celda.classList.add('dia');

            const fecha = document.createElement('div');
            fecha.classList.add('fecha');
            fecha.textContent = dia;

            const listaEventos = document.createElement('div');
            listaEventos.classList.add('eventos');

            eventos.forEach(evento => {
                if (evento.fecha.getDate() === dia && evento.fecha.getMonth() === mes && evento.fecha.getFullYear() === anio) {
                    const eventoItem = document.createElement('div');
                    eventoItem.textContent = evento.descripcion;
                    listaEventos.appendChild(eventoItem);
                }
            });

            celda.appendChild(fecha);
            celda.appendChild(listaEventos);
            calendario.appendChild(celda);
        }
    }

    prevMes.addEventListener('click', () => {
        mes--;
        if (mes < 0) {
            mes = 11;
            anio--;
        }
        renderizarCalendario();
    });

    nextMes.addEventListener('click', () => {
        mes++;
        if (mes > 11) {
            mes = 0;
            anio++;
        }
        renderizarCalendario();
    });

    renderizarCalendario();
});

document.addEventListener('DOMContentLoaded', () => {
    const calendario = document.getElementById('calendario');
    const mesAnio = document.getElementById('mesAnio');
    const prevMes = document.getElementById('prevMes');
    const nextMes = document.getElementById('nextMes');
    const fechaActual = new Date();

    let mes = fechaActual.getMonth();
    let anio = fechaActual.getFullYear();

    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const eventos = [
        { fecha: new Date(anio, mes, 12), descripcion: "Streaming Especial con Nick", link: "https://twitch.tv/mundobarista" },
        
    ];

    // Crear el modal flotante
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <span class="cerrar-modal">✖</span>
        <div id="modal-contenido"></div>
    `;
    document.body.appendChild(modal);

    const cerrarModal = modal.querySelector('.cerrar-modal');
    const modalContenido = document.getElementById('modal-contenido');

    function abrirModal(evento) {
        modalContenido.innerHTML = `
            <h2>Detalles del Evento</h2>
            <p><strong>Descripción:</strong> ${evento.descripcion}</p>
            <p><strong>Enlace:</strong> <a href="${evento.link}" target="_blank" style="color: #f187f7;">${evento.link}</a></p>
        `;
        modal.style.display = 'block';
    }

    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Ocultar modal si se da clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function renderizarCalendario() {
        calendario.innerHTML = '';
        mesAnio.textContent = `${meses[mes]} ${anio}`;

        diasSemana.forEach(dia => {
            const tituloDia = document.createElement('div');
            tituloDia.textContent = dia;
            tituloDia.classList.add('titulo-dia');
            calendario.appendChild(tituloDia);
        });

        const primerDia = new Date(anio, mes, 1).getDay();
        const diasEnMes = new Date(anio, mes + 1, 0).getDate();

        for (let i = 0; i < primerDia; i++) {
            const espacio = document.createElement('div');
            calendario.appendChild(espacio);
        }

        for (let dia = 1; dia <= diasEnMes; dia++) {
            const celda = document.createElement('div');
            celda.classList.add('dia');

            const fecha = document.createElement('div');
            fecha.classList.add('fecha');
            fecha.textContent = dia;

            const listaEventos = document.createElement('div');
            listaEventos.classList.add('eventos');

            eventos.forEach(evento => {
                if (evento.fecha.getDate() === dia && evento.fecha.getMonth() === mes && evento.fecha.getFullYear() === anio) {
                    const btnVerDetalles = document.createElement('button');
                    btnVerDetalles.textContent = "Ver Detalles";
                    btnVerDetalles.classList.add('btn-ver-detalles');
                    btnVerDetalles.onclick = () => abrirModal(evento);

                    listaEventos.appendChild(btnVerDetalles);
                }
            });

            celda.appendChild(fecha);
            celda.appendChild(listaEventos);
            calendario.appendChild(celda);
        }
    }

    prevMes.addEventListener('click', () => {
        mes--;
        if (mes < 0) {
            mes = 11;
            anio--;
        }
        renderizarCalendario();
    });

    nextMes.addEventListener('click', () => {
        mes++;
        if (mes > 11) {
            mes = 0;
            anio++;
        }
        renderizarCalendario();
    });

    renderizarCalendario();
});

document.addEventListener('DOMContentLoaded', () => {
    const calendario = document.getElementById('calendario');
    const mesAnio = document.getElementById('mesAnio');
    const prevMes = document.getElementById('prevMes');
    const nextMes = document.getElementById('nextMes');
    const fechaActual = new Date();

    let mes = fechaActual.getMonth();
    let anio = fechaActual.getFullYear();

    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const eventos = [
        { fecha: new Date(anio, mes, 19), descripcion: "Streaming Especial con Nick", link: "https://twitch.tv/mundobarista" },
       { fecha: new Date(anio, mes, 17), descripcion: "Streaming Especial con Nick", link: "https://www.twitch.tv/ciendi" },
    ];

    function renderizarCalendario() {
        calendario.innerHTML = '';
        mesAnio.textContent = `${meses[mes]} ${anio}`;

        diasSemana.forEach(dia => {
            const tituloDia = document.createElement('div');
            tituloDia.textContent = dia;
            tituloDia.classList.add('titulo-dia');
            calendario.appendChild(tituloDia);
        });

        const primerDia = new Date(anio, mes, 1).getDay();
        const diasEnMes = new Date(anio, mes + 1, 0).getDate();

        for (let i = 0; i < primerDia; i++) {
            const espacio = document.createElement('div');
            calendario.appendChild(espacio);
        }

        for (let dia = 1; dia <= diasEnMes; dia++) {
            const celda = document.createElement('div');
            celda.classList.add('dia');

            const fecha = document.createElement('div');
            fecha.classList.add('fecha');
            fecha.textContent = dia;

            const listaEventos = document.createElement('div');
            listaEventos.classList.add('eventos');

            eventos.forEach(evento => {
                if (evento.fecha.getDate() === dia && evento.fecha.getMonth() === mes && evento.fecha.getFullYear() === anio) {
                    const eventoItem = document.createElement('div');
                    eventoItem.textContent = evento.descripcion;

                    const btnVerDetalles = document.createElement('button');
                    btnVerDetalles.textContent = "Ver Detalles";
                    btnVerDetalles.classList.add('btn-ver-detalles');
                    btnVerDetalles.onclick = () => {
                        window.location.href = evento.link; 
                    };

                    listaEventos.appendChild(eventoItem);
                    listaEventos.appendChild(btnVerDetalles);
                }
            });

            celda.appendChild(fecha);
            celda.appendChild(listaEventos);
            calendario.appendChild(celda);
        }
    }

    prevMes.addEventListener('click', () => {
        mes--;
        if (mes < 0) {
            mes = 11;
            anio--;
        }
        renderizarCalendario();
    });

    nextMes.addEventListener('click', () => {
        mes++;
        if (mes > 11) {
            mes = 0;
            anio++;
        }
        renderizarCalendario();
    });

    renderizarCalendario();
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const modalContenido = document.getElementById('modal-dinamico');
    
    const calendarioEl = document.getElementById('calendario');
    
    const eventos = [
       
        { fecha: '2024-12-25', descripcion: 'Evento especial de Navidad' },
    ];
    
    function cargarCalendario() {
        const hoy = new Date();
        const mesActual = hoy.getMonth();
        const anioActual = hoy.getFullYear();

        const contenedorCalendario = document.getElementById('mesAnio');
        contenedorCalendario.innerHTML = `${mesActual + 1} / ${anioActual}`;

        eventos.forEach(evento => {
            const fechaDiv = document.createElement('div');
            fechaDiv.className = "fecha-evento";
            fechaDiv.innerHTML = `${evento.fecha}<br><button class="ver-detalle" data-fecha="${evento.fecha}">Ver Detalles</button>`;
            
            fechaDiv.querySelector('.ver-detalle').addEventListener('click', function () {
                modalContenido.innerHTML = `<h2>Evento el ${evento.fecha}</h2><p>${evento.descripcion}</p>`;
                modal.style.display = 'flex';
            });

            calendarioEl.appendChild(fechaDiv);
        });
    }

    cerrarModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    cargarCalendario();
});

document.addEventListener('DOMContentLoaded', function () {
    const modalFlotante = document.querySelector('.modal-flotante');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const modalContenidoFlotante = document.getElementById('modal-dinamico-flotante');

    const calendarioEl = document.getElementById('calendario');
    
    const eventos = [
        { fecha: '2024-12-10', descripcion: 'Evento de Streaming con Influencer A' },
        { fecha: '2024-12-20', descripcion: 'Torneo presencial en la ciudad B' },
        { fecha: '2024-12-25', descripcion: 'Evento especial de Navidad' },
    ];
    
    // Carga de calendario con botones dinámicos
    eventos.forEach(evento => {
        const divFecha = document.createElement('div');
        divFecha.innerHTML = `
            ${evento.fecha}
            <br>
            <button class="calendario-eventos-btn" data-fecha="${evento.fecha}" onclick="mostrarModal('${evento.fecha}', '${evento.descripcion}')">Ver Detalles</button>
        `;
        calendarioEl.appendChild(divFecha);
    });

    // Función para mostrar el modal dinámico
    window.mostrarModal = function (fecha, descripcion) {
        modalContenidoFlotante.innerHTML = `
            <h3>Evento: ${fecha}</h3>
            <p>${descripcion}</p>
        `;
        modalFlotante.style.display = 'block';
    };

    // Cerrar el modal
    cerrarModal.addEventListener('click', function () {
        modalFlotante.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modalFlotante) {
            modalFlotante.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modalFlotante = document.querySelector('.modal-flotante');
    const modalContenidoFlotante = document.getElementById('modal-dinamico-flotante');
    const cerrarModal = document.querySelector('.cerrar-modal');

    const calendarioEl = document.getElementById('calendario');

    const eventos = [
        { fecha: '2024-12-10', descripcion: 'Evento de Streaming con Influencer A' },
        { fecha: '2024-12-20', descripcion: 'Torneo presencial en la ciudad B' },
        { fecha: '2024-12-25', descripcion: 'Evento especial de Navidad' },
    ];

    eventos.forEach(evento => {
        const divFecha = document.createElement('div');
        divFecha.innerHTML = `
            ${evento.fecha}
            <br>
            <button class="calendario-eventos-btn" onclick="mostrarModal('${evento.fecha}', '${evento.descripcion}')">Ver Detalles</button>
        `;
        calendarioEl.appendChild(divFecha);
    });

    window.mostrarModal = function (fecha, descripcion) {
        modalContenidoFlotante.innerHTML = `<h3>Evento: ${fecha}</h3><p>${descripcion}</p>`;
        modalFlotante.style.display = 'block';
    };

    cerrarModal.addEventListener('click', () => {
        modalFlotante.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalFlotante) {
            modalFlotante.style.display = 'none';
        }
    });
});
