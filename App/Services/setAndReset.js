(function() {
	/* var app = angular.module("app");
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

	 app.controller('Controller1', function(messageService, $scope) {
	 var vm1 = this;

	 vm1.messages1 = messageService.messages;
	 vm1.post = {
	 text: ''
	 };

	 vm1.postMessage = function(goals) {
	 messageService.addMessage(vm1.text, "controller 1");
	 vm1.text = '';
	 var data= goals ;
	 localStorage.setItem("myData",data);

	 };

	 vm1.messages1 = messageService.messages;

	 });

	 app.controller('Controller2', function($scope, messageService) {

	 var vm2 = this;
	 vm2.messages2 = messageService.messages;
	 locaStroage.getItem("myData");
	 vm2.post = {
	 text: locaStroage.getItem("myData")

	 };

	 });

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
	 }

	 <div ng-controller="Controller1 as vm1">
	 <p ng-repeat="msg1 in vm1.messages1">
	 {{msg1.text}}
	 </p>
	 <p>
	 <input type="number" min="0" max="20" ng-model="vm1.text">
	 <button ng-click="vm1.postMessage(vm1.text)">
	 Post
	 </button>
	 </p>
	 </div>

	 * <div ng-controller="Controller2 as vm2">
	 <p ng-repeat="msg2 in vm2.messages2">
	 {{msg2.text}}
	 </p>
	 </div>*/
})();
