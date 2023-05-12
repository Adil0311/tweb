// Displays the next 10 leap years after a given year.
function leapYears() {
  const input = document.getElementById("year");
  let year = parseInt(input.value);
  
  const output = document.getElementById("output");
  output.innerHTML = `I 10 anni bisestili dopo il ${year} sono: `;
  
  /* 
    do you want to get rid of the while statement and using 
    higher-order functions instead? Take a look to 'leapyear1.js'!
  */
  let count = 0;
  while (count < 10) {
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      count++;
      output.innerHTML += ` ${year}`;
    }
    year++;
  }
}

window.onload = function () {
  document.getElementById("btn1").onclick = leapYears;
}
