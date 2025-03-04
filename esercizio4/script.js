/* Questo script JavaScript permette di interagire con alcuni elementi di una pagina web. 
    In particolare, consente di cambiare il contenuto di un paragrafo e di resettarlo al valore 
    originale tramite due bottoni distinti e di cambiare il colore di un box tramite un altro 
    bottone che cicla tra una lista di colori predefinita ogni volta che viene cliccato. 

    Funzionalità principali: 
    1. Selezione degli elementi dal DOM: 
       - Un titolo con id "titolo". 
       - Un paragrafo con id "testo". 
       - Un input di testo con id "inputTesto". 
       - Un bottone per cambiare il testo del paragrafo con id "changeColorBtn". 
       - Un bottone per resettare il testo del paragrafo con id "btnReset". 

    2. Aggiunta di un listener per il click sul bottone "Cambia": 
       - Quando viene cliccato, prende il testo dall'input. 
       - Se l'input non è vuoto, cambia il contenuto del paragrafo con il nuovo testo e pulisce 
        l'input. 
       - Se l'input è vuoto, mostra un avviso all'utente. 

    3. Aggiunta di un listener per il click sul bottone "Reset": 
       - Quando viene cliccato, ripristina il testo del paragrafo al valore originale. 
       - Pulisce l'input dopo il reset. 
       
    4. Selezione degli elementi dal DOM:
       - Un div con id "colorBox".
         - Un bottone per cambiare il colore del box con id "changeColorBtn".
            - Una lista di colori predefinita.
            - Un indice per tenere traccia del colore corrente.
            - Ascolta l'evento "click" sul bottone e cambia il colore del box.
            - Applica il nuovo colore allo sfondo del box.
            - Cambia il testo del box con il nome del colore.
            - Incrementa l'indice per la prossima volta e se supera la lunghezza dell'array, 
              ricomincia da 0.

    5. Aggiunta di un listener per il click sul bottone "Cambia":
       - Quando viene cliccato, prende il colore dalla lista in base all'indice corrente.
         - Applica il nuovo colore allo sfondo del box.
            - Cambia il testo del box con il nome del colore.
            - Incrementa l'indice per la prossima volta e se supera la lunghezza dell'array, 
              ricomincia da 0.

       */


// 1. Seleziona gli elementi dal DOM 
const titolo = document.querySelector("#titolo");
const testo = document.querySelector("#testo");
const inputTesto = document.querySelector("#inputTesto");
const changeTextBtn = document.querySelector("#changeTextBtn");
const btnReset = document.querySelector("#btnReset");
// Salva il testo originale del paragrafo 
const testoOriginale = testo.textContent;

// 2. Aggiungi un listener per il click sul bottone "Cambia" 
changeTextBtn.addEventListener("click", () => {
    // Prende il testo dall'input e rimuove eventuali spazi bianchi all'inizio e alla fine 
    const nuovoContenuto = inputTesto.value.trim();

    if (nuovoContenuto) {
        // Cambia il contenuto del paragrafo con il nuovo testo 
        testo.textContent = nuovoContenuto;
        // Pulisce l'input dopo aver cambiato il contenuto 
        inputTesto.value = "";
    } else {
        // Mostra un avviso all'utente se l'input è vuoto 
        alert("Inserisci del testo prima di cambiare il contenuto!");
    }
});

// 3. Aggiungi un listener per il click sul bottone "Reset" 
btnReset.addEventListener("click", () => {
    // Ripristina il contenuto originale del paragrafo 
    testo.textContent = testoOriginale;
    // Pulisce l'input dopo il reset 
    inputTesto.value = '';
});

// 4. Seleziona gli elementi dal DOM 
const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColorBtn");
// Lista di colori da utilizzare (puoi aggiungerne quanti vuoi) 
const colors = ["red", "blue", "green", "orange", "purple", "brown", "yellow", "pink", "black", "gray", "cyan", "magenta", "lime", "teal", "indigo", "violet", "fuchsia", "gold", "silver", "white", "navy", "olive", "maroon"];
// Indice per tenere traccia del colore corrente 
let currentColorIndex = 0;
const btnReset2 = document.getElementById("btnReset2");

// 5. Ascolta l'evento "click" sul bottone e funzione che cambia il colore del box 
changeColorBtn.addEventListener("click", () => {
    // Prendi il colore dalla lista in base all'indice corrente 
    const newColor = colors[currentColorIndex];
  
    // Applica il nuovo colore allo sfondo del box 
    colorBox.style.backgroundColor = newColor;

    // Cambia il testo del box con il nome del colore 
    colorBox.textContent = newColor.charAt(0).toUpperCase() + newColor.slice(1);
  
    // Incrementa l'indice per la prossima volta e se supera la lunghezza dell'array, ricomincia 
    // da 0 
    currentColorIndex++;
    if (currentColorIndex >= colors.length) {
      currentColorIndex = 0;
    }
});

// 6. Aggiungi un listener per il click sul bottone "Reset"
btnReset2.addEventListener("click", () => {
    // Ripristina il contenuto originale del paragrafo
    testo.textContent = testoOriginale;
    // Pulisce l'input dopo il reset
    inputTesto.value = '';

    // Ripristina il colore originale del box
    colorBox.style.backgroundColor = "initial";
    colorBox.textContent = "Color Box";
    // Resetta l'indice del colore
    currentColorIndex = 0;

});
