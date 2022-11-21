/*
 * Author: Jackie and Aidan
 * created wed. Nov 21th
 * License: Public Domain
*/

var info = null;

function getData() {
     $.ajax({
          url: "https://jservice.io/api/random",
          data: {
               count: 4
          },
          type: "GET",
          dataType: "json",
          success: function(data) {
               info = data;
               console.log(data);
               var temp = "question: " + data[0].question + "<br><br>answer: " + data[0].answer;
               $("#output").html(temp);
          },
          error: function (jqXHR, textStatus, errorThrown) {
              info = null;
              console.log("error");
              $("#output").html("ERROR");
          }
     });
}

var button=$("#activate");
button.click(getData);
