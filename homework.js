

// two dimensional array, print two items to the console.
var colors = [["yellow","grey",],["orange","black"]];
console.log(colors[1][0]);



function person(name){
 return name;
}

console.log("I think " + person("Jeff") + " is a cool guy");

console.log("I think " + person("Matt") + " is a cool guy");

console.log("I think " + person("Alex") + " is a cool guy");

// print song to the console, in its entirety, using a for loop
for(var i = 99; i > 0; i--){
  console.log(i + " bottles of beer on the wall");
}


// while loop 
var i = 99;
  
  while (i > 0){
  console.log(i + " bottles of beer on the wall, " + i + " bottles of root beer...");
       i--;    
  console.log( "take one down, pass it around " + i + " bottles of root beer on the wall");
  }

// declare a function that takes in an array as an argument
/*  var myArray = ["Ford", "BMW", "Nissan"];
function arrayCounter (array) {
    for(var i = 0; i < array.length; i++) {
        array.reverse();
        console.log(array[i]);
    }
}
arrayCounter(myArray);
*/

var myArray = ["Ford", "BMW", "Nissan"];
function arrayCounter (array) {
for (var i = array.length - 1; i >= 0; --i) {
  console.log(array[i]);
  }
}

arrayCounter(myArray);

