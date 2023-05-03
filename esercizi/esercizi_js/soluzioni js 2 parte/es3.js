function tempo(secondi){ //versione con setInterval
    let t = setInterval(function(){
      console.log(secondi); //stampo il valore
      secondi--; //avanzo nel countdown 
      if(secondi < 0) //controllo di aver raggiunto la fine del countdown
		  clearTimeout(t); // e nel caso interrompo il susseguersi degli intervalli
    },1000); //il tempo tra un intervallo e l'altro
  }

  function tempo2(secondi){ //versione con setTimeout
    let t = setTimeout(function(){ //lancio un evento timeout 
      console.log(secondi);//stampo il valore
      secondi--;//avanzo nel countdown
      if(secondi >= 0) //controllo di non aver raggiunto la fine del countdown
		  tempo2(secondi);// se non l'ho raggiunto richiamo tempo2, che lancerà un nuovo timeout
    },1000);
  }
