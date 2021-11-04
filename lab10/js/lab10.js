/*
* Author: Izzy Lasarow <ilasarow@ucsc.edu>
* Created: 11.03.2021
* License: Public Domain
*/
// Borrow the nameSort() function or my anagram() function from Lab 7.
function sortUserName () {
  var userName = window.prompt("I would like to know you're name.");

input
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

var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", function(){
  var name = prompt("I would like to know you're name.")

  var name = prompt("Please enter your name:");

  // Use this input to change the text from ‘Oy, Mate’ to ‘Oy’ + the user’s name
  var headingEl = document.getElementById("title");
  headingEl.innerHTML = "Oy, " + name;

})
