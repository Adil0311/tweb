const bilanciaparentesi = (str) => {
  let stack = [];
  let aperta = ["{", "[", "("]; //elenco parentesi aperte
  let chiusa = ["}", "]", ")"];//elenco parentesi chiuse
  
  for(let i = 0; i < str.length; i++) {
        let par = str[i];
        if(aperta.includes(par)) {//controllo che sia aperta 
            stack.push(par); //se sì metto nello stack
        }
        else if(chiusa.includes(par)) {//controllo che sia chiusa 
            if(!stack.length) {// se è vuoto  
                return false;
            }
            //altrimenti elimino il primo elemento e controllo se corrisponde alla parentesi 
            //che si sta chiudendo
            else 
            { if( chiusa[aperta.indexOf(stack.pop())]!== par) {
                return false; //se sono parentesi differenti
            }
            }
        }
    }
    // ho finito la stringa, il risultato dipende dal fatto se sullo stack ci sono ancora degli elementi 
	// ovvero parentesi aperte che non hanno trovato una corrispondente parentesi chiusa
    return stack.length === 0;

}


console.log(bilanciaparentesi("{[()}"))