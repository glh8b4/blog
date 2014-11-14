(function() {
	var app = angular.module('myApp', []);
	app.controller('aboutController', function ($scope) {
		$scope.message = "Now viewing about!";
	});
}());