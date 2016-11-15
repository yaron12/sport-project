(function() {
	var app = angular.module("app");
	app.controller("calc", calc);
	
	function calc(){
		var teamAScore = '$scope.teamAScore';
		var teamBScore = '$scope.teamBScore';
		
	if (teamAScore > teamBScore) {
		teamAScore.wins++;
		teamBScore.losses++;
		teamAScore.points = teamAScore.points + 3;
	}
	else if (teamAScore = teamBScore) {
		teamAScore.draws++;
		teamBScore.draws++;
		teamAScore.points++;
		teamBScore.points++;
	}
	else {
		teamBScore.wins++;
		teamAScore.losses++;
		teamBScore.points = teamBScore.points + 3;
	}

   teamAScore.gamesPlayed++;
   teamBScore.gamesPlayed++;
   teamAScore.goals = teamAScore.goals + goals;
   teamBScore.goals = teamAScore.goals + goals;
   teamAScore.goalsMinus = teamAScore.goalsMinus - teamBScore.goals;
   teamBScore.goalsMinus = teamBScore.goalsMinus - teamAScore.goals;
}
 
})();

/*
 * 				gamesPlayed = "";
				wins = "";
				draws = "";
				losses = "";
				goals = "";
				goalsMinus = "";
				points = "";
 */