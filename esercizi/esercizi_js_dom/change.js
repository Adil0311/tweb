function changeText() {
	let newtext = document.getElementById("myinput");
	document.getElementById("myspan").innerHTML = newtext.value;		
}	

window.onload = function () {
    document.getElementById("btn1").onclick = changeText;
}