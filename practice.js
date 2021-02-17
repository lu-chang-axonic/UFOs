// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function printHello() {
    console.log("Hello there!");
  }
// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  console.log(doubleAddition(3,4));

// Convert to an arrow function
doubleAddition=(c,d) => (c+d)*2;

  // Original addition function
function addition(a, b) {
    return a + b;
  }

  // Converted to an arrow function
addition = (a, b) => a + b;

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

//For loop for veggies. 
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}


