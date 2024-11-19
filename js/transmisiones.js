document.addEventListener("DOMContentLoaded", () => {
    const platformSelect = document.getElementById("platform-select");
    const rtmpConfig = document.getElementById("rtmp-config");
    const twitchConfig = document.getElementById("twitch-config");
    const streamStatus = document.getElementById("stream-status");
    const startStreamBtn = document.getElementById("start-stream");
    const previewVideo = document.getElementById("preview-video");
    const toggleCameraBtn = document.getElementById("toggle-camera");
    const toggleMicrophoneBtn = document.getElementById("toggle-microphone");
    const toggleRotateCameraBtn = document.getElementById("toggle-rotate-camera");
    const captureScreenBtn = document.getElementById("capture-screen");
    const endStreamBtn = document.getElementById("end-stream");
    const streamControls = document.getElementById("stream-controls");
    let localStream = null;
    let cameraStream = null;
    let isCameraOn = false;
    let isMicrophoneOn = false;
    let currentCamera = 0;
    let streamUrl = "";
    let streamKey = "";

    // Configuración OAuth de Twitch
    const clientId = 'YOUR_TWITCH_CLIENT_ID'; // Sustituye con tu Client ID de Twitch
    const clientSecret = 'YOUR_TWITCH_CLIENT_SECRET'; // Sustituye con tu Client Secret de Twitch
    const redirectUri = 'YOUR_REDIRECT_URI'; // La URI de redirección configurada en Twitch Developer Console

    // Obtener la cámara y micrófono
    async function getMediaStream() {
        try {
            const constraints = { video: true, audio: true };
            localStream = await navigator.mediaDevices.getUserMedia(constraints);
            previewVideo.srcObject = localStream;
            previewVideo.play();
            isCameraOn = true;
            isMicrophoneOn = true;
            updateButtonStates();
        } catch (err) {
            streamStatus.textContent = "No se pudo acceder a la cámara o micrófono.";
            streamStatus.style.color = "red";
        }
    }

    // Generación Automática de URL RTMP y Clave de Transmisión
    function generateRTMPDetails() {
        const randomKey = Math.random().toString(36).substring(2, 15); // Generación aleatoria de clave
        streamUrl = "rtmp://tu-servidor-rtmp:1935/live"; // URL base de RTMP
        streamKey = randomKey; // Clave generada

        // Mostrar URL y Clave en los campos correspondientes
        document.getElementById("rtmp-url").value = streamUrl;
        document.getElementById("stream-key").value = streamKey;
    }

    // Mostrar los detalles RTMP cuando se selecciona RTMP
    platformSelect.addEventListener("change", () => {
        if (platformSelect.value === "rtmp") {
            rtmpConfig.classList.remove("hidden");
            twitchConfig.classList.add("hidden");
            generateRTMPDetails();
        } else if (platformSelect.value === "twitch") {
            rtmpConfig.classList.add("hidden");
            twitchConfig.classList.remove("hidden");
        }
    });

    // Conectar con Twitch (obtener token de acceso OAuth)
    function connectToTwitch() {
        const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=channel:read:subscriptions`;

        // Abrir la URL de autorización en una nueva ventana
        window.open(authUrl, '_blank', 'width=800,height=600');
    }

    // Llamar a esta función cuando recibas el "code" después de la redirección de Twitch
    async function getAccessToken(code) {
        const tokenUrl = 'https://id.twitch.tv/oauth2/token';
        const params = new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri
        });

        const response = await fetch(tokenUrl, {
            method: 'POST',
            body: params,
        });

        const data = await response.json();

        if (data.access_token) {
            console.log('Access Token:', data.access_token); // Usar el token para autenticar solicitudes
            return data.access_token;
        } else {
            console.error('Error obteniendo token:', data);
        }
    }

    // Obtener los detalles de la transmisión y la clave para Twitch
    async function getTwitchStreamDetails() {
        // Aquí debes obtener el "code" de la URL de redirección
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            const accessToken = await getAccessToken(code);
            const streamUrl = "rtmp://live.twitch.tv/app";
            const streamKey = generateStreamKey();

            document.getElementById('rtmp-url').textContent = streamUrl;
            document.getElementById('stream-key').textContent = streamKey;
            
            // Mostrar los detalles de la transmisión
            document.getElementById('twitch-credentials').classList.remove('hidden');
        } else {
            console.log("No se recibió el código de autorización.");
        }
    }

    // Iniciar transmisión
    startStreamBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (platformSelect.value === "rtmp") {
            streamStatus.textContent = `Transmitiendo a: ${streamUrl} con clave ${streamKey}`;
            streamStatus.style.color = "green";
        } else if (platformSelect.value === "twitch") {
            // Lógica para iniciar la transmisión en Twitch
            getTwitchStreamDetails();
            streamStatus.textContent = "Transmisión a Twitch iniciada.";
            streamStatus.style.color = "green";
        }
        streamControls.classList.remove("hidden");
    });

    // Finalizar Transmisión
    endStreamBtn.addEventListener("click", () => {
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
        }
        streamStatus.textContent = "Transmisión finalizada.";
        streamStatus.style.color = "green";
        streamControls.classList.add("hidden");
        updateButtonStates();
        previewVideo.pause();
        previewVideo.srcObject = null;
    });

    // Actualizar los botones de la interfaz
    function updateButtonStates() {
        if (isCameraOn) {
            toggleCameraBtn.textContent = "Apagar Cámara";
        } else {
            toggleCameraBtn.textContent = "Encender Cámara";
        }
        if (isMicrophoneOn) {
            toggleMicrophoneBtn.textContent = "Apagar Micrófono";
        } else {
            toggleMicrophoneBtn.textContent = "Encender Micrófono";
        }
    }

    // Iniciar al cargar la página (si es necesario)
    getMediaStream();

    // Conectar con Twitch
    document.getElementById('connect-twitch').addEventListener('click', connectToTwitch);

    // Verificar el código de Twitch después de la redirección
    if (window.location.search.includes('code=')) {
        getTwitchStreamDetails();
    }
});
