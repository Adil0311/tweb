const anagrammi= (str1, str2) => {
    if(str1.length !== str2.length) { // se le due stringhe hanno diversa lunghezza ovviamente è falso
        return false;
    }
	//usando il metodo split con paramentro la stringa vuota ottengo una array di "caratteri" che poi ordino
    let sort1 = str1.split('').sort(); 
    let sort2 = str2.split('').sort();
	// con il metodo join passo da array di caratteri a una stringa che poi posso comparare 
    return sort1.join('') === sort2.join(''); 
}
