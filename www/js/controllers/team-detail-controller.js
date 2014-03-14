'use strict';

angular.module('stlsports.controllers')

// A simple controller that shows a tapped item's data
.controller('TeamDetailCtrl',  
   function($scope,  $stateParams) {
	
	$scope.sport = $stateParams.sport;
	$scope.league = $stateParams.league;
	$scope.teamId = $stateParams.teamId;

	  
//	  $scope.team;
//	  $scope.teamnews;
//	  $scope.status;
//	  getTeamNews();
//  
//	  function getTeamNews(){
//		    // Show the loading overlay and text
//		    $scope.loading = $ionicLoading.show({
//		      content: 'Loading',
//		      animation: 'fade-in',
//		      showBackdrop: true,
//		      maxWidth: 200,
//		      showDelay: 500
//		    });		  
//		  
//		  TeamNewsService.get($stateParams.sport, $stateParams.league, $stateParams.teamId)
//              .success(function (data) {
//            	 $scope.loading.hide();
//                 $scope.teamnews = data.headlines;
//              })
//              .error(function (error) {
//            	  $scope.loading.hide();
//                  $scope.status = 'Unable to load team news: ' + error.message;
//              });
//	  }
});
