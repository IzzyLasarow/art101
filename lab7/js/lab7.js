/*
  * Author: Izzy Lasarow <ilasarow@ucsc.edu>
  * Created: 25 October
  * License: Public Domain
*/

    //Sort the letters of the user's name and return those from the function. Hint: You can't sort strings, but you can sort arrays.
   function sortUserName() {
     var userName = window.prompt("Hello! I would like to know you're name.");

     console.log("userName =", userName);

     var nameArray = userName.split('');
     console.log("nameArray =", nameArray);

     var nameArraySort = nameArray.sort();
     console.log("nameArraySort =", nameArraySort);

     var nameSorted = nameArraySort.join('');
     console.log("nameSorted =", nameSorted);

     return nameSorted;

   }

   document.writeln("I've done it!", sortUserName());
