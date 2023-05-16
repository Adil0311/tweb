window.onload = () => {
  document.getElementById("status").onmousemove = showCoordinates;
  document.getElementById("status").onmousedown = showCoordinates;
  document.getElementById("status").onmouseup = showCoordinates;
};

// Called when any of several mouse events occurs on the status area.
function showCoordinates(event) {
  document.getElementById("status").innerHTML =
   "A " + event.type + " event occurred at (" + event.pageX + ", " + event.pageY + ")";
}
