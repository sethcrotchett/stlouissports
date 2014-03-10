'use strict';

angular.module('stlsports.controllers')


// A simple controller that shows a tapped item's data
.controller('TeamDetailCtrl',  
   function($scope, $stateParams, CardinalsService) {
  // "Pets" is a service returning mock data (services.js)
  //$scope.cardinals = CardinalsService.get($stateParams.teamId);
	$scope.cardinals;
	  $scope.status;
	  getCardinals();

	  function getCardinals() {
		  CardinalsService.all()
	          .success(function (data) {
	              $scope.cardinals = data.sports[0].leagues[0].teams[0];
	          })
	          .error(function (error) {
	              $scope.status = 'Unable to load customer data: ' + error.message;
	          });
	  };
});
