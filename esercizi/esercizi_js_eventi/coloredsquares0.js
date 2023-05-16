var maxZ = 1000;   // z-index of rectangle that gets clicked
var oldX = null;
var oldY = null;

window.onload = function() {
  // create several randomly positioned squares
  var squareCount = parseInt(Math.random() * 21) + 30;
  for (var i = 0; i < squareCount; i++) {
    var square = $("<div></div>");
    square.addClass("square");
    $("#squarearea").append(square);

    var squareSize = parseInt(square.css("width"));
    var w = parseInt($("#squarearea").css("width")) - squareSize;
    var h = parseInt($("#squarearea").css("height")) - squareSize;
    square.css({"left" : parseInt(Math.random() * w) + "px"});
    square.css({"top" : parseInt(Math.random() * h) + "px"});
    square.css({"background-color" : getRandomColor()});
      
    // square.on("mousedown", squareMouseDown);
    square.on("mousemove", squareMouseMove);
    // square.on("mouseup", squareMouseUp);
  }
};

// Called when the user moves the mouse.  Drags a square.
function squareMouseMove(event) {
    if (oldX !== null && oldY !== null) {
      
        var dx = event.pageX - oldX;
        var dy = event.pageY - oldY;
        $(this).css({"left" : parseInt($(this).css("left")) + dx + "px"});
        $(this).css({"top" : parseInt($(this).css("top"))  + dy + "px"});
    }
    oldX = event.pageX;   // update old x/y to current position
    oldY = event.pageY;
}


function getRandomColor() {
  var letters = "0123456789abcdef";
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  return result;
}

// Called when a square is clicked; moves it to the top or removes it.
function squareClick() {
}
