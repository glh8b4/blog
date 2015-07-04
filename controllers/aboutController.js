(function() {
    angular
        .module('myApp')
	    .controller('aboutController', function () {
	        var vm = this;
		    vm.header = "About";
		    vm.description = "Here on this website I'd like to share the knowledge that I have learned as a programmer.  "
		    + "I've spent many years now getting help from others so now it's my turn to give back to this community that's helped me achieve so much.";
	});
}());
