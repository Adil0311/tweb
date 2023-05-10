window.onload = function() {
  document.getElementById("searchbutton").onclick = searchClick;
};

// Called when the Search button is clicked.
// Looks for paragraphs matching a search string and highlights them.
function searchClick() { 
  let searchPhrase = document.getElementById("searchtext").value;
  
  /*
  let main = document.getElementById("main");
  let mainParas = main.getElementsByTagName("p");
  */

  let mainParas = document.querySelectorAll("#main > p")
  
  /*
  // basic js version
  for (const par of mainParas) {
    if (par.innerHTML.indexOf(searchPhrase) >= 0) {
      par.className = "highlighted";  // highlight
    } else {
      par.className = null;           // un-highlight
    }
  }
  */

  // Jedi version
  mainParas.forEach((par)=> {
    (par.innerHTML.indexOf(searchPhrase) >= 0) ? par.className = "highlighted" : par.className = null;
  })

  /* 
    Note: consider using innerTEXT instead of innerHTML. Why?
  */

}
