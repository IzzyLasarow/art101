/*
  * Author: Izzy Lasarow <ilasarow@ucsc.edu>
  * Created: 25 October
  * License: Public Domain
*/

// sourceUserName - A function that takes user input and sort letters in name.
function sortUserName () {
  var userName = window.prompt("Hello! I would like to know you're name.");
  console.log("userName =", userName);
  // need to split array
  var nameArray = userName.split ('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraysort = nameArray.sort();
  console.log("nameArraysort =", nameArraysort);
  //put the array back into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted=", nameSorted);
  //
  return nameSorted;
}
//output
document.writeln("I've done it!",
    sortUserName(), "</br>");
