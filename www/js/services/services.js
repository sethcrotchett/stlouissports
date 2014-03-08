angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})

.factory('CardinalsService', function($http) {
  // Might use a resource here that returns a JSON array

//	{
//	    "sports": [
//	        {
//	            "name": "baseball",
//	            "id": 1,
//	            "uid": "s:1",
//	            "leagues": [
//	                {
//	                    "name": "Major League Baseball",
//	                    "abbreviation": "mlb",
//	                    "id": 10,
//	                    "uid": "s:1~l:10",
//	                    "groupId": 9,
//	                    "shortName": "MLB",
//	                    "teams": [
//	                        {
//	                            "id": 24,
//	                            "uid": "s:1~l:10~t:24",
//	                            "location": "St. Louis",
//	                            "name": "Cardinals",
//	                            "abbreviation": "STL",
//	                            "color": "b80220",
//	                            "links": {
//	                                "api": {
//	                                    "teams": {
//	                                        "href": "http://api.espn.com/v1/sports/baseball/mlb/teams/24"
//	                                    },
//	                                    "news": {
//	                                        "href": "http://api.espn.com/v1/sports/baseball/mlb/teams/24/news"
//	                                    },
//	                                    "notes": {
//	                                        "href": "http://api.espn.com/v1/sports/baseball/mlb/teams/24/news/notes"
//	                                    }
//	                                },
//	                                "web": {
//	                                    "teams": {
//	                                        "href": "http://espn.go.com/mlb/team/_/name/stl/st-louis-cardinals?ex_cid=espnapi_public"
//	                                    }
//	                                },
//	                                "mobile": {
//	                                    "teams": {
//	                                        "href": "http://m.espn.go.com/mlb/clubhouse?teamId=24&ex_cid=espnapi_public"
//	                                    }
//	                                }
//	                            }
//	                        }
//	                    ]
//	                }
//	            ]
//	        }
//	    ],
//	    "resultsOffset": 0,
//	    "resultsLimit": 50,
//	    "resultsCount": 1,
//	    "timestamp": "2014-03-08T01:28:00Z",
//	    "status": "success"
//	}
	
	var CardinalsService = {};

    CardinalsService.getCardinals = function () {
        return $http.get('http://api.espn.com/v1/sports/baseball/mlb/teams/24?apikey=8t39k5cskxq7ku6c5prwesw6');
    };

//	var cardinals=[];
//    $http.get('http://api.espn.com/v1/sports/baseball/mlb/teams/24?apikey=8t39k5cskxq7ku6c5prwesw6').
//    success(function(data) {
//        cardinals = data;
//    }); 

  

//  return {
//    all: function() {
//      return $http.get('http://api.espn.com/v1/sports/baseball/mlb/teams/24?apikey=8t39k5cskxq7ku6c5prwesw6');
//    },
//    get: function(petId) {
//      // Simple index lookup
//      return pets[petId];
//    }
//  }
});
