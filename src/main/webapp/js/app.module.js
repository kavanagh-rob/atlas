(function() {
	"use strict";
	var atlasApp = angular.module('atlasApp', ['ui.router','home']);
	
	atlasApp.controller('atlasAppController', function mainController($rootScope){
		var vm=this;
	});
	
	atlasApp.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/home");
		$stateProvider.state('home',{
			url:"/home",
			templateUrl: '/atlas/partials/home.html',
			controller: 'homeController as homeCtrl'
		})
	
		
	})
	
})();