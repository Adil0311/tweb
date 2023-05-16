"use strict";

(() =>{
  let beerCount = 99;

  document.getElementById("beercounter").addEventListener("mouseover",countBeers);

  function countBeers() {
    document.getElementById("beercounter").innerText=(--beerCount) + " bottles of beer";
  }
})();
