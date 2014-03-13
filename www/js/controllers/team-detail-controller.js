'use strict';

angular.module('stlsports.controllers')

// A simple controller that shows a tapped item's data
.controller('TeamDetailCtrl',  
   function($scope, $stateParams, TeamService, TeamNewsService) {

	  $scope.team;
	  $scope.teamnews;
	  $scope.status;
	  //getTeamInfo();
	  getTeamNews();

//	  function getTeamInfo() {
//		  TeamService.get($stateParams.sport, $stateParams.league, $stateParams.teamId)
//	          .success(function (data) {
//	              $scope.team = data.sports[0].leagues[0].teams[0];
//	          })
//	          .error(function (error) {
//	              $scope.status = 'Unable to load team data: ' + error.message;
//	          });
//	  };
	  
	  function getTeamNews(){
		  TeamNewsService.get($stateParams.sport, $stateParams.league, $stateParams.teamId)
              .success(function (data) {
                 $scope.teamnews = data.headlines;
              })
              .error(function (error) {
                  $scope.status = 'Unable to load team data: ' + error.message;
              });
	  }
});
