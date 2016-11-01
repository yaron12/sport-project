(function() {
	var app = angular.module("app");
	app.controller("edit", edit);

	function edit() {
		$scope.myGoals = goals;
		var goals = [{
			myDatya : "computer",
			myPassword : "888"
		}];
		localStorage.setItem("myData", JSON.stringify(goals));
	};


})();
/*var data ={round: 1,
 team:{name: 'מכבי תל אביב' ,
 goals:2
 }};

 function setLocalStorage($scope) {

 localStorage.setItem("myData", JSON.stringify(data));
 }

 function setLocalStorage($scope){

 var goals ={round: 1,
 team:{name: 'מכבי תל אביב' ,
 goals:2
 }};

 */