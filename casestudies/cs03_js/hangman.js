 // constants
 const POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", 
 "obsequious", "dissonant", "toady", "idempotent"];
 const MAX_GUESSES = 6;           // number of total guesses per game

 // global variables
 let word = "?";                // random word user is trying to guess
 let guesses = "";              // letters the player has guessed
 let guessCount = MAX_GUESSES;  // number of guesses player has left

window.onload = () => {
  // event handlers
  document.getElementById("btn_new").onclick=newGame;
  document.getElementById("btn_guess").onclick=guessLetter;
}

// Chooses a new random word and displays its clue on the page.
function newGame() {
  // choose a random word
  const randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  guessCount = MAX_GUESSES;
  guesses = "";
  updatePage();   // show initial word clue - all underscores
}

// Guesses a letter.  Called when the user presses the Guess button.
function guessLetter() {
  const input = document.getElementById("guess");
  const clue = document.getElementById("clue");
  let letter = input.value;
  if (guessCount == 0 || clue.innerHTML.indexOf("_") < 0 ||
      guesses.indexOf(letter) >= 0) {
    return;   // game is over, or already guessed this letter
  }
  guesses += letter;
  if (word.indexOf(letter) < 0) {
    guessCount--;      // an incorrect guess
  }
  updatePage();
}

// Updates the hangman image, word clue, etc. to the current game state.
function updatePage() {
  // update clue string such as "h _ l l _ "
  /*
  // basic version
  for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i);
    if (guesses.indexOf(letter) >= 0) {   // letter has been guessed
      clueString += letter + " ";
    } else {                              // not guessed
      clueString += "_ ";
    }
  }
  */
  /*
  // forEach version
  let clueString = "";
  [...word].forEach((letter) => {
    if (guesses.indexOf(letter) >= 0) {   // letter has been guessed
      clueString += letter + " ";
    } else {                              // not guessed
      clueString += "_ ";
    }
  });
  */

  // 'map+join' version
  let clueString = [...word]
    .map((letter)=>{
      return (guesses.indexOf(letter) >= 0) ?  letter + " " : "_ ";
      })
    .join('');

  const clue = document.getElementById("clue");
  clue.innerHTML = clueString;
  
  // show the guesses the player has made
  const guessArea = document.getElementById("guesses");
  if (guessCount == 0) {
    guessArea.innerHTML = "You lose.";    // game over (loss)
  } else if (clueString.indexOf("_") < 0) {
    guessArea.innerHTML = "You win!!!";     // game over (win)
  } else {
    guessArea.innerHTML = "Guesses: " + guesses;
  }

  // update hangman image
  const image = document.getElementById("hangmanpic");
  image.src = `hangman${guessCount}.gif`;
}
