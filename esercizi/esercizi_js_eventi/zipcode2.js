const RETURN_KEY = 13;
const KEY_SPACE = 32;
const KEY_BACKSPACE = 8;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_TAB = 9;
const ALLOWED = [RETURN_KEY, KEY_SPACE, KEY_BACKSPACE, KEY_LEFT, KEY_RIGHT, KEY_TAB];   
// keycodes for space, backspace, and others are allowed
  
window.onload = function() {
  
  document.getElementById("zip").onkeydown=zipKeyDown;
  document.getElementById("zipform").onsubmit= zipFormSubmit;
};

// Called when a key is pressed on the zip code field.
// Disallows non-numeric characters from being typed.
function zipKeyDown(event) {
    const zero = "0".charCodeAt(0);
    const nine = "9".charCodeAt(0);
    const key = event.keyCode; 
    if ((key < zero || key > nine) && ALLOWED.indexOf(key) < 0) {
        event.preventDefault();
    }
}

// Called when the user tries to submit the form.
function zipFormSubmit(event) {
  if (document.getElementById("zip").value.length != 5) {
    // bad ZIP code; stop form from submitting and show error msg
    document.getElementById("ziperror").innerHTML = "ZIP code must be 5 characters.";
    document.getElementById("zip").classList.add("badformdata");
    event.preventDefault();
  }
}
