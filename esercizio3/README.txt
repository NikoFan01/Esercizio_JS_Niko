Questo progetto contiene una pagina web (`calcoloAree.html`) che permette di calcolare l'area di 
diverse forme geometriche. La pagina include un menu a tendina per selezionare la forma, campi di 
input per inserire i dati necessari, e pulsanti per calcolare e cancellare i risultati. 
I risultati vengono visualizzati in una cronologia e c'è un messaggio di ringraziamento alla fine. 

1. `calcoloAree.html` 

# Descrizione del file calcoloAree.html 

    Il file `calcoloAree.html` è una pagina web che permette agli utenti di calcolare l'area di 
    diverse forme geometriche. La pagina è strutturata in modo tale da offrire un'interfaccia 
    utente intuitiva e interattiva per selezionare una forma geometrica, inserire i valori 
    necessari e ottenere il calcolo dell'area. Di seguito viene fornita una descrizione 
    dettagliata degli elementi presenti nel documento. 

# Struttura del Documento 

    ## Intestazione del Documento (`<head>`) 

        - **Meta Charset**: `<meta charset="UTF-8" />` - Specifica la codifica dei caratteri 
          utilizzata nella pagina, in questo caso UTF-8. 
        - **Titolo**: `<title>Calcolo Aree</title>` - Il titolo della pagina web che appare nella 
          scheda del browser. 
        - **Foglio di Stile**: `<link rel="stylesheet" href="calcoloAree.css">` - Collegamento al 
          file CSS esterno `calcoloAree.css` che contiene gli stili per la pagina. 

    ## Corpo del Documento (`<body>`) 

        - **Contenitore Principale**: `<div class="container">` - Un div che funge da contenitore 
          principale per il contenuto della pagina. 
                -- **Box di Contenuto**: `<div class="box">` - Un div interno che contiene tutti 
                   gli elementi interattivi della pagina. 
                        --- **Titolo**: `<h1>Calcolo dell'Area di Forme Geometriche</h1>` - 
                            Un'intestazione di livello 1 che descrive lo scopo della pagina. 
                        --- **Menu a Tendina**: `<select id="shapeSelector">` - Un menu a tendina 
                            che permette all'utente di selezionare la forma geometrica di cui 
                            calcolare l'area. 
                                ---- **Opzioni del Menu**: 
                                     `<option value="...">...</option>` - Diverse opzioni per le 
                                     forme geometriche disponibili (Cerchio, Quadrato, Rettangolo, 
                                     Triangolo, Rombo, Trapezio, Parallelogramma, Aquilone, 
                                     Poligono Regolare, Ellisse, Semicerchio). 
                        --- **Campi di Input**: `<div id="inputFields"></div>` - Un div vuoto che 
                            verrà popolato dinamicamente con i campi di input necessari per il 
                            calcolo dell'area in base alla forma selezionata. 
                        --- **Pulsante di Calcolo**: 
                            `<button onclick="calculateArea()">Calcola</button>` - Un pulsante 
                            che, quando cliccato, esegue la funzione `calculateArea()` per 
                            calcolare l'area della forma selezionata. 
                        --- **Risultato del Calcolo**: `<h3 id="result"></h3>` - Un'intestazione 
                            di livello 3 che visualizza il risultato del calcolo dell'area. 
                        --- **Contenitore dei Risultati**: 
                            `<div id="resultsContainer" class="results-container"></div>` - Un div 
                            che contiene la cronologia dei risultati dei calcoli effettuati. 
                        --- **Pulsante di Cancellazione**: 
                            `<button onclick="clearResults()">Cancella Cronologia</button>` - Un 
                            pulsante che, quando cliccato, esegue la funzione `clearResults()` per 
                            cancellare la cronologia dei risultati. 
                        --- **Messaggio di Fine**: 
                            `<h3 id="endMessage" style="display: none;">Hai terminato i calcoli. 
                            Grazie!</h3>` - Un messaggio che viene visualizzato quando l'utente ha 
                            terminato i calcoli. 

    ## Script 

        - **Script Esterno**: `<script src="calcoloAree.js"></script>` - Collegamento al file 
          JavaScript esterno `calcoloAree.js` che contiene la logica per il calcolo delle aree e 
          la gestione dell'interfaccia utente. 

# Funzionalità 

    La pagina permette di: 

        1. Selezionare una forma geometrica dal menu a tendina. 
        2. Inserire i valori richiesti per il calcolo dell'area. 
        3. Calcolare l'area della forma selezionata e visualizzare il risultato. 
        4. Visualizzare una cronologia dei risultati dei calcoli effettuati. 
        5. Cancellare la cronologia dei risultati. 
        6. Visualizzare un messaggio di ringraziamento al termine dei calcoli. 

# Dipendenze 

    - **Foglio di Stile**: `calcoloAree.css` - Contiene gli stili per la pagina. 
    - **Script JavaScript**: `calcoloAree.js` - Contiene la logica per il calcolo delle aree e la 
      gestione dell'interfaccia utente. 

# Note 

    - Assicurarsi che i file `calcoloAree.css` e `calcoloAree.js` siano presenti nella stessa 
      directory del file `calcoloAree.html` per il corretto funzionamento della pagina. 

2. `calcoloAree.css` 

# Descrizione del file calcoloAree.css 

    Questo file CSS definisce lo stile per una pagina web che include vari elementi come il corpo 
    della pagina, titoli, elementi di input e contenitori. 

# Di seguito è riportata una descrizione dettagliata delle regole di stile applicate: 

    ## Corpo della pagina (body): 

        - Font: Arial, sans-serif. 
        - Testo centrato orizzontalmente. 

    ## Titoli (h1, h3): 

        - Margine superiore e inferiore: 5px. 
        - Opacità iniziale: 0 (trasparente). 
        - Transizione di opacità: 0.5s con effetto ease-in-out. 
        - Quando hanno la classe 'visible', l'opacità diventa 1 (visibile). 

    ## Elementi select, input e button: 

        - Visualizzazione come blocchi. 
        - Centrati orizzontalmente con margine automatico. 
        - Padding interno: 10px. 
        - Dimensione del font: 16px. 

    ## Contenitore principale (.container): 

        - Opacità iniziale: 0 (trasparente). 
        - Transizione di opacità: 0.5s con effetto ease-in-out. 
        - Visualizzazione come flexbox. 
        - Elementi centrati orizzontalmente e verticalmente. 
        - Altezza: 100% della viewport. 
        - Colore di sfondo: #f0f0f0. 
        - Quando ha la classe 'visible', diventa visibile e viene visualizzato come blocco. 

    ## Contenitore per i risultati (.results-container): 

        - Margine superiore: 20px. 
        - Padding interno: 10px. 
        - Bordo: 1px solido #ccc. 
        - Colore di sfondo: #ffffff. 
        - Angoli arrotondati: 5px. 
        - Ombra: 0 0 10px rgba(0, 0, 0, 0.1). 
        - Transizioni per trasformazione, ombra e colore di sfondo: 0.1s con effetto ease. 

Questo file CSS è progettato per fornire un aspetto pulito e moderno alla pagina web, con 
transizioni fluide e una disposizione centrata degli elementi principali. 

3. `calcoloAree.js` 

# Descrizione del file calcoloAree.js 

    Il file `calcoloAree.js` contiene uno script JavaScript che permette di calcolare l'area di 
    diverse forme geometriche. L'utente può selezionare una forma da un menu a tendina, inserire i 
    dati richiesti e ottenere il risultato del calcolo dell'area. Inoltre, viene mostrato un 
    messaggio di benvenuto all'inizio e i risultati possono essere cancellati per effettuare nuovi 
    calcoli. 

# Funzionalità principali 

    ## Messaggio di benvenuto: 

        - All'avvio della pagina, viene mostrato un messaggio di benvenuto che scompare dopo 2 
          secondi, rivelando il contenitore principale. 

    ## Selezione della forma geometrica: 

        - Un menu a tendina (`shapeSelector`) permette all'utente di selezionare la forma 
          geometrica di cui desidera calcolare l'area. 
        - Le forme disponibili sono: cerchio, quadrato, rettangolo, triangolo, rombo, trapezio, 
          parallelogramma, aquilone, poligono regolare, ellisse e semicerchio. 

    ## Inserimento dei dati: 

        - In base alla forma selezionata, vengono mostrati i campi di input necessari per inserire 
          i dati richiesti (ad esempio, raggio per il cerchio, base e altezza per il triangolo, 
          ecc.). 

    ## Calcolo dell'area: 

        - Una funzione `calculateArea()` calcola l'area della forma selezionata utilizzando i dati 
        inseriti dall'utente. 
        - Viene effettuata una validazione dei dati inseriti per assicurarsi che siano numeri 
          positivi. 
        - In caso di errore (ad esempio, dati non validi), viene mostrato un messaggio di errore. 

    ## Visualizzazione dei risultati: 

        - I risultati del calcolo (forma, dati inseriti e area calcolata) vengono mostrati in un 
        contenitore (`resultsContainer`). 
        - Dopo il calcolo, i campi di input vengono svuotati e viene mostrato un messaggio di fine 
          calcolo. 

    ## Cancellazione dei risultati: 

        - Una funzione `clearResults()` permette di cancellare i risultati visualizzati, resettare 
          il menu a tendina e nascondere il messaggio di fine calcolo. 

# Struttura del codice 

    ## Inizializzazione: 

        ```javascript 
        window.onload = function () { 
            // Codice per mostrare il messaggio di benvenuto e inizializzare il menu a tendina 
        }; 
        ``` 

    ## Gestione della selezione della forma: 

        ```javascript 
        document.getElementById("shapeSelector").addEventListener("change", function () { 
            // Codice per mostrare i campi di input in base alla forma selezionata 
        }); 
        ``` 

    ## Calcolo dell'area: 

        ```javascript 
        function calculateArea() { 
            // Codice per calcolare l'area della forma selezionata e mostrare i risultati 
        } 
        ``` 

    ## Cancellazione dei risultati: 

        ```javascript 
        function clearResults() { 
            // Codice per cancellare i risultati e resettare il form 
        } 
        ``` 

# Esempio di utilizzo 

    1. L'utente apre la pagina e vede un messaggio di benvenuto. 
    2. Dopo 2 secondi, il messaggio di benvenuto scompare e viene mostrato il menu a tendina per 
       selezionare la forma geometrica. 
    3. L'utente seleziona una forma dal menu a tendina (ad esempio, "cerchio"). 
    4. Vengono mostrati i campi di input necessari per inserire i dati richiesti (ad esempio, il 
       raggio per il cerchio). 
    5. L'utente inserisce i dati e avvia il calcolo dell'area. 
    6. Viene mostrato il risultato del calcolo (ad esempio, "Forma: cerchio, Raggio: 5, Area: 
       78.540"). 
    7. L'utente può cancellare i risultati e ripetere il processo per una nuova forma. 
