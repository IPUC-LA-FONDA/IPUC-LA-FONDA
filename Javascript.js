// Toggle para el menú
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Función para botón del álbum
function playAlbum() {
    alert('¡Reproduciendo el álbum!');
}

// Función para abrir la tienda
function openStore() {
    alert('Redirigiendo a la tienda...');
}

// Ocultar el splash screen después de cargar
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Retrasar la desaparición para efectos visuales
    setTimeout(() => {
        splashScreen.style.display = 'none'; // Ocultar splash screen
        mainContent.style.display = 'block'; // Mostrar contenido principal
    }, 7000); // 7 segundos
});

// Botones de control de la radio
const playButton = document.getElementById('play-button');
const volumeButton = document.getElementById('volume-button');

// Estado de reproducción y volumen
let isPlaying = false;
let isMuted = false;

// Función para reproducir/pausar la radio
playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playButton.textContent = isPlaying ? '⏸️' : '▶️';
    alert(isPlaying ? 'Radio IPUC está reproduciendo' : 'Radio IPUC en pausa');
});

// Función para controlar el volumen
volumeButton.addEventListener('click', () => {
    isMuted = !isMuted;
    volumeButton.textContent = isMuted ? '🔇' : '🔊';
    alert(isMuted ? 'Radio silenciada' : 'Volumen activado');
});

document.addEventListener("DOMContentLoaded", function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detectar dispositivos Android y iOS
    if (!/android|iphone|ipad|ipod/i.test(userAgent)) {
        // Redirigir si no es Android o iPhone
        alert("Acceso permitido solo desde dispositivos móviles.");
        window.location.href = "https://ipuclafonda.netlify.app/";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const progressBar = document.getElementById("progressBar");

    if (audioPlayer && progressBar) {
        // Actualiza la barra de progreso en función del tiempo actual del audio
        audioPlayer.addEventListener("timeupdate", function () {
            const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.value = percentage || 0; // Maneja el caso de "NaN" para streams en vivo
        });

        // Permite al usuario adelantar o retroceder el audio
        progressBar.addEventListener("input", function () {
            if (!isNaN(audioPlayer.duration)) {
                const seekTime = (progressBar.value / 100) * audioPlayer.duration;
                audioPlayer.currentTime = seekTime;
            }
        });
    } else {
        console.error("No se encontró el reproductor de audio o la barra de progreso.");
    }
});

// Coloca directamente el valor 2024 en el elemento con id "publication-date"
document.getElementById("date-title").textContent = "INFORME MISIONERO";
// Coloca directamente el valor 2024 en el elemento con id "publication-date"
document.getElementById("date-descrip").textContent = "El informe misionero de la Iglesia Pentecostal Unida de Colombia (IPUC) ofrece un panorama detallado de las actividades y logros alcanzados en la obra evangelística y social de la iglesia en Colombia. A través de la predicación del evangelio y el servicio a las comunidades, la IPUC ha logrado expandir el mensaje cristiano en diversas regiones, especialmente en áreas rurales y de difícil acceso. El informe abarca las principales actividades realizadas, como cultos evangelísticos, proyectos de discipulado, programas de ayuda social, y testimonios de transformación. También se destacan los esfuerzos de plantación de nuevas iglesias y el trabajo de capacitación de líderes locales. Además, se presentan los retos y desafíos enfrentados durante el año, así como las necesidades y proyecciones para el futuro, incluyendo el apoyo financiero y logístico requerido para continuar con la misión. Este informe refleja la fidelidad de Dios en el cumplimiento del mandato de llevar el evangelio a todas las naciones y es un llamado a la oración y al apoyo continuo de la iglesia para seguir extendiendo el Reino de Dios en Colombia";
// Coloca directamente el valor 2024 en el elemento con id "publication-date"
document.getElementById("date-año").textContent = "2024";
// Coloca directamente el valor 2024 en el elemento con id "publication-date"
document.getElementById("date-user").textContent = "@ipuclafonda";
// Coloca directamente el valor 2024 en el elemento con id "publication-date"
document.getElementById("date-visi").textContent = "Publico";

// function to change the text of the button
function changeText() {
    document.getElementById("btn").innerHTML = "¡Gracias por tu apoyo!"
};



// Formulario de busqueda
function searchContent(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const searchQuery = document.getElementById("search").value.toLowerCase().trim();
    const contentText = document.body.textContent.toLowerCase();

    if (searchQuery) {
        if (contentText.includes(searchQuery)) {
            document.getElementById("search-result").textContent = 
                `Resultados encontrados para: "${searchQuery}"`;
        } else {
            document.getElementById("search-result").textContent = 
                `No se encontraron resultados para: "${searchQuery}"`;
        }
    } else {
        document.getElementById("search-result").textContent = "Ingresa un término de búsqueda.";
    }
};

// Formulario de contacto
function sumitForm(event) {
    event.preventDefault(); // Evita que el Formulario regarge la pagina

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const messaje = document.getElementById("messaje").value;

    if (name && email && messaje) {
        alert('¡Gracias por tu mensaje!');
    }
    else {
        alert('Por favor, completa todos los campos del formulario.');
    }

    document.getElementById("contact-form").reset();
};

// Agregar el input de búsqueda al DOM
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.createElement("form");
    searchForm.setAttribute("onsubmit", "searchContent(event)");

    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("id", "search");
    searchInput.setAttribute("placeholder", "Buscar...");

    const searchButton = document.createElement("button");
    searchButton.setAttribute("type", "submit");
    searchButton.textContent = "Buscar";

    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);

    document.body.insertBefore(searchForm, document.body.firstChild);
});

// Agregar sonido de fondo
document.addEventListener("DOMContentLoaded", function () {
    const backgroundAudio = document.createElement("audio");
    backgroundAudio.setAttribute("src", "músicacristiana.mp3"); // Reemplaza con la ruta de tu archivo de audio
    backgroundAudio.setAttribute("loop", "true");
    backgroundAudio.setAttribute("autoplay", "true");
    backgroundAudio.setAttribute("id", "background-audio");

    document.body.appendChild(backgroundAudio);
});

let img = document.createElement("img");
img.src = "IPUC_LA_FONDA-ACTU.png";
document.body.appendChild(img);

