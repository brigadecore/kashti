(function() {
  'use strict';

  var app =  angular.module('application', [
    'ui.router',
    'ngAnimate',
    'ngCors',

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
  app.controller("buildController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'http://localhost:7745/v1/build/:test-1234567890abcdef-12345678/',
      headers: {
        // 'Access-Control-Allow-Origin': 'http://localhost:7745/'
      }
    }).then(function successCallback(response) {
        $scope.build = response.data;
    },
      function errorCallback(response) {}
    );
  });

  app.controller("projectController", function ($scope, $http) {
    $http({method: 'GET',
      url: 'http://localhost:7745/v1/project/acid-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac/',
      headers: {
        // 'Access-Control-Allow-Origin': 'http://localhost:7745/'
      }
    }).then(function successCallback(response) {
        $scope.project = response.data;
    },
      function errorCallback(response) {}
    );
  });

})();
