(function() {
  'use strict';
  var app = angular.module("app")
  app.controller('ExampleController', ['$scope', function($scope) {
    var _game = '';
    $scope.score = {
      game: function(newGame) {
       return arguments.length ? (_game = newGame) : _game;
      }
    };
  }]);
})();