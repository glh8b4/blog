(function() {
  var app = angular.module('myApp');
  app.controller('projectsController', function ($scope) {
    $scope.header = "Projects";
    $scope.description = "Here are some open projects that I've worked on in the past.";
  });
}());
