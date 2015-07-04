(function() {
    angular
        .module('myApp')
        .controller('homeController', function () {
            var vm = this;
            vm.message = "Home Page";
            vm.content = "Welcome to my blog!";
	});
}());
