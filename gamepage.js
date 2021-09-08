var player_one = localStorage.getItem("player_one");
var player_two = localStorage.getItem("player_two");

var score_one = 0;
var score_two = 0;

document.getElementById("player_one_name").innerHTML = player_one + ": ";
document.getElementById("player_two_name").innerHTML = player_two + ": ";

document.getElementById("player_one_score").innerHTML = score_one;
document.getElementById("player_two_score").innerHTML = score_two;

document.getElementById("player_question").innerHTML = "Question Turn: " + player_one;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_two;





