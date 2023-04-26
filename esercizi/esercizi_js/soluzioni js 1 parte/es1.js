"use strict";

// array con i voti originali, creato const perchè non deve essere modificato 
const voti = [18, 29, 30, 30, 27, 24, 25];
let votiDuali = [];

// array per ospitare i voti "migliorati"
const votiMigliori = Array.from(voti); // alternativa votiMigliori =[...voti]

for(let i = 0; i < 2; i++) { // alternativa: for(const i of [0,1]) {
    // cercare il primo voto più basso
    let votoMin = Math.min(...votiMigliori);
    votiDuali.push(30-(votoMin-18));

    // eliminiamolo
    let posizione = votiMigliori.indexOf(votoMin);
    votiMigliori.splice(posizione, 1);
}

// aggiungere in fondo i due voti "duali"
// l'inserimento avviene alla fine delle operazioni di cancellazione perchè il voto cancellato potrebbe essere un minimo
// ad esempio se ho [30,30,30,29, 27] il minimo è 27, il suo duale è 21 se lo inserisco e poi calcolo il minimo troverei che è 21
votiMigliori.push(...votiDuali);

// stampare a schermo gli array
console.log("voti originali: [" + voti + "]");
console.log("voti 'migliorati': [" + votiMigliori + "]");

// calcolare la media per l'array con i voti originali
let media = 0;
for(const v of voti) {
    media += v;
}
media /= voti.length;
media = Math.round(media);

// mostrare la media dei voti originali
console.log("media dei voti originali: " + media);

// calcolare la media per l'array dei voti migliorati
media = 0;
for(const v of votiMigliori) {
    media += v;
}
media /= votiMigliori.length;
media = Math.round(media);


// mostrare la media dei voti migliorati
console.log("media dei voti 'migliorati': " + media);


//la soluzione proposta minimizza l'uso delle variabile, facendo due cicli
//tale soluzione è ottimale se non c'è esigenza di memorizzare per usare nel proseguo del programma i due valori.