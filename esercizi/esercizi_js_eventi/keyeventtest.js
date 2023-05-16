var i = 0;

window.onload = function() {
  document.getElementById("target").onkeydown =  (event) => {eventStatus(event, "#temp");};
  document.getElementById("target").onkeyup = (event) => {eventStatus(event, "#temp2");};
  document.getElementById("target").okeypress = (event) => {eventStatus(event, "#temp3");}; 
};

function eventStatus(event, id) {
  var s = "event type="+event.type+"<br>";
  if (undefined !== event.keyCode) {
    s += "keyCode=" + event.keyCode + "<br/>";
  }
  if (undefined !== event.charCode) {
    s += "charCode=" + event.charCode + "<br/>";
  }
  if (undefined !== event.which) {
    s += "which=" + event.which + "<br/>";
  }
  if (undefined !== event.code) {
    s += "code=" + event.code + "<br/>";
  }
  s += "altKey=" + event.altKey + ", ctrlKey=" + event.ctrlKey + 
  		", shiftKey=" + event.shiftKey + "<br/><br/>";
  s += i++;
  
  document.querySelector(id).innerHTML=s;
}
