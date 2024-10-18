//funcion de banner
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todas las imágenes
    }
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    } // Reinicia si llega al final
    slides[slideIndex - 1].style.display = "block"; // Muestra la siguiente imagen
    setTimeout(showSlides, 3000); // Cambia de imagen cada 3 segundos
}


//funcion acordeon
document.querySelectorAll('.pregunta').forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        pregunta.classList.toggle('active');
    });
});

//funcion de audio
document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const muteButton = document.getElementById("mute-button");

    muteButton.addEventListener("click", function () {
        if (audioPlayer.muted) {
            audioPlayer.muted = false;
            muteButton.textContent = "🔊"; // Cambia a icono de sonido activado
        } else {
            audioPlayer.muted = true;
            muteButton.textContent = "🔇"; // Cambia a icono de sonido desactivado
        }
    });
});


