// Palabras que se van a mostrar en la animación
const words = ["Amor", "Justicia", "Unida", "Santitad", "Gratitud", "Humildad", "Esperanza", "Fe", "Paz"];
let currentWordIndex = 0;
const changingWordElement = document.getElementById("changing-word");

// Función para cambiar la palabra
function changeWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    changingWordElement.textContent = words[currentWordIndex];
}

// Cambiar la palabra cada 2 segundos (de acuerdo con la animación)
setInterval(changeWord, 2000);
