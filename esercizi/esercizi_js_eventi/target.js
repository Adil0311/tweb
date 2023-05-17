window.onload = () => {
  document.querySelector("#radioduck").onchange=processDucks;
  //document.querySelector("input[name='ducks']").onchange=processDucks;
};

function processDucks(event) {
  document.getElementById("checkedduck").innerHTML=event.target.value + " is checked!";
}
