// 1. Chiedi all'utente il prezzo
let prezzo = prompt("Inserisci il prezzo del prodotto:");
prezzo = parseFloat(prezzo); // converti la stringa in numero decimale

// 2. Chiedi se ha un coupon (sì/no)
let haCoupon = prompt("Hai un coupon sconto? (sì/no)");

// 3. Imposta regole per lo sconto
// - se l'utente ha coupon, applichiamo uno sconto del 20%
// - altrimenti nessuno sconto
// - BONUS: se il prezzo è sopra un certo valore (es. 100€), applichiamo uno sconto extra

let sconto = 0;
    if (haCoupon.toLowerCase() === "sì" || haCoupon.toLowerCase() === "si") {
    sconto = 0.2; // 20%
}

// Se il prezzo è maggiore di 100, sconto aggiuntivo del 5%
if (prezzo > 128.20) {
    sconto += 0.22; // 11% aggiuntivo
}

if (prezzo > 1282.09) {
    sconto += 0; // 11% aggiuntivo
}

// 4. Calcola il prezzo finale
let prezzoFinale = prezzo * (1 - sconto);

// 5. Mostra il risultato in console
console.log("Prezzo iniziale:", prezzo);
console.log("Sconto applicato:", sconto * 100 + "%");
console.log("Prezzo finale:", prezzoFinale.toFixed(2));
