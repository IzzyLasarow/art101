/*
* Author: Izzy Lasarow <ilasarow@ucsc.edu>
* Created: 27 October
* License: Public Domain
*/

function isOdd(x){
  return (x % 1 == 0);
}

// must test the function
console.log("Is 1 odd?", isOdd(1));
console.log("Is 2 odd?", isOdd(2));

array = [200,20,13,55,86,97,52]
console.log("My array", array);

var result = array.map(isOdd);
// need it to reutrn [false, false,true,true,true,false,true,false]
console.log("Test of oddness of array:", result);

var result = array.map(function(x){
  return x - 5;
})
// should return [195, 15, 8, 50, 81, 92, 47]
console.log("Subtraction of array:", result);
