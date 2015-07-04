(function() {
    angular
        .module('myApp')
        .controller('contactController', function () {
            var vm = this;
            vm.header = "Contact";
            vm.description = "Find out how to contact me:";
  });
}());
