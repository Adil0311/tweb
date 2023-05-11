"use strict";

(function() {
  let maxZ = 1000;   // z-index of rectangle that gets clicked
  
  window.onload = () =>{
    const add = document.getElementById("add");
    add.onclick = addSquare;
    const colors = document.getElementById("colors");
    colors.onclick = changeColors;
    const squareCount = parseInt(Math.random() * 21) + 30;
    for (let i = 0; i < squareCount; i++) {  // create random squares
      addSquare();
    }
    /*
    // alternatively, you can use higher order function in place of the for loop
    Array.from({ length: squareCount }, addSquare);
    */
  };

  // Gives a new randomly chosen color to every square on the page.
  function changeColors() {
    const squares = document.querySelectorAll("#squarearea div");
    squares.forEach((square)=>{
      square.style.backgroundColor = getRandomColor();
    });
  }
  // Creates and adds a new square div to the page.
  function addSquare() {
    const square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random() * 650) + "px";
    square.style.top = parseInt(Math.random() * 250) + "px";
    square.style.backgroundColor = getRandomColor();
    square.onclick = squareClick;

    const squareArea = document.getElementById("squarearea");
    squareArea.appendChild(square);
  }
  // Generates and returns a random color string such as "#f08a7c".
  function getRandomColor() {
    const letters = "0123456789abcdef";
    const result = Array
      .from({ length: 6 }, 
        () => letters.charAt(parseInt(Math.random() * letters.length)))
      .join("");
    return `#${result}`;
  }
  // Called when a square is clicked; moves it to the top or removes it.
  function squareClick() {
    const oldZ = parseInt(this.style.zIndex);
    if (oldZ == maxZ) {
      this.parentNode.removeChild(this);   // square is on top; remove it
    } else {
      maxZ++;
      this.style.zIndex = maxZ;
    }
  }
})();
