/* Questo script permette di calcolare l'area di diverse forme geometriche (cerchio, quadrato, 
rettangolo, triangolo, rombo, trapezio, parallelogramma, aquilone, poligono regolare, ellisse, 
semicerchio). L'utente può selezionare una forma da un menu a tendina, inserire i dati richiesti e 
ottenere il risultato del calcolo dell'area. Inoltre, viene mostrato un messaggio di benvenuto 
all'inizio e i risultati possono essere cancellati per effettuare nuovi calcoli. */

window.onload = function () {
    // Seleziona il menu a tendina delle forme
    const shapeSelector = document.getElementById("shapeSelector");

    // Crea un'opzione predefinita per il menu a tendina
    const defaultOption = document.createElement("option");
    // Imposta il valore dell'opzione predefinita come vuoto
    defaultOption.value = "";
    // Imposta il testo dell'opzione predefinita
    defaultOption.textContent = "Seleziona una forma";
    // Imposta l'opzione predefinita come selezionata
    defaultOption.selected = true;
    // Disabilita l'opzione predefinita per evitare che venga selezionata
    defaultOption.disabled = true;

    // Inserisce l'opzione predefinita come prima opzione del menu a tendina
    shapeSelector.insertBefore(defaultOption, shapeSelector.firstChild);

    // Seleziona il contenitore principale
    const container = document.querySelector(".container");

    // Crea e inserisce un messaggio di benvenuto
    const welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = "Benvenuto al Calcolo delle Aree!";
    welcomeMessage.classList.add("welcome-message");
    // Inserisce il messaggio di benvenuto prima del contenitore principale
    document.body.insertBefore(welcomeMessage, container);

    // Mostra il messaggio di benvenuto con un'animazione
    setTimeout(function () {
        // Aggiunge la classe "visible" al messaggio di benvenuto per mostrarlo
        welcomeMessage.classList.add("visible");
    }, 100);

    // Nasconde il messaggio di benvenuto e mostra il contenitore principale
    setTimeout(function () {
        // Rimuove la classe "visible" dal messaggio di benvenuto per nasconderlo
        welcomeMessage.classList.remove("visible");
        // Aggiunge la classe "visible" al contenitore principale per mostrarlo
        container.classList.add("visible");
    }, 2000);
};

// Aggiunge un listener per il cambio di selezione nel menu a tendina
document.getElementById("shapeSelector").addEventListener("change", function () {
    // Ottiene la forma selezionata
    const shape = this.value;
    // Seleziona il contenitore dei campi di input
    const inputFields = document.getElementById("inputFields");
    // Pulisce i campi di input
    inputFields.innerHTML = "";

    // Mostra i campi di input appropriati in base alla forma selezionata
    switch (shape) {
        case "circle":
            // Mostra il campo di input per il raggio del cerchio
            inputFields.innerHTML = '<input type="text" class="input-field" id="radius" placeholder="Inserisci il raggio" />';
            break;
        case "square":
            // Mostra il campo di input per il lato del quadrato
            inputFields.innerHTML = '<input type="text" class="input-field" id="side" placeholder="Inserisci il lato" />';
            break;
        case "rectangle":
            // Mostra i campi di input per la larghezza e l'altezza del rettangolo
            inputFields.innerHTML = '<input type="text" class="input-field" id="width" placeholder="Inserisci la larghezza" />' +
                '<input type="text" class="input-field" id="height" placeholder="Inserisci l\'altezza" />';
            break;
        case "triangle":
            // Mostra i campi di input per la base e l'altezza del triangolo
            inputFields.innerHTML = '<input type="text" class="input-field" id="base" placeholder="Inserisci la base" />' +
                '<input type="text" class="input-field" id="height" placeholder="Inserisci l\'altezza" />';
            break;
        case "rhombus":
            // Mostra i campi di input per le diagonali del rombo
            inputFields.innerHTML = '<input type="text" class="input-field" id="diagonal1" placeholder="Inserisci la diagonale maggiore" />' +
                '<input type="text" class="input-field" id="diagonal2" placeholder="Inserisci la diagonale minore" />';
            break;
        case "trapezoid":
            // Mostra i campi di input per le basi e l'altezza del trapezio
            inputFields.innerHTML = '<input type="text" class="input-field" id="base1" placeholder="Inserisci la base maggiore" />' +
                '<input type="text" class="input-field" id="base2" placeholder="Inserisci la base minore" />' +
                '<input type="text" class="input-field" id="height" placeholder="Inserisci l\'altezza" />';
            break;
        case "parallelogram":
            // Mostra i campi di input per la base e l'altezza del parallelogramma
            inputFields.innerHTML = '<input type="text" class="input-field" id="base" placeholder="Inserisci la base" />' +
                '<input type="text" class="input-field" id="height" placeholder="Inserisci l\'altezza" />';
            break;
        case "kite":
            // Mostra i campi di input per le diagonali dell'aquilone
            inputFields.innerHTML = '<input type="text" class="input-field" id="diagonal1" placeholder="Inserisci la diagonale maggiore" />' +
                '<input type="text" class="input-field" id="diagonal2" placeholder="Inserisci la diagonale minore" />';
            break;
        case "regularPolygon":
            // Mostra i campi di input per il lato e il numero di lati del poligono regolare
            inputFields.innerHTML = '<input type="text" class="input-field" id="side" placeholder="Inserisci il lato" />' +
                '<input type="text" class="input-field" id="numSides" placeholder="Inserisci il numero di lati" />';
            break;
        case "ellipse":
            // Mostra i campi di input per gli assi maggiore e minore dell'ellisse
    }
});

// Funzione per calcolare l'area della forma selezionata
function calculateArea() {
    try {
        // Ottiene la forma selezionata dal menu a tendina
        const shape = document.getElementById("shapeSelector").value;
        // Inizializza la variabile per l'area
        let area = 0;
        // Inizializza la variabile per i dati di input
        let inputData = "";

        // Calcola l'area in base alla forma selezionata
        switch (shape) {
            case "circle": // Calcola l'area del cerchio
                // Ottiene il valore del raggio dal campo di input
                let radius = parseFloat(document.getElementById("radius").value);
                // Controlla se il valore del raggio è valido
                if (isNaN(radius) || radius <= 0) throw new Error("Raggio non valido");
                // Calcola l'area utilizzando la formula π * r^2
                area = Math.PI * Math.pow(radius, 2);
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Raggio: ${radius}`;
                break;
            case "square": // Calcola l'area del quadrato
                // Ottiene il valore del lato dal campo di input
                let side = parseFloat(document.getElementById("side").value);
                // Controlla se il valore del lato è valido
                if (isNaN(side) || side <= 0) throw new Error("Lato non valido");
                // Calcola l'area utilizzando la formula lato^2
                area = Math.pow(side, 2);
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Lato: ${side}`;
                break;
            case "rectangle": // Calcola l'area del rettangolo
                // Ottiene i valori della larghezza e dell'altezza dai campi di input
                let width = parseFloat(document.getElementById("width").value);
                let height = parseFloat(document.getElementById("height").value);
                // Controlla se il valore della larghezza è valido
                if (isNaN(width) || width <= 0) throw new Error("Larghezza non valida");
                // Controlla se il valore dell'altezza è valido
                if (isNaN(height) || height <= 0) throw new Error("Altezza non valida");
                // Calcola l'area utilizzando la formula larghezza * altezza
                area = width * height;
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Larghezza: ${width}, Altezza: ${height}`;
                break;
            case "triangle": // Calcola l'area del triangolo
                // Ottiene i valori della base e dell'altezza dai campi di input
                let base = parseFloat(document.getElementById("base").value);
                let heightTriangle = parseFloat(document.getElementById("height").value);
                // Controlla se il valore della base è valido
                if (isNaN(base) || base <= 0) throw new Error("Base non valida");
                // Controlla se il valore dell'altezza è valido
                if (isNaN(heightTriangle) || heightTriangle <= 0) throw new Error("Altezza non valida");
                // Calcola l'area utilizzando la formula 0.5 * base * altezza
                area = 0.5 * base * heightTriangle;
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Base: ${base}, Altezza: ${heightTriangle}`;
                break;
            case "rhombus": // Calcola l'area del rombo
                // Ottiene i valori delle diagonali dai campi di input
                let diagonal1 = parseFloat(document.getElementById("diagonal1").value);
                let diagonal2 = parseFloat(document.getElementById("diagonal2").value);
                // Controlla se il valore della diagonale maggiore è valido
                if (isNaN(diagonal1) || diagonal1 <= 0) throw new Error("Diagonale maggiore non valida");
                // Controlla se il valore della diagonale minore è valido
                if (isNaN(diagonal2) || diagonal2 <= 0) throw new Error("Diagonale minore non valida");
                // Calcola l'area utilizzando la formula 0.5 * diagonale maggiore * diagonale minore
                area = 0.5 * diagonal1 * diagonal2;
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Diagonale maggiore: ${diagonal1}, Diagonale minore: ${diagonal2}`;
                break;
            case "trapezoid": // Calcola l'area del trapezio
                // Ottiene i valori delle basi e dell'altezza dai campi di input
                let base1 = parseFloat(document.getElementById("base1").value);
                let base2 = parseFloat(document.getElementById("base2").value);
                let heightTrapezoid = parseFloat(document.getElementById("height").value);
                // Controlla se il valore della base maggiore è valido
                if (isNaN(base1) || base1 <= 0) throw new Error("Base maggiore non valida");
                // Controlla se il valore della base minore è valido
                if (isNaN(base2) || base2 <= 0) throw new Error("Base minore non valida");
                // Controlla se il valore dell'altezza è valido
                if (isNaN(heightTrapezoid) || heightTrapezoid <= 0) throw new Error("Altezza non valida");
                // Calcola l'area utilizzando la formula 0.5 * (base maggiore + base minore) * altezza
                area = 0.5 * (base1 + base2) * heightTrapezoid;
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Base maggiore: ${base1}, Base minore: ${base2}, Altezza: ${heightTrapezoid}`;
                break;
            case "parallelogram": // Calcola l'area del parallelogramma
                // Ottiene i valori della base e dell'altezza dai campi di input
                let baseParallelogram = parseFloat(document.getElementById("base").value);
                let heightParallelogram = parseFloat(document.getElementById("height").value);
                // Controlla se il valore della base è valido
                if (isNaN(baseParallelogram) || baseParallelogram <= 0) throw new Error("Base non valida");
                // Controlla se il valore dell'altezza è valido
                if (isNaN(heightParallelogram) || heightParallelogram <= 0) throw new Error("Altezza non valida");
                // Calcola l'area utilizzando la formula base * altezza
                area = baseParallelogram * heightParallelogram;
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Base: ${baseParallelogram}, Altezza: ${heightParallelogram}`;
                break;
            case "kite": // Calcola l'area dell'aquilone
                // Ottiene i valori delle diagonali dai campi di input
                let diagonal1Kite = parseFloat(document.getElementById("diagonal1").value);
                let diagonal2Kite = parseFloat(document.getElementById("diagonal2").value);
                // Controlla se il valore della diagonale maggiore è valido
                if (isNaN(diagonal1Kite) || diagonal1Kite <= 0) throw new Error("Diagonale maggiore non valida");
                // Controlla se il valore della diagonale minore è valido
                if (isNaN(diagonal2Kite) || diagonal2Kite <= 0) throw new Error("Diagonale minore non valida");
                // Calcola l'area utilizzando la formula 0.5 * diagonale maggiore * diagonale minore
                area = 0.5 * diagonal1Kite * diagonal2Kite;
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Diagonale maggiore: ${diagonal1Kite}, Diagonale minore: ${diagonal2Kite}`;
                break;
            case "regularPolygon": // Calcola l'area del poligono regolare
                // Ottiene i valori del lato e del numero di lati dai campi di input
                let sidePolygon = parseFloat(document.getElementById("side").value);
                let numSides = parseFloat(document.getElementById("numSides").value);
                // Controlla se il valore del lato è valido
                if (isNaN(sidePolygon) || sidePolygon <= 0) throw new Error("Lato non valido");
                // Controlla se il valore del numero di lati è valido
                if (isNaN(numSides) || numSides <= 0) throw new Error("Numero di lati non valido");
                // Calcola l'area utilizzando la formula (n * lato^2) / (4 * tan(π / n))
                area = (numSides * Math.pow(sidePolygon, 2)) / (4 * Math.tan(Math.PI / numSides));
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Lato: ${sidePolygon}, Numero di lati: ${numSides}`;
                break;
            case "ellipse": // Calcola l'area dell'ellisse
                // Ottiene i valori degli assi maggiore e minore dai campi di input
                let majorAxis = parseFloat(document.getElementById("majorAxis").value);
                let minorAxis = parseFloat(document.getElementById("minorAxis").value);
                // Controlla se il valore dell'asse maggiore è valido
                if (isNaN(majorAxis) || majorAxis <= 0) throw new Error("Asse maggiore non valido");
                // Controlla se il valore dell'asse minore è valido
                if (isNaN(minorAxis) || minorAxis <= 0) throw new Error("Asse minore non valido");
                // Calcola l'area utilizzando la formula π * asse maggiore * asse minore
                area = Math.PI * majorAxis * minorAxis;
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Asse maggiore: ${majorAxis}, Asse minore: ${minorAxis}`;
                break;
            case "semicircle": // Calcola l'area del semicerchio
                // Ottiene il valore del raggio dal campo di input
                let radiusSemicircle = parseFloat(document.getElementById("radius").value);
                // Controlla se il valore del raggio è valido
                if (isNaN(radiusSemicircle) || radiusSemicircle <= 0) throw new Error("Raggio non valido");
                // Calcola l'area utilizzando la formula 0.5 * π * r^2
                area = 0.5 * Math.PI * Math.pow(radiusSemicircle, 2);
                // Prepara i dati di input per la visualizzazione del risultato
                inputData = `Raggio: ${radiusSemicircle}`;
                break;
            default:
                // Caso predefinito: nessuna forma selezionata
                area = 0;
                break;
        }

        // Crea e mostra il risultato del calcolo dell'area
        const result = document.createElement("h3");
        // Imposta il testo del risultato con la forma, i dati di input e l'area calcolata
        result.textContent = `Forma: ${shape}\nDati: ${inputData}\nArea: ${area.toFixed(3)}`;
        // Aggiunge una classe per rendere il risultato visibile
        result.classList.add("visible");
        // Aggiunge il risultato al contenitore dei risultati
        document.getElementById("resultsContainer").appendChild(result);

        // Pulisce i campi di input
        document.getElementById("inputFields").innerHTML = "";
        // Mostra il messaggio di fine
        document.getElementById("endMessage").style.display = "block";
    } catch (error) {
        // Mostra un messaggio di errore in caso di dati non validi
        alert("Si è verificato un errore durante il calcolo. Per favore, controlla i dati inseriti e riprova.");
        // Stampa l'errore nella console per il debug
        console.error(error);
    }
}

// Funzione per cancellare i risultati
function clearResults() {
    // Pulisce il contenitore dei risultati
    document.getElementById("resultsContainer").innerHTML = "";
    // Resetta il menu a tendina delle forme
    document.getElementById("shapeSelector").value = "";
    // Pulisce i campi di input
    document.getElementById("inputFields").innerHTML = "";
    // Nasconde il messaggio di fine
    document.getElementById("endMessage").style.display = "none";
}
