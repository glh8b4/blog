﻿(function() {
	var app = angular.module('myApp', []);
	app.controller('homeController', function ($scope) {
		$scope.message = "Now viewing home!";
	});
}());