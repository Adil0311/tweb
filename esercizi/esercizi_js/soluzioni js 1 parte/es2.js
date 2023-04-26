"use strict";

// lista dei nostri corsi
const lista = `Metodologie di programmazione per il Web, Reti 1,
 Paradigmi di programmazione, Sistemi operativi, Basi di dati e sistemi informativi`;

// creare un array con un nome di corso per posizione
const corsi = lista.split(',');

// togliere gli eventuali spazi bianchi prima e dopo ogni nome di corso
for(const [i, c] of corsi.entries()){ //si iterea su ogni elemento dell'array 
   corsi[i] = c.trim(); //metodo delle stringhe per eliminare gli spazi in eccesso
}

// creare gli acronimi per i corsi
const acronimi = [];

for(const c of corsi) {
	// per creare l'acronimo splitto le parole che costituiscono un corso
    // di ogni parola prendo il primo carattere e ne faccio l'uppercase per renderlo maiuscolo
	const parole = c.split(' '); // array con le singole parole del nome del corso

    let acronimo = '';  //ricordarsi di inizializzarlo a stringa vuota
    for (const p of parole) {
        acronimo += p[0].toUpperCase();
    }

    acronimi.push(acronimo);
}

// stampare acronimi e nomi "allineati"
const output = [];
for(const [i, a] of acronimi.entries()) {
    //output.push(a + " - " + corsi[i]);
    output.push(`${a} - ${corsi[i]}`);
	//sono due soluzione alternative tra di loro
}

// ordinare l'array "acronimi - nomi" dei corsi
output.sort();

// stampare il risultato
console.log(output);