/*
  * Author: Izzy Lasarow <ilasarow@ucsc.edu>
  * Created: 20 October
  * License: Public Domain
*/

// Define Variables
myTransport = ["car" , "bus", "walking", "rides from friends" , "bike"];

myMainRide = {
      make = "Nissan",
      model = "Altima",
      color = "Rodeo Red",
      year = 2008,
      age : function() {
        return 2021 - age;
      }
}

// output
document.writeln("How I get around: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
