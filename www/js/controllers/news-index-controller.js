'use strict';

angular.module('stlsports.controllers')

 .controller('NewsIndexCtrl',  
   function($scope, $stateParams, $ionicLoading, TeamNewsService) {


	  $scope.team;
	  $scope.teamnews;
	  $scope.status;
	  getTeamNews();
  
	  function getTeamNews(){
		    // Show the loading overlay and text
		    $scope.loading = $ionicLoading.show({
		      content: 'Loading',
		      animation: 'fade-in',
		      showBackdrop: true,
		      maxWidth: 200,
		      showDelay: 500
		    });		  
		  
		  TeamNewsService.get($stateParams.sport, $stateParams.league, $stateParams.teamId)
              .success(function (data) {
            	 $scope.loading.hide();
                 $scope.teamnews = data.headlines;
              })
              .error(function (error) {
            	  $scope.loading.hide();
                  $scope.status = 'Unable to load team news: ' + error.message;
              });
	  }
 });
