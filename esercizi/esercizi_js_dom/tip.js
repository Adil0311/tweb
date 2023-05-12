window.onload = function() {
  document.getElementById("tenpercent").onclick = computeTip;
  document.getElementById("fifteenpercent").onclick = computeTip;
  document.getElementById("eighteenpercent").onclick = computeTip;
};

// Computes proper tip amount based on the subtotal and tip percentage.
function computeTip() {
  let subtotal = parseFloat(document.getElementById("subtotal").value);
  let tipPercent = parseInt(this.innerHTML);
  let tipAmount = subtotal * tipPercent / 100.0;
  document.getElementById("total").innerHTML = "Tip: $" + tipAmount;
}
