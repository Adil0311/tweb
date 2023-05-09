window.onload = function () {
    let links = ["http://slashdot.org/", "http://www.thinkgeek.com/", "http://despair.com/", 
    "http://www.redbubble.com/", "http://googleresearch.blogspot.com/"];

    let index = parseInt(Math.random() * links.length);

    document.getElementById("lnk").href=links[index];
}