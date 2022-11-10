/*
 * Author: Jackie and Aidan
 * created wed. Nov 9th
 * License: Public Domain
*/
function sortingHat(str) {
	var length = str.length;
	var mod = length%4;
	var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
	return houses[mod];
}

var button=$("#button");
button.click(function() {
  var input=$("#input");
	var name=input.val();
  console.log(name);
	var house=sortingHat(name);
	var paragraphOutput2=$("<p>The Sorting Hat has sorted you into " + house + "</p>");
	$("#output").append(paragraphOutput2);
	var paragraphOutput1;
	if(house == "Gryffindor"){
		paragraphOutput1=$("<p>Gryffindor's are brave and tend to act first and think later.</p>");
		$("#output").append(paragraphOutput1);
	} else if(house == "Ravenclaw"){
		paragraphOutput1=$("<p>Ravenclaw's are smart, wise, and analyse everything.</p>");
		$("#output").append(paragraphOutput1);
	} else if(house == "Slytherin"){
		paragraphOutput1=$("<p>Slytherin's are ambitious, shrewd, and often have a dark sense of humor.</p>");
		$("#output").append(paragraphOutput1);
	} else if(house == "Hufflepuff"){
		paragraphOutput1=$("<p>Hufflepuff's are humble, kind, and hardworking.</p>");
		$("#output").append(paragraphOutput1);
	}

});
