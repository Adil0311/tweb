function swapText() {
    let span = document.getElementById("output2");
    let textBox = document.getElementById("textbox2");
    let temp = span.innerHTML;
    span.innerHTML = textBox.value;
    textBox.value = temp;
  }

window.onload = function () {
    document.getElementById("btn1").onclick = swapText;
}