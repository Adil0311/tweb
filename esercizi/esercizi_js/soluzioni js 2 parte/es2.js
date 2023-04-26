function longestString1(arr) {
  let longest = ''; // inizializzato a stringa vuota ovvero di lunghezza zero
  for (let i = 0; i < arr.length; i++) { // Scorro una a una le stringhe dell'array
    if (arr[i].length > longest.length) { //confronto la stringa attuale con la più lunga
      longest = arr[i]; // se ne trovo una più lunga aggiorno
    }
  }
  return longest;
}

const longestString2 = (arr) => {
  let longest = ''; // inizializzato a stringa vuota ovvero di lunghezza zero
  arr.forEach((item) => { // per ogni elemento dell'array, chiamato item e passato alla funzione eseguo la funzione qui espressa 
    if(item.length > longest.length) { // lo confronto con la più lunga
            longest = item; // se ne trovo una più lunga aggiorno
        }
  });
  return longest; 
};
