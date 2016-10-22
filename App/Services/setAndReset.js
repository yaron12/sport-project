(function() {
   var app = angular.module("app")
   app.factory('messageService', function() {
  var messenger = {
    messages: [],
    identity: 0,
    addMessage: function(text, caller) {
      
      this.identity +=1;
      var id = this.identity,
       message = {
        text: caller  + ": " + text,
        id: id
      };
      
      
      this.messages.push(message);
    }
  };
  
  return messenger;
});

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



app.controller('Controller2', function($scope, messageService) {
  var vm2 = this;
  vm2.messages2 = messageService.messages;
  vm2.post = {
    text: ''
  };
  
});

})();


/*    var YourCtrl = function($scope, localStorageService) {
  // To add to local storage
  localStorageService.set('localStorageKey','Add this!');
  // Read that value back
  var value = localStorageService.get('localStorageKey');
  // To remove a local storage
  localStorageService.remove('localStorageKey');
  // Removes all local storage
  localStorageService.clearAll();
  // You can also play with cookies the same way
  localStorageService.cookie.set('localStorageKey','I am a cookie value now');
}*/
