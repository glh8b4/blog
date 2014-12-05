(function() {
  var app = angular.module('myApp');
  app.controller('louController', function ($scope) {
    $scope.header = "Lou Harmon";
    $scope.description = "Here you can find out more about me";
  });
}());
