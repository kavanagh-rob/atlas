(function(){
	'use strict';
	angular.module('homeController', []).controller('homeController', HomeController);
	
	HomeController.$inject = ['$scope'];
	
	function HomeController($scope){
		var vm = this;
	}
})();