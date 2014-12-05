(function() {
  var app = angular.module('myApp');
  app.controller('practicesController', function ($scope) {
    $scope.header = "Best Practices";
    $scope.description = "Here are some hard learned lessons that I hope will help you in a professional setting.";
  });
}());
