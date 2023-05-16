var beerCount = 99;

window.onload = function() {
  document.getElementById("target").onmousemove = eventStatus;
};

function eventStatus(event) {
  var s = "";
  if (undefined !== event.x) {
    s += "         x=" + event.x + ", y=" + event.y + "<br/>";
  }
  if (undefined !== event.clientX) {
    s += "client : x=" + event.clientX + ", y=" + event.clientY + "<br/>";
  }
  if (undefined !== event.layerX) {
    s += "layer  : x=" + event.layerX + ", y=" + event.layerY + "<br/>";
  }
  if (undefined !== event.offsetX) {
    s += "offset : x=" + event.offsetX + ", y=" + event.offsetY + "<br/>";
  }
  if (undefined !== event.pageX) {
    s += "page   : x=" + event.pageX + ", y=" + event.pageY + "<br/>";
  }
  if (undefined !== event.screenX) {
    s += "screen : x=" + event.screenX + ", y=" + event.screenY + "<br/>";
  }
  
  var used = ["x", "clientX", "layerX", "offsetX", "pageX", "screenX"];
  var keys = Object.keys(event);
  for (const key of keys) {
    if (key.toLowerCase().endsWith("x") && used.indexOf(key < 0)) {
      s += key + "=" + event[key] + "<br/>";
    }
  }
  
  document.getElementById("temp").innerHTML = s;
}
