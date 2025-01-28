// Definición de los cultos y horarios
const cultos = [
    { day: 0, start: "10:00", end: "12:30", name: "domingo" }, // Domingo
    { day: 2, start: "18:00", end: "20:00", name: "martes" }, // Martes
    { day: 5, start: "18:00", end: "20:00", name: "viernes" } // Viernes
  ];

  // Elementos DOM
  const cultoEnCursoElement = document.querySelector('.message.culto-en-curso');
  const rectaFinalElement = document.querySelector('.message.recta-final');
  const finDelCultoElement = document.querySelector('.message.fin-del-culto');
  const countdownElements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };

  /**
   * Obtener el próximo culto y calcular la fecha y hora exactas
   */
  function getNextCulto() {
    const now = new Date();
    const today = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    for (const culto of cultos) {
      const startMinutes = parseInt(culto.start.split(":")[0]) * 60 + parseInt(culto.start.split(":")[1]);
      const endMinutes = parseInt(culto.end.split(":")[0]) * 60 + parseInt(culto.end.split(":")[1]);

      if (today === culto.day) {
        if (currentMinutes < startMinutes) {
          // Si el culto es hoy pero aún no empieza
          const cultoDate = new Date(now);
          cultoDate.setHours(parseInt(culto.start.split(":")[0]));
          cultoDate.setMinutes(parseInt(culto.start.split(":")[1]));
          cultoDate.setSeconds(0);
          return { ...culto, date: cultoDate };
        } else if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
          // Si el culto está en curso
          return { ...culto, inProgress: true };
        }
      }

      if (today < culto.day) {
        // Si el culto es después de hoy
        const cultoDate = new Date(now);
        cultoDate.setDate(now.getDate() + (culto.day - today));
        cultoDate.setHours(parseInt(culto.start.split(":")[0]));
        cultoDate.setMinutes(parseInt(culto.start.split(":")[1]));
        cultoDate.setSeconds(0);
        return { ...culto, date: cultoDate };
      }
    }

    // Si no hay más cultos esta semana, calcular el primero de la próxima semana
    const firstCulto = cultos[0];
    const nextDate = new Date(now);
    nextDate.setDate(now.getDate() + (7 - today + firstCulto.day));
    nextDate.setHours(parseInt(firstCulto.start.split(":")[0]));
    nextDate.setMinutes(parseInt(firstCulto.start.split(":")[1]));
    nextDate.setSeconds(0);
    return { ...firstCulto, date: nextDate };
  }

  /**
   * Actualizar la cuenta regresiva y los mensajes
   */
  function updateCountdown() {
    const now = new Date();
    const nextEvent = getNextCulto();

    if (nextEvent.inProgress) {
      // Mostrar mensaje "Culto en curso" y ocultar la cuenta regresiva
      cultoEnCursoElement.classList.add("active");
      rectaFinalElement.classList.remove("active");
      finDelCultoElement.classList.remove("active");
    } else {
      // Si el culto está próximo, mostrar la cuenta regresiva
      const timeLeft = nextEvent.date.getTime() - now.getTime();

      if (timeLeft <= 0) {
        finDelCultoElement.classList.add("active");
        cultoEnCursoElement.classList.remove("active");
        rectaFinalElement.classList.remove("active");
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdownElements.days.textContent = String(days).padStart(2, "0");
      countdownElements.hours.textContent = String(hours).padStart(2, "0");
      countdownElements.minutes.textContent = String(minutes).padStart(2, "0");
      countdownElements.seconds.textContent = String(seconds).padStart(2, "0");

      // Mostrar mensaje de la recta final si faltan menos de 10 minutos
      if (minutes < 10) {
        rectaFinalElement.classList.add("active");
      } else {
        rectaFinalElement.classList.remove("active");
      }

      cultoEnCursoElement.classList.remove("active");
    }
  }

  // Llamar a la función de actualización y luego cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);
