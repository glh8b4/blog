(function() {
    angular
        .module('myApp')
        .controller('projectsController', function () {
            var vm = this;
            vm.header = "Projects";
            vm.description = "Here are some open projects that I've worked on in the past.";
  });
}());
