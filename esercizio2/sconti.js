// 1. Chiedi all'utente il prezzo
let prezzo = prompt("Inserisci il prezzo del prodotto:");
prezzo = parseFloat(prezzo); // converti la stringa in numero decimale

// 2. Chiedi se ha un coupon (sì/no)
let haCoupon = prompt("Hai un coupon sconto? (sì/no)");

// 3. Imposta regole per lo sconto
// - se l'utente ha coupon, applichiamo uno sconto del 20%
// - altrimenti nessuno sconto
// - BONUS: se il prezzo è sopra un certo valore, applichiamo uno sconto extra

let sconto = 0;
if (haCoupon.toLowerCase() === "sì" || haCoupon.toLowerCase() === "si" || haCoupon.toLowerCase() === "s") {
    sconto = 0.2; // 20%
}

// Se il prezzo è maggiore di 100, sconto aggiuntivo del 5%
if (prezzo > 1219.99) {
    sconto = 0.18032786885245901639344262295082; // 18.032786885245901639344262295082%
} else if (prezzo > 109.99) {
    sconto = 0.09090909090909090909090909090909; // 9.090909090909090909090909090909%
} else if (prezzo > 10.39) {
    sconto = 0.038461538461538461538461538461538; // 3.8461538461538461538461538461538%
}

// 4. Calcola il prezzo finale
let prezzoFinale = prezzo * (1 - sconto);

// 5. Mostra il risultato in console
console.log("Prezzo iniziale: ", Math.round(prezzo * 100) / 100) + "€";
console.log("Sconto applicato: ", sconto * 100 + "%");
console.log("Prezzo finale: ", prezzoFinale.toFixed(2) + "€");
