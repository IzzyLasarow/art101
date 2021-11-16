/*
* Author: Izzy Lasarow <ilasarow@ucsc.edu>
* Created: 27 October
* License: Public Domain
*/

function sortingHats(str){
  let 1 = str.length;
  let mod = 1 % 4;
    if (mod == 0){
      retrun "Gryffindor";
    }
    else if (mod == 1){
      return "Ravenclaw";
    }
    else if (mod == 2){
      return "Slytherin";
    }
    else if (mod == 3){
      return "Hufflepuff";
    }
  }

  let myButton = $("#button");
  let name = $("#input").val();
  let newText = "<p>The Sorting Hat has sorted you into" + house + "</p>";
  $("output").html(newText);
});
