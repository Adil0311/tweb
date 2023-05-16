const RETURN_KEY = 13;
const KEY_SPACE = 32;
const KEY_BACKSPACE = 8;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_TAB = 9;
const ALLOWED = [RETURN_KEY, KEY_SPACE, KEY_BACKSPACE, KEY_LEFT, KEY_RIGHT, KEY_TAB];  
// keycodes for space, backspace and others are allowed

window.onload = () => {
  document.getElementById("zip").onkeydown=zipKeyDown;
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
