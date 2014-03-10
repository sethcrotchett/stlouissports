angular.module('stlsports.services', [])

.factory('CardinalsService', ['$http', function ($http) {
	  
  return {
    all: function() {
      return $http.get('http://api.espn.com/v1/sports/baseball/mlb/teams/24?enable=venues&apikey=8t39k5cskxq7ku6c5prwesw6');
    },
    get: function(teamId) {
      // Simple index lookup
      return teams[teamId];
    }
  }
}]);
