/*
This code separates the functionality into several functions, each with a clear responsibility. 

The isLeapYear() function takes a year as its argument and returns a Boolean indicating 
whether the year is a leap year. 
*/
const isLeapYear = (year) => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  };

/*
The getLeapYears() function takes a starting year and a count, and returns an array of count leap years 
starting from the given year. 
This code uses the Array() constructor to create an array with count elements, then uses the 
fill() method to populate it with undefined values. It then uses the map() method to generate an array 
of years starting from the given year, and finally uses the filter() method to select only the leap years 
from that array.

The map() method takes a callback function that takes three arguments: the current element value, 
the current index, and the array being mapped. In this case, we don't care about the current element value, 
so we use the underscore (_) as a placeholder for that argument.
*/
const getLeapYears = (year, count) => {
    if (count <= 0) {
      return [];
    }
  
    const leapYears = Array(count)
      .fill()
      .map((_, index) => year + index)
      .filter(isLeapYear);
  
    return leapYears;
  };

/*
Finally, the displayLeapYears() function retrieves the input year from the DOM, generates an array of 
10 leap years using getLeapYears(), and displays them in the output element.
*/
const displayLeapYears = () => {
    const input = document.getElementById("year");
    const year = parseInt(input.value);

    const output = document.getElementById("output");
    output.innerHTML = `I 10 anni bisestili dopo il ${year} sono: `;

    const leapYears = getLeapYears(year, 10);
    output.innerHTML += leapYears.join(" ");
};

window.onload = function () {
document.getElementById("btn1").onclick = displayLeapYears;
}