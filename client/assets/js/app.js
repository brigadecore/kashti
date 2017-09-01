(function() {
  'use strict';

  var app =  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  // consume api for templates/views
  app.controller("projectsController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'http://40.76.22.204/v1/projects',
      headers: {
        'Access-Control-Allow-Origin': 'http://40.76.22.204'
      }
    }).then(function successCallback(response) {
        $scope.projects = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("buildController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'http://40.76.22.204/v1/builds',
      headers: {
        'Access-Control-Allow-Origin': 'http://40.76.22.204'
      }
    }).then(function successCallback(response) {
        $scope.build = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("jobController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'http://40.76.22.204/v1/job/node-runner-1504302282234-800550b4',
      headers: {
        'Access-Control-Allow-Origin': 'http://40.76.22.204'
      }
    }).then(function successCallback(response) {
        $scope.job = response.data;
    },
      function errorCallback(response) {}
    );
  });

})();
