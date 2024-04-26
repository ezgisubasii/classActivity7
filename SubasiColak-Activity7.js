var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function addScore(){

	var name = $("name").value;
	var score = parseInt($("score").value);
	if(name==""){
		alert("You must enter a name and a valid score.");
	}
	else if(score<0 || score > 100){
		alert("Score must be between 0 and 100");
	}
	else{
		names.push(name);
		scores.push(score );

	}
		
	

}




function displayScores(){

		var tableContents = "<table><tr><th style = 'text-align:start'>Name</th><th style = 'text-align:start'> Score</th></tr>";
		for (var i = 0; i < names.length; i++) {
			tableContents += `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`;
		}
		tableContents += "</table>";
		$("scores_table").innerHTML = "<h2> Scores </h2>"+ tableContents;
	

}

function displayResults()
{	
	var maxName;
	var max = 0 ;
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
		if(scores[i] > max){
			max = scores[i];
			maxName = names[i];
		}
			
			
	
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> High score = " +maxName + " with a scores of " + max



}
