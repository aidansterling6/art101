/*
 * Author: Jackie and Aidan
 * created wed. Nov 7th
 * License: Public Domain
*/
var resultsButton = $("<button>");
resultsButton.html("results");
$("#results").append("<br>");
$("#results").append(resultsButton);
resultsButton.click(function(){
  resultsButton.parent().toggleClass("special");
});

var resultsButton2 = $("<button class='ChangeColor'>");
resultsButton2.html("click me");
$("#results").append("<br>");
$("#results").append(resultsButton2);
var resultsButton3 = $("<button>");
resultsButton3.html("click me");
$("#results").append("<br>");
$("#results").append(resultsButton3);
resultsButton2.click(function(){
  resultsButton2.toggleClass("ChangeColor");
  resultsButton3.toggleClass("ChangeColor");
});
resultsButton3.click(function(){
  resultsButton2.toggleClass("ChangeColor");
  resultsButton3.toggleClass("ChangeColor");
});

var challengesButton = $("<button>");
challengesButton.html("challenges");
$("#challenges").append("<br>");
$("#challenges").append(challengesButton);
challengesButton.click(function(){
  challengesButton.parent().toggleClass("special");
});

var problemsButton = $("<button>");
problemsButton.html("problems");
$("#problems").append("<br>");
$("#problems").append(problemsButton);
problemsButton.click(function(){
  problemsButton.parent().toggleClass("special");
});
