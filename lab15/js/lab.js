//var myUrl = "http://numbersapi.com/42/math";
//var myUrl = "https://api.kanye.rest/";
var myUrl = "https://api.kanye.rest/";

$("#activate").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // Any data to send
      // data: { id: 123},
      // POST or GET request
      type: "GET",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      //$("#output").html(JSON.stringify(data));
      //var imgUrl = "https://cataas.com" + data.url;
      //var imgTag = "<img src=" + imgUrl + ">";
      $("#output").html(JSON.stringify(data));
  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);
      $("#output").html("Error")

	})

}
