(function() {
  var app = angular.module('myApp');
  app.controller('patternsController', function ($scope) {
    $scope.header = "Patterns";
    $scope.description = "Here are some explanations of my favorite and most used patterns."
  });
}());
