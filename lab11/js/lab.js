// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section

$("#challenges").append("<button id='r-button1'>Bizzare button</button>");

$("#problems").append("<button id='r-button2'>Peculiar button </button>");

$("#results").append("<button id='r-button3'>Funky button </button>");

// Using jQuery:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section

$("#r-button1").click(function(){
  $(this).parent().toggleClass("special");
})
$("#r-button2").click(function(){
  $(this).parent().toggleClass("special");
})
$("#r-button3").click(function(){
  $(this).parent().toggleClass("special");
})
