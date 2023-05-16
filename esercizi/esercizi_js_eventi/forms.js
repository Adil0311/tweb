window.onload = () => {
    document.querySelector( "input" ).onchange = (event) => {
        const myinput =  this ;
        document.querySelector( "p" ).innerHTML =
         "\"checked\": <b>" + event.target.checked + "</b><br>" +
         "\"value\": <b>" + event.target.value + "</b><br>";
    };
}