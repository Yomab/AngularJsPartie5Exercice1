
var app = angular.module("myApp", []);
app.controller("mailCtrl", function($scope) {

  $scope.regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

});
