angular.module('stlsports.services', [])

.factory('TeamService', ['$http', function ($http) {
	  
  return {
    get: function(sport, league, id) {
      return $http.get('http://api.espn.com/v1/sports/' + sport + '/' + league + '/teams/' + id + '?enable=venues&apikey=8t39k5cskxq7ku6c5prwesw6');
    },
  }
}]);
