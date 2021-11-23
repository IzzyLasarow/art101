/*
* Author: Izzy Lasarow <ilasarow@ucsc.edu>
* Created: 22 November
* License: Public Domain
*/

// given a number and an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
// loops over numbers and output the number and the matching text

function fizzBuzzBoom(maxNums, factorObj) {
    // Do it for all of out numbers
    for (var num=0; num<maxNums; num++) {
        // reset output string
        var outputStr = "";
        // factors we got from the html
        for (var factor in factorObj) {
            //Is this num is a multiple of factor from above
            if (num % factor == 0) {
                // if so, than add the text to output string
                outputStr += factorObj[factor];
            }
        }
        // now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max")
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})
