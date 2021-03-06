﻿(function(){
	var app = angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		  .when('/', {
			  templateUrl: 'views/home.html',
			  controller: 'homeController'
		  })
			.when('/lou', {
				templateUrl: 'views/lou.html',
				controller: 'louController'
			})
			.when('/projects', {
				templateUrl: 'views/projects.html',
				controller: 'projectsController'
			})
			.when('/patterns', {
				templateUrl: 'views/patterns.html',
				controller: 'patternsController'
			})
			.when('/practices', {
				templateUrl: 'views/practices.html',
				controller: 'practicesController'
			})
		  .when('/about', {
			  templateUrl: 'views/about.html',
			  controller: 'aboutController'
		  })
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'contactController'
			})
		  .otherwise({
			  redirectTo: '/'
		  });
	}])
	.controller('mainController', function () {
	    var vm = this;
		vm.footer = "Footer";
	});
}());
