window.onload = function() {
  document.getElementById("serif").onclick = fontClick;
  document.getElementById("fantasy").onclick = fontClick;
  document.getElementById("monospace").onclick = fontClick;
  
  document.getElementById("bold").onclick = boldClick;
  document.getElementById("italic").onclick = italicClick;
};

// Called when one of the font radio button is clicked.
function fontClick() { 
  let lyrics = document.getElementById("lyrics");
  lyrics.style.fontFamily = this.id;
}

// Called when the Bold checkbox is clicked.
function boldClick() {
  let lyrics = document.getElementById("lyrics");
  if (this.checked) {
    lyrics.style.fontWeight = "bold";
  } else {
    lyrics.style.fontWeight = "normal";
  }
}

// Called when the Italic checkbox is clicked.
function italicClick() {
  let lyrics = document.getElementById("lyrics");
  if (this.checked) {
    lyrics.style.fontStyle = "italic";
  } else {
    lyrics.style.fontStyle = "normal";
  }
}
