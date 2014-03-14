'use strict';

angular.module('stlsports.controllers')

// A simple controller that shows a tapped item's data
.controller('TeamDetailCtrl',  
   function($scope,  $stateParams) {
	
	$scope.sport = $stateParams.sport;
	$scope.league = $stateParams.league;
	$scope.teamId = $stateParams.teamId;
});
