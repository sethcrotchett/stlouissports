'use strict';

angular.module('stlsports.controllers')

// A simple controller that shows a tapped item's data
.controller('TeamDetailCtrl',  
   function($scope, $stateParams, $ionicLoading, TeamService, TeamNewsService) {

	  
	  $scope.team;
	  $scope.teamnews;
	  $scope.status;
	  getTeamNews();
  
	  function getTeamNews(){


		    // Show the loading overlay and text
		    $scope.loading = $ionicLoading.show({

		      // The text to display in the loading indicator
		      content: 'Loading',

		      // The animation to use
		      animation: 'fade-in',

		      // Will a dark overlay or backdrop cover the entire view
		      showBackdrop: true,

		      // The maximum width of the loading indicator
		      // Text will be wrapped if longer than maxWidth
		      maxWidth: 200,

		      // The delay in showing the indicator
		      showDelay: 100
		    });

		  
		  // Hide the loading indicator
//		  $scope.hide = function(){
//		    $scope.loading.hide();
//		  };
		  
		  
		  TeamNewsService.get($stateParams.sport, $stateParams.league, $stateParams.teamId)
              .success(function (data) {
            	 $scope.loading.hide();
                 $scope.teamnews = data.headlines;
              })
              .error(function (error) {
            	  $scope.loading.hide();
                  $scope.status = 'Unable to load team news: ' + error.message;
                  
              });
		 // $scope.hide();
	  }
	  

});
