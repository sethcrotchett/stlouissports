angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', ['$scope', 'CardinalsService', 
     function($scope, CardinalsService) {
  
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
}])


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
