angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, CardinalsService) {
  // "Pets" is a service returning mock data (services.js)
  //$scope.cardinals = CardinalsService.all();
  
  
  getCardinals();

  function getCardinals() {
      CardinalsService.getCardinals()
          .success(function (data) {
              $scope.cardinals = data;
          })
          .error(function (error) {
              $scope.status = 'Unable to load customer data: ' + error.message;
          });
  }
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
