(function() {
    angular
        .module('myApp')
        .controller('practicesController', function () {
            var vm = this;
            vm.header = "Best Practices";
            vm.description = "Here are some hard learned lessons that I hope will help you in a professional setting.";
  });
}());
