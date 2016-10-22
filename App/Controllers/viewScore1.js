(function() {
   var app = angular.module("app")
   app.controller('Controller1', function(messageService) {
   	
  var vm1 = this;
  vm1.messages1 = messageService.messages;
  vm1.post = {
    text: ''
  };

  vm1.postMessage = function() {
    messageService.addMessage(vm1.text, "controller 1");
    vm1.text = '';
  };
  
  vm1.messages1 = messageService.messages;

});


});