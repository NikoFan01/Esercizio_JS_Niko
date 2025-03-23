// Array dei percorsi delle immagini (sostituisci con i tuoi percorsi locali)
const images = [
    './images/image1.png',
    './images/image2.png',
    './images/image3.png',
    './images/image4.png',
    './images/image5.png'
];

let currentIndex = null;
let intervalId = null;

// Elementi del DOM
const image = document.getElementById( 'image' );
const prevBtn = document.getElementById( 'prev' );
const randomBtn = document.getElementById( 'random' );
const nextBtn = document.getElementById( 'next' );
const intervalTime = document.getElementById( 'time' );
const startBtn = document.getElementById( 'start-carousel' );
const stopBtn = document.getElementById( 'stop-carousel' );
const resetBtn = document.getElementById( 'reset-carousel' );

// Funzione per l'immagine successiva
function showNextImg () {
    currentIndex = ( currentIndex + 1 ) % images.length;
    image.src = images[ currentIndex ];
    stopSlide(); // Ferma lo slideshow quando si cambia immagine manualmente
}

// Funzione per l'immagine precedente
function showPrevImg () {
    currentIndex = ( currentIndex - 1 + images.length ) % images.length;
    image.src = images[ currentIndex ];
    stopSlide(); // Ferma lo slideshow quando si cambia immagine manualmente
}

// Avvia lo slideshow automatico
function startSlide () {
    const interval = parseFloat( intervalTime.value );
    if ( interval < 0.5 || interval > 60 ) {
        alert( 'Inserisci un numero tra 0.5 e 60' );
        return;
    }
    stopSlide(); // Ferma eventuali intervalli esistenti
    intervalId = setInterval( function () {
        currentIndex = ( currentIndex + 1 ) % images.length;
        image.src = images[ currentIndex ];
    }, interval * 1000 );
}

// Ferma lo slideshow automatico
function stopSlide () {
    if ( intervalId ) {
        clearInterval( intervalId );
    }
}

// Ripristina lo slideshow alla prima immagine
function resetSlide () {
    stopSlide(); // Ferma lo slideshow
    currentIndex = 0; // Torna alla prima immagine
    image.src = images[ currentIndex ]; // Mostra la prima immagine
}

function randomImage () {
    stopSlide(); // Ferma lo slideshow
    currentIndex = Math.round( Math.random() * ( images.length - 1 ) ); // Seleziona un indice casuale
    image.src = images[ currentIndex ]; // Mostra un'immagine casuale
}

// Gestione degli eventi
nextBtn.addEventListener( 'click', showNextImg );
randomBtn.addEventListener( 'click', randomImage );
prevBtn.addEventListener( 'click', showPrevImg );
startBtn.addEventListener( 'click', startSlide );
stopBtn.addEventListener( 'click', stopSlide );
resetBtn.addEventListener( 'click', resetSlide );

window.addEventListener( 'load', function () {
    // Imposta il valore predefinito per il tempo di intervallo
    intervalTime.value = 2; // 2 secondi
    randomImage(); // Mostra un'immagine casuale all'avvio
} );

// Validazione dell'input per il tempo di intervallo
intervalTime.addEventListener( 'input', function () {
    this.setCustomValidity( this.value < 0.5 || this.value > 60 ? 'Inserisci un numero tra 0.5 e 60' : '' );
    if ( this.value < 0.5 || this.value > 60 ) {
        this.value = Math.min( Math.max( this.value, 0.5 ), 60 );
    }
} );

// Mostra la prima immagine
image.src = images[ currentIndex ];