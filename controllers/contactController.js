(function() {
  var app = angular.module('myApp');
  app.controller('contactController', function ($scope) {
    $scope.header = "Contact";
    $scope.description = "Find out how to contact me:";
  });
}());
