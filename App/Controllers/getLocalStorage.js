(function() {
	var app = angular.module("app");
	app.controller("getLocalStorage",getLocalStorage);

function getLocalStorage($scope) {
		
   
  	var myData = JSON.parse(localStorage.getItem('myData'));
	alert("Page is loaded");
	
	
	}
  
})();

/*
var myApp = angular.module("myApp", []);
 myApp.controller("myController", function($scope, $window) {
$window.onload = function() {
 alert("Called on page load..");
};
});

JSON.parse(localStorage.getItem("myData"));

JSON.parse(locaStroage.getItem("myData")) ;

angular.module('App', [])
  .controller('CinemaCtrl', ['$scope', function($scope) {
    myFunction();
  }]);
  
    getLocalStorage = function(){
  
     app.controller("getLocalStorage", function($scope, $window) {
$window.onload = function() {
 alert("Called on page load..");
};
});

     var app = angular.module("app");
     app.controller('getLocalStorage', ['$scope', function($scope) {
    myFunction();
  }]);
 */