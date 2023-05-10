"strict mode"

window.onload = function () {
    document.getElementById("homer").onmouseover = function () {
        document.getElementById("msg").innerHTML = "Duh, you are hovering!!";
    }
    document.getElementById("homer").onmouseleave = function () {
        document.getElementById("msg").innerHTML = "";
    }
    
    
    /*
    // dummy version
    document.getElementById("yellow").onclick = changeBackground;
    document.getElementById("red").onclick = changeBackground;
    document.getElementById("yellow").onclick = changeBackground;
    document.getElementById("yellow").onclick = changeBackground;
    document.getElementById("yellow").onclick = changeBackground;
    */
    // smart for version
    let btns = document.getElementsByTagName("button");

    for (const btn of btns) {
        btn.onclick = function () {
        document.body.style.backgroundColor = this.id;
    }};
  
    /*
    // spread operator + forEach  version (HTMLCollection -> array)
    let btns = [...document.getElementsByTagName("button")];

    btns.forEach(btn => {
        btn.onclick = function () {
        document.body.style.backgroundColor = this.id;
    }});
    */
}

/*
function changeBackground() {
    document.body.style.backgroundColor = this.id;
}
*/
