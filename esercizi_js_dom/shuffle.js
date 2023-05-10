window.onload = function() {
  document.getElementById("shuffle").onclick = shuffleClick;
};

function shuffleClick() {
  let lines = items.value.split("\n");   // split into lines
  shuffle(lines);
  items.value = lines.join("\n");        // put back into text area
}

// Randomly rearranges the elements of the given array.
/*
// 'programming with javascript 101' version
function shuffle(a) {
  for (let i = 0; i < a.length; i++) {
    // pick a random index j such that i <= j <= a.length - 1
    var j = i + parseInt(Math.random() * (a.length - i));
    
    // swap
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}
*/

// 'programming with javascript' master class version
const shuffle = (array) => {
  array = array.map((element, index, arr) => {
    const j = index + Math.floor(Math.random() * (arr.length - index));
    [arr[index], arr[j]] = [arr[j], arr[index]];
    return element;
  });
};

//const shuffledArray = shuffle(a);
