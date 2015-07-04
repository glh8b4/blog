(function() {
    angular
        .module('myApp')
        .controller('louController', function () {
            var vm = this;
            vm.header = "Lou Harmon";
            vm.education = "Bachelor of Science in Computer Science from Missouri S&T";
            vm.workExperience = "Summer of 2011 AECI Software Developer Intern"
                + "\nMay 2012 - October 2014 FlightSafety International Software Developer"
                + "\nOctober 2014 - Present American Fidelity Assurance - Software Developer";
  });
}());
