(function() {
 

   var app = angular.module("app")
   app.controller('Controller2', function($scope, messageService) {
  var vm2 = this;
  vm2.messages2 = messageService.messages;
  vm2.post = {
    text: ''
  };
  });


});