(function() {
	var app = angular.module("app")
	app.controller("calc", calc);
	
	function calc(goals){
	if team1 > team2 {
		team1.wins++;
		team2.losses++;
		team1.points = team1.points + 3;
	}
	else if team1 = team2 {
		team1.draws++;
		team2.draws++;
		team1.points++;
		team2.points++;
	}
	else {
		team2.wins++;
		team1.losses++;
		team2.points = team2.points + 3;
	}


   team1.gamesPlayed++;
   team2.gamesPlayed++;
   team1.goals = team1.goals + goals;
   team2.goals = team1.goals + goals;

}
})();