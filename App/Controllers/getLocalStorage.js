(function() {
	var app = angular.module("app");
	app.controller("getLocalStorage",getLocalStorage);

function getLocalStorage($scope) {
		
   
  	var myData = JSON.parse(localStorage.getItem('myData'));
	alert("Page is loaded");
	
	
	}
  
})();
