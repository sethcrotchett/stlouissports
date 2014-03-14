'use strict';

angular.module('stlsports', ['ionic', 'stlsports.services', 'stlsports.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the teams tab has its own child nav-view and history
    .state('tab.team-index', {
      url: '/teams',
      views: {
        'teams-tab': {
          templateUrl: 'templates/team-index.html',
          controller: 'TeamIndexCtrl'
        }
      }
    })

    .state('tab.team-detail', {
      url: '/:sport/:league/teams/:teamId',
      views: {
        'teams-tab': {
          templateUrl: 'templates/team-detail.html',
          controller: 'TeamDetailCtrl'
        }
      }
    })
    
    .state('tab.news-index', {
      url: '/:sport/:league/teams/:teamId/news',
      views: {
        'teams-tab': {
          templateUrl: 'templates/news-index.html',
          controller: 'NewsIndexCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'templates/adopt.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/teams');

});

