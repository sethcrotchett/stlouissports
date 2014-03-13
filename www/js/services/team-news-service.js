angular.module('stlsports.services')

.factory('TeamNewsService', ['$http', function ($http) {
	  
  return {
    get: function(sport, league, id) {
      return $http.get('http://api.espn.com/v1/sports/' + sport + '/' + league + '/teams/' + id + '/news?apikey=8t39k5cskxq7ku6c5prwesw6');
    },
  };
}]);