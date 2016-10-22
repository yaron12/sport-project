(function() {
	var app = angular.module("app")
	app.controller("calc", calc);
	
	function calc(){
		var scoreTeam1 = '$scope.scoreTeam1'
		var scoreTeam2 = '$scope.scoreTeam2'
		
	if (scoreTeam1 > scoreTeam2) {
		scoreTeam1.wins++;
		scoreTeam2.losses++;
		scoreTeam1.points = scoreTeam1.points + 3;
	}
	else if (scoreTeam1 = scoreTeam2) {
		scoreTeam1.draws++;
		scoreTeam2.draws++;
		scoreTeam1.points++;
		scoreTeam2.points++;
	}
	else {
		scoreTeam2.wins++;
		scoreTeam1.losses++;
		scoreTeam2.points = scoreTeam2.points + 3;
	}

   scoreTeam1.gamesPlayed++;
   scoreTeam2.gamesPlayed++;
   scoreTeam1.goals = scoreTeam1.goals + goals;
   scoreTeam2.goals = scoreTeam1.goals + goals;
   scoreTeam1.goalsMinus = scoreTeam1.goalsMinus - scoreTeam2.goals;
   scoreTeam2.goalsMinus = scoreTeam2.goalsMinus - scoreTeam1.goals;
}
/*
 function save(){
 	$scope.saved = localStorage.setItem('???');
 }
 
 function reset(){
 	$scope.reset = clear???
 }
 */
 
})();
