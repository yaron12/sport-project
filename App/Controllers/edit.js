(function() {
	var app = angular.module("app");
	app.controller("edit", edit);

	function edit($scope) {
		$scope.myGoals = goals;
		var goals = [{
			myDatya : "computer",
			myPassword : "888"
		}];
		localStorage.setItem("myData", JSON.stringify(goals));	
		};
})();
