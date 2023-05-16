"use strict";
window.onload = () => {
  document.getElementById("car").onchange=carChange;
}

// Enables hybrid option when Toyota is chosen as car maker
function carChange(event) {
  document.getElementById("selectedCar").innerText=this.value;
  if (this.value != "Toyota"){
    document.getElementById("hybrid").checked=false;
    document.getElementById("hybrid").disabled="disabled";
  } else {
    document.getElementById("hybrid").removeAttribute("disabled");
  }
}
